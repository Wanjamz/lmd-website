import { Link } from 'react-router-dom';
import {
  about,
  differentiator,
  team,
  whereWeWork,
  whyChooseLMD,
  careers,
  compliance,
  stats,
  firm,
  CALENDLY_URL,
} from '../data/siteData';

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ──────────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="section-label">About Us</div>
        <h1>
          Firm profile &<br />
          <em>capability statement.</em>
        </h1>
        <p>{about.intro}</p>
      </div>

      {/* ── CREDENTIALS + STATS ────────────────────────────────────── */}
      <section style={{ padding: '5rem 4vw' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          <div>
            <div className="section-label">Credentials</div>
            <p className="section-intro" style={{ marginTop: '1.25rem' }}>
              {about.credentials}
            </p>

            <div className="compliance-strip">
              {compliance.items.map(item => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
            <p className="compliance-note">{compliance.note}</p>
          </div>

          <div className="hero-stat-grid horizontal" style={{ alignSelf: 'start' }}>
            {stats.map(s => (
              <div className="hero-stat" key={s.label}>
                <div className="number">
                  {s.number}<span>{s.suffix}</span>
                </div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ───────────────────────────────────────── */}
      <section className="vision-mission">
        <div className="vm-card">
          <div className="section-label">Vision</div>
          <p>{about.vision}</p>
        </div>
        <div className="vm-card">
          <div className="section-label">Mission</div>
          <p>{about.mission}</p>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ────────────────────────────────── */}
      <section style={{ padding: '5rem 4vw' }}>
        <div className="section-label">What Makes Us Different</div>
        <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', marginBottom: '2rem' }}>
          One team, one voice,<br />
          <em>one project number.</em>
        </h2>

        <div className="diff-grid">
          <p className="diff-problem">{differentiator.problem}</p>
          <p className="diff-answer">{differentiator.answer}</p>
          <p className="diff-limits">{differentiator.limits}</p>
        </div>
      </section>

      {/* ── TEAM ───────────────────────────────────────────────────── */}
      <section
        style={{
          padding: '5rem 4vw',
          background: 'var(--paper2)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="section-label">The Team</div>
        <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', marginBottom: '3rem' }}>
          Who does the work.
        </h2>

        <div className="team-grid">
          {team.map(member => (
            <div className="team-card" key={member.id}>
              <h3>{member.name}</h3>
              <div className="team-role">{member.role}</div>
              <div className="team-years">{member.years}</div>
              <p>{member.focus}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHERE WE WORK ──────────────────────────────────────────── */}
      <section style={{ padding: '5rem 4vw' }}>
        <div className="section-label">Where We Work</div>
        <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', marginBottom: '1.5rem' }}>
          Concentrated where<br />
          <em>our team is strongest.</em>
        </h2>

        <div className="country-strip">
          {firm.countries.map(c => (
            <span key={c} className="country-chip">{c}</span>
          ))}
        </div>

        <p className="section-intro" style={{ marginBottom: '2rem', maxWidth: '68ch' }}>
          {whereWeWork.intro}
        </p>

        <ul className="theme-list">
          {whereWeWork.themes.map(theme => {
            const [head, ...rest] = theme.split(' — ');
            return (
              <li key={theme}>
                <h4>{head}</h4>
                {rest.length > 0 && <p>{rest.join(' — ')}</p>}
              </li>
            );
          })}
        </ul>

        <p className="section-intro" style={{ marginTop: '2.5rem', maxWidth: '68ch' }}>
          {whereWeWork.clients}
        </p>
      </section>

      {/* ── WHY ORGANISATIONS CHOOSE LMD ───────────────────────────── */}
      <section
        style={{
          padding: '5rem 4vw',
          background: 'var(--paper2)',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div className="section-label">Why LMD</div>
        <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', marginBottom: '3rem' }}>
          Why organisations choose us.
        </h2>

        <ul className="why-list">
          {whyChooseLMD.map((reason, i) => (
            <li key={reason} className="why-item">
              <span className="why-num">{String(i + 1).padStart(2, '0')}</span>
              <p>{reason}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── CAREERS ────────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 4vw' }}>
        <div className="section-label">Careers</div>
        <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', marginBottom: '1.5rem' }}>
          We hire slowly<br />
          <em>and deliberately.</em>
        </h2>
        <p className="section-intro" style={{ marginBottom: '2rem', maxWidth: '62ch' }}>
          {careers.intro}
        </p>

        <ul className="careers-list">
          {careers.profiles.map(profile => {
            const [head, ...rest] = profile.split(' — ');
            return (
              <li key={profile}>
                <h4>{head}</h4>
                {rest.length > 0 && <p>{rest.join(' — ')}</p>}
              </li>
            );
          })}
        </ul>

        <p className="section-intro" style={{ marginTop: '2.5rem', maxWidth: '62ch' }}>
          {careers.howToApply}
        </p>
        <a href={`mailto:${firm.email}`} className="btn-outline" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
          {firm.email} →
        </a>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <div
        style={{
          background: 'var(--paper2)',
          borderTop: '1px solid var(--border)',
          padding: '4rem 4vw',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em',
          }}
        >
          Send us the TOR, the RFP, or a paragraph on what you are trying to do.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn-primary">Start a Conversation →</Link>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Book a Free Call
          </a>
        </div>
      </div>
    </>
  );
}
