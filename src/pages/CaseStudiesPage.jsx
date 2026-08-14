import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCaseStudies } from '../lib/useContentData';

export default function CaseStudiesPage() {
  const { data: caseStudies } = useCaseStudies();
  const [activeFilter, setActiveFilter] = useState('All');

  /* Derived from the data, so a filter never renders with nothing behind it. */
  const categories = ['All', ...new Set(caseStudies.map(cs => cs.category))];

  const filtered = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === activeFilter);

  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="section-label">Work</div>
        <h1>
          What we have<br />
          <em>actually done.</em>
        </h1>
        <p>
          Evaluations, research, communications, and systems delivered across
          East and the Horn of Africa. Each entry sets out the brief, the
          method, what we found, and who delivered it.
        </p>
      </div>

      {/* Filters */}
      <section style={{ padding: '3rem 4vw 0' }}>
        <div className="filter-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-tab${activeFilter === cat ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>
            {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
          </span>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '1rem 4vw 6rem' }}>
        <div className="work-grid">
          {filtered.map(cs => (
            <Link key={cs.id} to={`/work/${cs.id}`} className="work-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className="work-card-type">{cs.category}</span>
                <span className="work-card-type">{cs.year}</span>
              </div>
              <span className="work-card-client">{cs.client}</span>
              <h3>{cs.title}</h3>
              <p>{cs.excerpt}</p>

              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>
                    {cs.location}
                  </span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>
                    {cs.duration}
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {cs.tags.slice(0, 2).map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              <span className="work-card-arrow" style={{ marginTop: '1rem' }}>→</span>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--muted)' }}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
              Nothing in this category yet.
            </p>
            <button
              onClick={() => setActiveFilter('All')}
              style={{ fontSize: '0.85rem', color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--mono)', letterSpacing: '0.08em' }}
            >
              Show all →
            </button>
          </div>
        )}
      </section>

      {/* CTA strip */}
      <div style={{ background: 'var(--paper2)', borderTop: '1px solid var(--border)', padding: '4rem 4vw', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
          Want to discuss a similar engagement?
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn-primary">Start a Conversation →</Link>
          <Link to="/about" className="btn-outline">About Us</Link>
        </div>
      </div>
    </>
  );
}
