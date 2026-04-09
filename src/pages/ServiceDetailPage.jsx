import { useParams, Link } from 'react-router-dom';
import ServiceIcon from '../components/ServiceIcon';
import { services, caseStudies, CALENDLY_URL } from '../data/siteData';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const svc = services.find(s => s.id === id);

  if (!svc) {
    return (
      <div style={{ padding: '12rem 4vw 6rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', marginBottom: '1rem' }}>
          Service not found
        </h2>
        <Link to="/#services" className="btn-outline">← Back to Services</Link>
      </div>
    );
  }

  // Related case studies
  const related = caseStudies.filter(cs =>
    cs.category === svc.title.split(' ')[0] ||
    cs.tags.some(t => svc.tags.includes(t))
  ).slice(0, 3);

  // Index for nav back/forward
  const idx = services.findIndex(s => s.id === id);
  const prev = idx > 0 ? services[idx - 1] : null;
  const next = idx < services.length - 1 ? services[idx + 1] : null;

  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <Link to="/#services" className="back-link">All Services</Link>

        <div className="section-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ServiceIcon name={svc.icon} size={20} strokeWidth={1.5} />
          <span>Service</span>
        </div>
        <h1>
          <em style={{ color: 'var(--accent)' }}>{svc.title}</em>
        </h1>
        <p>{svc.short}</p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Free Call →
          </a>
          <Link to="/contact" className="btn-outline">Send a Brief</Link>
        </div>
      </div>

      {/* Main content */}
      <section className="page-section">
        <div className="service-detail-grid">
          {/* Description */}
          <div>
            <div className="section-label">Overview</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', letterSpacing: '-0.02em', marginBottom: '1.5rem', lineHeight: 1.2 }}>
              How we approach {svc.title.toLowerCase()}
            </h2>
            {svc.description.split('\n\n').map((para, i) => (
              <p key={i} style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                {para.trim()}
              </p>
            ))}

            <div className="service-callout">
              <p>{svc.callout}</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="section-label">What's Included</div>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>
              Service areas & deliverables
            </h3>
            <ul className="service-features-list">
              {svc.features.map(f => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            {svc.clients && svc.clients.length > 0 && (
              <div style={{ marginTop: '2.5rem' }}>
                <div className="section-label">Past Clients</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
                  {svc.clients.map(c => (
                    <span key={c} className="tag" style={{ color: 'var(--muted)', background: 'var(--paper2)' }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related case studies */}
      {related.length > 0 && (
        <section className="page-section" style={{ background: 'var(--paper2)' }}>
          <div className="section-label">Related Work</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '2.5rem' }}>
            Case studies in {svc.title}
          </h2>
          <div className="work-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {related.map(cs => (
              <Link key={cs.id} to={`/case-studies/${cs.id}`} className="work-card">
                <span className="work-card-type">{cs.category}</span>
                <span className="work-card-client">{cs.client}</span>
                <h3>{cs.title}</h3>
                <p>{cs.excerpt}</p>
                <span className="work-card-arrow">→</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Service navigation */}
      <section className="page-section">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {prev ? (
            <Link
              to={`/services/${prev.id}`}
              style={{
                border: '1px solid var(--border)',
                padding: '1.5rem',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--paper2)'}
              onMouseLeave={e => e.currentTarget.style.background = ''}
            >
              <div style={{ fontSize: '0.68rem', fontFamily: 'var(--mono)', letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                ← Previous
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem' }}>{prev.title}</div>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              to={`/services/${next.id}`}
              style={{
                border: '1px solid var(--border)',
                padding: '1.5rem',
                textDecoration: 'none',
                color: 'inherit',
                textAlign: 'right',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--paper2)'}
              onMouseLeave={e => e.currentTarget.style.background = ''}
            >
              <div style={{ fontSize: '0.68rem', fontFamily: 'var(--mono)', letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Next →
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem' }}>{next.title}</div>
            </Link>
          ) : <div />}
        </div>
      </section>
    </>
  );
}
