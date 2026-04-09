import { useParams, Link } from 'react-router-dom';
import { caseStudies, CALENDLY_URL } from '../data/siteData';

export default function CaseStudyDetailPage() {
  const { id } = useParams();
  const cs = caseStudies.find(c => c.id === id);

  if (!cs) {
    return (
      <div style={{ padding: '12rem 4vw 6rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', marginBottom: '1rem' }}>
          Case study not found
        </h2>
        <Link to="/case-studies" className="btn-outline">← Back to Case Studies</Link>
      </div>
    );
  }

  const idx = caseStudies.findIndex(c => c.id === id);
  const prev = idx > 0 ? caseStudies[idx - 1] : null;
  const next = idx < caseStudies.length - 1 ? caseStudies[idx + 1] : null;

  return (
    <>
      {/* Header */}
      <div className="case-study-header">
        <Link to="/case-studies" className="back-link">All Case Studies</Link>

        <div className="case-study-meta">
          <div className="case-meta-item">
            Category
            <span>{cs.category}</span>
          </div>
          <div className="case-meta-item">
            Client
            <span>{cs.client}</span>
          </div>
          <div className="case-meta-item">
            Year
            <span>{cs.year}</span>
          </div>
          <div className="case-meta-item">
            Duration
            <span>{cs.duration}</span>
          </div>
          <div className="case-meta-item">
            Location
            <span>{cs.location}</span>
          </div>
        </div>

        <h1 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          maxWidth: '22ch',
          marginBottom: '1.5rem'
        }}>
          {cs.title}
        </h1>

        <p style={{ fontSize: '1.05rem', color: 'var(--muted)', maxWidth: '55ch', lineHeight: 1.7 }}>
          {cs.excerpt}
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {cs.tags.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="case-study-body">
        {cs.fullContent ? (
          cs.fullContent.map((section, i) => (
            <div key={i} className="case-study-section">
              {section.type === 'image' ? (
                <div className="case-study-inline-image">
                  <img src={section.src} alt={section.alt} style={{ width: '100%', borderRadius: 'var(--radius)', margin: '2rem 0' }} />
                  {section.caption && <div className="image-caption">{section.caption}</div>}
                </div>
              ) : (
                <>
                  <div className="section-label">{section.label || 'Details'}</div>
                  <h3>{section.title}</h3>
                  <div className="section-text" style={{ whiteSpace: 'pre-line' }}>{section.content}</div>
                </>
              )}
            </div>
          ))
        ) : (
          <>
            {/* Fallback to old schema */}
            <div className="case-study-section">
              <div className="section-label">The Challenge</div>
              <h3>What the client needed</h3>
              <p>{cs.challenge}</p>
            </div>

            <div className="case-study-section">
              <div className="section-label">Our Approach</div>
              <h3>How we worked</h3>
              <p>{cs.approach}</p>
            </div>

            {cs.findings && cs.findings.length > 0 && (
              <div className="case-study-section">
                <div className="section-label">Key Findings</div>
                <h3>What the evidence showed</h3>
                <ul className="findings-list">
                  {cs.findings.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        {/* Impact */}
        <div
          className="case-study-section"
          style={{
            background: 'var(--paper2)',
            padding: '2.5rem',
            borderLeft: '3px solid var(--accent)',
            margin: '2rem 0',
          }}
        >
          <div className="section-label">Impact</div>
          <h3 style={{ marginBottom: '1rem' }}>What changed</h3>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--ink)' }}>{cs.impact}</p>
        </div>

        {/* CTAs */}
        <div style={{
          paddingTop: '3rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
        }}>
          {cs.externalLink && (
            <a
              href={cs.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit Platform ↗
            </a>
          )}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cs.externalLink ? 'btn-outline' : 'btn-primary'}
          >
            Discuss a Similar Project →
          </a>
          <Link to="/case-studies" className="btn-outline">
            ← All Case Studies
          </Link>
        </div>
      </div>

      {/* Prev / Next navigation */}
      {(prev || next) && (
        <div style={{
          borderTop: '1px solid var(--border)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}>
          {prev ? (
            <Link
              to={`/case-studies/${prev.id}`}
              style={{
                padding: '2.5rem 4vw',
                borderRight: '1px solid var(--border)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--paper2)'}
              onMouseLeave={e => e.currentTarget.style.background = ''}
            >
              <div style={{ fontSize: '0.65rem', fontFamily: 'var(--mono)', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                ← Previous
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                {prev.category}
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', lineHeight: 1.3 }}>
                {prev.title}
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              to={`/case-studies/${next.id}`}
              style={{
                padding: '2.5rem 4vw',
                textDecoration: 'none',
                color: 'inherit',
                textAlign: 'right',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--paper2)'}
              onMouseLeave={e => e.currentTarget.style.background = ''}
            >
              <div style={{ fontSize: '0.65rem', fontFamily: 'var(--mono)', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Next →
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                {next.category}
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', lineHeight: 1.3 }}>
                {next.title}
              </div>
            </Link>
          ) : <div />}
        </div>
      )}
    </>
  );
}
