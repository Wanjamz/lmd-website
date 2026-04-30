import { useState } from 'react';
import { mappedInsights } from '../data/siteData';

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
      style={{ cursor: 'pointer' }}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick(insight)}
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
          <div className="mapped-card-placeholder">
            <span>🗺</span>
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

function InsightDetail({ insight, onClose }) {
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
              <span>🗺</span>
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

        <div className="mapped-cta-bar">
          <p>Does your organisation need spatial analysis like this?</p>
          <a href="/contact" className="btn-primary">Get in touch →</a>
        </div>
      </div>
    </div>
  );
}

export default function MappedPage() {
  const [selected, setSelected] = useState(null);

  if (selected) {
    return <InsightDetail insight={selected} onClose={() => setSelected(null)} />;
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
        <div className="mapped-hero-deco" aria-hidden="true">⬡</div>
      </header>

      {/* ── Insights grid ── */}
      <section className="mapped-insights-section">
        <div className="mapped-insights-grid">
          {mappedInsights.map(insight => (
            <InsightCard key={insight.id} insight={insight} onClick={setSelected} />
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
            <h3>What we analyse</h3>
            <ul>
              <li>Flood analysis</li>
              <li>Drought mapping</li>
              <li>Programme coverage mapping</li>
              <li>Data visualisations</li>
            </ul>
          </div>

          <div className="mapped-contact-soft">
            <p>If your organisation needs similar insights, <a href="/contact">get in touch</a>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
