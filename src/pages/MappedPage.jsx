import { useEffect, useLayoutEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Map } from 'lucide-react';
import { useMappedInsights } from '../lib/useContentData';
import { researchPapers } from '../content/research';

/* ─────────────────────────────────────────────────────────────────────────
   MAPPED — Spatial Intelligence
   All content is driven by the `mappedInsights` array in siteData.js.
   To add a new insight: open siteData.js and add a new object to that array.
───────────────────────────────────────────────────────────────────────── */

function InsightCard({ insight, onClick }) {
  return (
    <article
      className="mapped-card"
      onClick={() => onClick(insight)}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(insight);
        }
      }}
    >
      {/* Map visual */}
      <div className="mapped-card-img-wrap">
        {insight.mapEmbed ? (
          <iframe
            src={insight.mapEmbed}
            title={insight.title}
            className="mapped-card-iframe"
            loading="lazy"
          />
        ) : insight.mapImage ? (
          <img
            src={insight.mapImage}
            alt={`Map: ${insight.title}`}
            className="mapped-card-img"
          />
        ) : (
          <div className="mapped-detail-placeholder" style={{ height: '100%', border: 'none' }}>
            <Map size={36} strokeWidth={1.25} aria-hidden="true" />
          </div>
        )}
        <div className="mapped-card-overlay">
          <span className="mapped-region-tag">{insight.region}</span>
        </div>
      </div>

      {/* Text */}
      <div className="mapped-card-body">
        <div className="mapped-card-meta">
          <span className="mapped-date">{insight.date}</span>
        </div>
        <h2 className="mapped-card-title">{insight.title}</h2>
        <p className="mapped-card-summary">{insight.summary}</p>
        <span className="mapped-read-more">Read insight →</span>
      </div>
    </article>
  );
}

/* A full research paper, shown in its own formatting. Figures that have not
   been uploaded yet are hidden rather than shown as broken images. */
function ResearchPaper({ html, onClose }) {
  const ref = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); }, [html]);

  /* Image errors don't bubble, so listen in the capture phase before any can fire. */
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const hide = img => { (img.closest('figure') || img).style.display = 'none'; };
    const onError = e => { if (e.target.tagName === 'IMG') hide(e.target); };
    root.addEventListener('error', onError, true);
    root.querySelectorAll('img').forEach(img => {
      if (img.complete && img.naturalWidth === 0) hide(img);
    });
    return () => root.removeEventListener('error', onError, true);
  }, [html]);

  /* In-page contents links scroll within the paper instead of changing the route. */
  const onClick = e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    e.preventDefault();
    ref.current.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="mapped-research">
      <div className="mapped-research-bar">
        <button className="mapped-back-btn" onClick={onClose}>← Back to Mapped</button>
      </div>
      <div ref={ref} onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

function InsightDetail({ insight, onClose }) {
  /* Opening an insight starts at its title, not wherever the grid was. */
  useEffect(() => { window.scrollTo(0, 0); }, [insight.id]);

  return (
    <div className="mapped-detail-overlay">
      <div className="mapped-detail">
        <button className="mapped-back-btn" onClick={onClose}>← Back to Mapped</button>

        <div className="mapped-detail-meta">
          <span className="mapped-region-tag">{insight.region}</span>
          <span className="mapped-date">{insight.date}</span>
        </div>

        <h1 className="mapped-detail-title">{insight.title}</h1>

        {/* Map visual */}
        <div className="mapped-detail-map">
          {insight.mapEmbed ? (
            <iframe
              src={insight.mapEmbed}
              title={insight.title}
              className="mapped-detail-iframe"
              loading="lazy"
            />
          ) : insight.mapImage ? (
            <img
              src={insight.mapImage}
              alt={`Map: ${insight.title}`}
              className="mapped-detail-img"
            />
          ) : (
            <div className="mapped-detail-placeholder">
              <Map size={40} strokeWidth={1.25} aria-hidden="true" />
              <p>Map visual coming soon</p>
            </div>
          )}
          <p className="mapped-detail-img-caption">Visual representation — spatial data</p>
        </div>

        {/* Explanation */}
        <section className="mapped-detail-section">
          <h3 className="mapped-detail-section-label">What Happened</h3>
          <p className="mapped-detail-text">{insight.summary}</p>
        </section>

        {/* 3 Key Insights */}
        <section className="mapped-detail-section">
          <h3 className="mapped-detail-section-label">3 Key Insights</h3>
          <ol className="mapped-insights-list">
            {insight.insights.map((item, i) => (
              <li key={i} className="mapped-insight-item">
                <span className="mapped-insight-num">0{i + 1}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Implications — optional */}
        {insight.implications && (
          <section className="mapped-detail-section mapped-implications">
            <h3 className="mapped-detail-section-label">Implications</h3>
            <p className="mapped-detail-text">{insight.implications}</p>
          </section>
        )}

        {/* Full research paper — optional */}
        {insight.reportUrl && (
          <section className="mapped-detail-section mapped-report">
            <h3 className="mapped-detail-section-label">Read the full paper</h3>
            {insight.reportNote && <p className="mapped-detail-text">{insight.reportNote}</p>}
            <a
              href={insight.reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Open the research paper ↗
            </a>
          </section>
        )}

        <div className="mapped-cta-bar">
          <p>Does your organisation need spatial analysis like this?</p>
          <Link to="/contact" className="btn-primary">Get in touch →</Link>
        </div>
      </div>
    </div>
  );
}

export default function MappedPage() {
  const { data: insights } = useMappedInsights();
  /* The open insight lives in the URL, so Back closes it and links can be shared. */
  const [params, setParams] = useSearchParams();
  const selected = insights.find(i => i.id === params.get('insight'));
  const open = insight => setParams({ insight: insight.id });
  const close = () => setParams({});

  if (selected && researchPapers[selected.id]) {
    return <ResearchPaper html={researchPapers[selected.id]} onClose={close} />;
  }
  if (selected) {
    return <InsightDetail insight={selected} onClose={close} />;
  }

  return (
    <main className="mapped-page">
      {/* ── Hero ── */}
      <header className="mapped-hero">
        <div className="mapped-hero-inner">
          <div className="mapped-hero-label">An LMD Initiative</div>
          <h1 className="mapped-hero-title">Mapped</h1>
          <p className="mapped-hero-sub">
            Spatial Intelligence — Exploring real-world problems through maps, data, and design.
          </p>
        </div>
      </header>

      {/* ── Insights grid ── */}
      <section className="mapped-insights-section">
        <div className="section-label">Analysis</div>
        <h2 className="mapped-about-title" style={{ marginBottom: '2.5rem' }}>
          What we have analysed
        </h2>

        <div className="mapped-insights-grid">
          {insights.map(insight => (
            <InsightCard key={insight.id} insight={insight} onClick={open} />
          ))}
        </div>
      </section>

      {/* ── About Mapped ── */}
      <section className="mapped-about-section">
        <div className="mapped-about-inner">
          <h2 className="mapped-about-title">About Mapped</h2>
          <p className="mapped-about-text">
            Mapped is an initiative by LMD focused on understanding real-world challenges through
            spatial analysis and visual storytelling. No hype.
          </p>

          <div className="mapped-services-list">
            <h3>Areas we cover</h3>
            <ul>
              <li>Flood analysis</li>
              <li>Drought mapping</li>
              <li>Programme coverage mapping</li>
              <li>Data visualisations</li>
            </ul>
          </div>

          <div className="mapped-contact-soft">
            <p>If your organisation needs similar insights, <Link to="/contact">get in touch</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
