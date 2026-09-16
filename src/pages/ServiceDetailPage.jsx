import { useParams, Link } from 'react-router-dom';
import ServiceIcon from '../components/ServiceIcon';
import { services, team, CALENDLY_URL } from '../data/siteData';
import { useCaseStudies } from '../lib/useContentData';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const { data: caseStudies } = useCaseStudies();
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

  /* Examples of this work.
     Hand-picked ids first so every service is guaranteed at least one, then
     anything matching on category or shared tags to fill the row. */
  const picked = (svc.examples ?? [])
    .map(exId => caseStudies.find(cs => cs.id === exId))
    .filter(Boolean);

  const matched = caseStudies.filter(cs =>
    !picked.includes(cs) && (
      cs.category === svc.category ||
      cs.tags.some(t => svc.tags.includes(t))
    )
  );

  const related = [...picked, ...matched].slice(0, 3);

  const pillarTeam = (svc.teamIds ?? [])
    .map(tid => team.find(m => m.id === tid))
    .filter(Boolean);

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
          <span>Practice Area {svc.pillar}</span>
        </div>
        <h1>
          <em>{svc.title}</em>
        </h1>
        <p className="pillar-kicker" style={{ marginBottom: '0.75rem' }}>{svc.kicker}</p>
        <p>{svc.valueLine}</p>

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

          {/* Service inventory, grouped */}
          <div>
            <div className="section-label">What's Included</div>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>
              Service areas & deliverables
            </h3>

            {svc.groups.map(group => (
              <div className="service-group" key={group.title}>
                <h4>{group.title}</h4>
                <ul className="service-features-list">
                  {group.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {svc.tools && svc.tools.length > 0 && (
              <div style={{ marginTop: '2.5rem' }}>
                <div className="section-label">Tools</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
                  {svc.tools.map(t => (
                    <span key={t} className="tag" style={{ color: 'var(--muted)', background: 'var(--paper2)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {svc.frameworks && svc.frameworks.length > 0 && (
              <div style={{ marginTop: '2rem' }}>
                <div className="section-label">Grounded In</div>
                <ul className="service-features-list" style={{ marginTop: '0.75rem' }}>
                  {svc.frameworks.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Selected work — as listed in the firm profile */}
      {svc.selectedWork && svc.selectedWork.length > 0 && (
        <section className="page-section">
          <div className="section-label">Selected Work</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
            Assignments in this pillar
          </h2>
          <ul className="selected-work-list">
            {svc.selectedWork.map(item => (
              <li key={item.client}>
                <span className="sw-client">{item.client}</span>
                <span className="sw-detail">{item.detail}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Who delivers this pillar */}
      {pillarTeam.length > 0 && (
        <section className="page-section" style={{ background: 'var(--paper2)' }}>
          <div className="section-label">Team</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
            Who delivers this
          </h2>
          <div className="team-grid">
            {pillarTeam.map(member => (
              <div className="team-card" key={member.id}>
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <div className="team-years">{member.years}</div>
                <p>{member.focus}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related case studies */}
      {related.length > 0 && (
        <section className="page-section" style={{ background: 'var(--paper2)' }}>
          <div className="section-label">Example of This Work</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '2.5rem' }}>
            Where we have done this
          </h2>
          <div className="work-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {related.map(cs => (
              <Link key={cs.id} to={`/work/${cs.id}`} className="work-card">
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
      <nav className="pager" aria-label="Other practice areas">
        {prev ? (
            <Link to={`/services/${prev.id}`} className="pager-link">
              <span className="meta-label">← Previous</span>
              <span className="pager-title">{prev.title}</span>
            </Link>
          ) : <div />}
        {next ? (
            <Link to={`/services/${next.id}`} className="pager-link pager-link--next">
              <span className="meta-label">Next →</span>
              <span className="pager-title">{next.title}</span>
            </Link>
          ) : <div />}
      </nav>
    </>
  );
}
