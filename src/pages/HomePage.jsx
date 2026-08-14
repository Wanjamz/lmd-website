import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ServiceIcon from '../components/ServiceIcon';
import {
  services,
  tickerItems,
  stats,
  heroWords,
  process as processSteps,
  whyChooseLMD,
  insights,
  differentiator,
  expertise,
  howWeDeliverValue,
  firm,
  CALENDLY_URL,
} from '../data/siteData';
import { useCaseStudies } from '../lib/useContentData';

/* ─── Fade-in hook ──────────────────────────────────────────────────────── */
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── Activity carousel images ──────────────────────────────────────────── */
const activityPhotos = [
  { src: '/images/Baseline 1.png',      caption: 'Field Operations',          sub: 'Baseline Survey · Kenya' },
  { src: '/images/Evaluation.png',      caption: 'Programme Evaluation',      sub: 'Mid-Term Review · East Africa' },
  { src: '/images/UNICEF booklet11.png',caption: 'Knowledge Products',        sub: 'Donor Communications · UNICEF' },
  { src: '/images/Unicef Booklet.png',  caption: 'Capacity Building',         sub: 'MEAL Training · NGO Consortium' },
  { src: '/images/Baseline 1.png',      caption: 'Digital Data Collection',   sub: 'KoBoToolbox Deployment · 5 Counties' },
];

/* Placeholder colour for when images haven't loaded yet */
const placeholderColors = ['#1a4875', '#2d4a22', '#5a2e1a', '#2a1a4a', '#1a3a4a'];

function ActivityCarousel() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const total = activityPhotos.length;

  const go = (next) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActive((next + total) % total);
      setIsTransitioning(false);
    }, 280);
  };

  /* Auto-advance every 4s */
  useEffect(() => {
    const id = setInterval(() => go(active + 1), 4000);
    return () => clearInterval(id);
  }, [active, isTransitioning]);

  const photo = activityPhotos[active];

  return (
    <div className="activity-carousel">
      <div
        className="activity-carousel-main"
        style={{
          background: placeholderColors[active],
          opacity: isTransitioning ? 0 : 1,
          transition: 'opacity 0.28s ease',
        }}
      >
        <img
          key={active}
          src={photo.src}
          alt={photo.caption}
          onError={e => { e.target.style.display = 'none'; }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            filter: 'brightness(0.75)',
          }}
        />
        <div className="activity-carousel-overlay">
          <span className="activity-counter">{active + 1} / {total}</span>
          <div>
            <div className="activity-caption">{photo.caption}</div>
            <div className="activity-sub">{photo.sub}</div>
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="activity-thumbs">
        {activityPhotos.map((p, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`activity-thumb${i === active ? ' active' : ''}`}
            aria-label={p.caption}
            style={{ background: placeholderColors[i] }}
          >
            <img
              src={p.src}
              alt={p.caption}
              onError={e => { e.target.style.display = 'none'; }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </button>
        ))}
      </div>

      {/* Nav arrows */}
      <button className="carousel-prev" onClick={() => go(active - 1)} aria-label="Previous">←</button>
      <button className="carousel-next" onClick={() => go(active + 1)} aria-label="Next">→</button>
    </div>
  );
}

export default function HomePage() {
  /* Hero rotating word */
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIdx(prev => (prev + 1) % heroWords.length);
        setWordVisible(true);
      }, 380);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  /* Case study filter */
  const { data: caseStudies } = useCaseStudies();
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...new Set(caseStudies.map(cs => cs.category))];
  const filteredStudies = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === activeFilter);

  /* Contact form */
  const [form, setForm] = useState({ name: '', email: '', org: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleForm = e => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1200);
  };

  /* Fade-in refs */
  const refTicker  = useFadeIn();
  const refServices = useFadeIn();
  const refWork    = useFadeIn();
  const refProcess = useFadeIn();
  const refValue   = useFadeIn();
  const refWhy     = useFadeIn();
  const refInsights = useFadeIn();
  const refAbout   = useFadeIn();
  const refContact = useFadeIn();

  const doubleTickerItems = [...tickerItems, ...tickerItems];

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section id="hero">
        <div>
          <div className="hero-tag">Nairobi · Horn of Africa</div>

          <h1 className="hero-title">
            We{' '}
            <em className={`hero-rotating-word ${wordVisible ? 'visible' : 'hidden'}`}>
              {heroWords[wordIdx]}
            </em>
            <br />
            development work<br />
            in the Horn of Africa.
          </h1>

          <p className="hero-sub">
            LMD Consulting Group is a Nairobi-based consultancy supporting local
            and international organizations, foundations, and donor-funded programs
            across Kenya, Somalia, Djibouti, Ethiopia, and South Sudan.
          </p>

          <div className="hero-btns">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Free Call →
            </a>
            <Link to="/work" className="btn-outline">See Our Work</Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-stat-grid horizontal">
            {stats.map(s => (
              <div className="hero-stat" key={s.label}>
                <div className="number">
                  {s.number}<span>{s.suffix}</span>
                </div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="hero-quote-card">
            <blockquote>
              "LMD has the intuition to capture your vision and turn it into
              communication strategies that resonate with the right audiences."
            </blockquote>
            <cite>
              — Ken Martin Gitari, Managing Director, 
              <a href="https://secplus.co.ke" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', marginLeft: '4px' }}>
                SecPlus Kenya
              </a>
            </cite>
          </div>
        </div>

        <div className="hero-bg-text" aria-hidden="true">LMD</div>
      </section>

      {/* ── TICKER ─────────────────────────────────────────────────── */}
      <div className="ticker-section fade-in" ref={refTicker}>
        <div className="ticker-track">
          {doubleTickerItems.map((item, i) => (
            <span key={i} className={`ticker-item ${item.type}`}>
              <span className="ticker-dot">·</span>
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ───────────────────────────────────────────────── */}
      <section id="services">
        <div className="container" style={{ maxWidth: '100%', padding: 0 }}>
          <div className="services-header fade-in" ref={refServices}>
            <div>
              <div className="section-label">Our Expertise</div>
              <h2 className="section-title">
                Three core<br />
                <em>practice areas.</em>
              </h2>
            </div>
            <p className="section-intro">{expertise.intro}</p>
          </div>

          <div className="services-grid pillar-grid">
            {services.map(svc => (
              <Link
                to={`/services/${svc.id}`}
                key={svc.id}
                className="service-card pillar-card"
              >
                <div className="pillar-marker">
                  <span className="service-icon">
                    <ServiceIcon name={svc.icon} size={32} strokeWidth={1.2} />
                  </span>
                  <span className="pillar-index">{svc.pillar}</span>
                </div>
                <h3>{svc.title}</h3>
                <p className="pillar-kicker">{svc.kicker}</p>

                <ul className="pillar-features">
                  {svc.groups.map(g => (
                    <li key={g.title}>
                      {g.title}
                      <span className="pillar-count">{g.items.length}</span>
                    </li>
                  ))}
                </ul>

                <span className="service-card-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ───────────────────────────────────────────── */}
      <section id="case-studies">
        <div className="fade-in" ref={refWork}>
          <div className="work-header">
            <div>
              <div className="section-label">Work</div>
              <h2 className="section-title">
                What we have<br />
                <em>actually done.</em>
              </h2>
            </div>
            <Link to="/work" className="btn-outline" style={{ alignSelf: 'flex-end' }}>
              View All →
            </Link>
          </div>

          {/* Category filters */}
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

          <div className="work-grid">
            {filteredStudies.map(cs => (
              <Link
                key={cs.id}
                to={`/work/${cs.id}`}
                className="work-card"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span className="work-card-type">{cs.category}</span>
                  <span className="work-card-type">{cs.year}</span>
                </div>
                <span className="work-card-client">{cs.client}</span>
                <h3>{cs.title}</h3>
                <p>{cs.excerpt}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                  {cs.tags.slice(0, 2).map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <span className="work-card-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR SYSTEMATIC APPROACH ────────────────────────────────── */}
      <section id="process" className="fade-in" ref={refProcess}>
        <div>
          <div className="section-label">How We Work</div>
          <h2 className="section-title">
            The same five-step<br />
            <em>rhythm, every time.</em>
          </h2>
          <p className="section-intro" style={{ marginBottom: '1rem' }}>
            Every engagement follows the same five-step rhythm — regardless of
            scope or budget.
          </p>
        </div>

        <div className="process-steps">
          {processSteps.map(step => (
            <div className="process-step" key={step.num}>
              <div className="step-num">{step.num}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW WE DELIVER VALUE ───────────────────────────────────── */}
      <section id="deliver-value" className="fade-in" ref={refValue}>
        <div className="section-label">How We Deliver Value</div>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>
          Three disciplines,<br />
          <em>one engagement.</em>
        </h2>
        <p className="section-intro" style={{ marginBottom: '2.5rem' }}>
          {howWeDeliverValue.intro}
        </p>

        <div className="value-chain">
          {services.map(svc => (
            <div className="value-link" key={svc.id}>
              <span className="value-link-title">{svc.title}</span>
              <p>{svc.valueLine}</p>
            </div>
          ))}
        </div>

        <p className="value-close">{howWeDeliverValue.close}</p>
      </section>

      {/* ── WHY ORGANISATIONS CHOOSE LMD ───────────────────────────── */}
      <section id="why-lmd" className="fade-in" ref={refWhy}>
        <div className="why-header">
          <div className="section-label">Why LMD</div>
          <h2 className="section-title">
            Why organisations<br />
            <em>choose us.</em>
          </h2>
        </div>

        <ul className="why-list">
          {whyChooseLMD.map((reason, i) => (
            <li key={reason} className="why-item">
              <span className="why-num">{String(i + 1).padStart(2, '0')}</span>
              <p>{reason}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── INSIGHTS ───────────────────────────────────────────────── */}
      <section id="insights" className="fade-in" ref={refInsights}>
        <div className="insights-header">
          <div>
            <div className="section-label">Insights</div>
            <h2 className="section-title">
              Practical guidance,<br />
              <em>no padding.</em>
            </h2>
          </div>
          <p className="section-intro">{insights.intro}</p>
        </div>

        <ol className="insights-list">
          {insights.topics.map(topic => {
            const [head, ...rest] = topic.split(' — ');
            return (
              <li key={topic} className="insight-topic">
                <h3>{head}</h3>
                {rest.length > 0 && <p>{rest.join(' — ')}</p>}
              </li>
            );
          })}
        </ol>

        <div className="insights-subscribe">
          <p>{insights.subscribeNote}</p>
          <Link to="/contact" className="btn-primary">Subscribe →</Link>
        </div>
      </section>

      {/* ── TESTIMONIAL ─────────────────────────────────────────────── */}
      <section id="testimonial">
        <p className="testimonial-quote">
          "Working with Wanjama from LMD is working with someone who understands
          your work, your audience, and your goals — and then produces something
          that actually moves the needle. Rigorous, thoughtful, and deeply committed
          to development outcomes."
        </p>
        <div className="testimonial-attr">— Senior Programme Officer, UNICEF Zambia</div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────── */}
      <section id="about" className="fade-in" ref={refAbout} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
        <div>
          {/* Replace old "LMD." big text with logo + key stats */}
          <div className="about-logo-block">
            <img
              src="/images/main_logo.png"
              alt="LMD Consulting Group"
              className="about-logo-img"
              onError={e => { e.target.style.display = 'none'; }}
            />
            <div className="about-logo-stats">
              {stats.map(s => (
                <div className="about-logo-stat" key={s.label}>
                  <span className="about-stat-num">
                    {s.number}<span style={{ color: 'var(--accent)' }}>{s.suffix}</span>
                  </span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="section-label" style={{ marginTop: '2rem' }}>About Us</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
            One team, one voice,<br />
            <em>one project number.</em>
          </h2>
          <p className="section-intro" style={{ marginTop: '1rem' }}>
            {differentiator.problem}
          </p>
          <p className="section-intro" style={{ marginTop: '1rem' }}>
            {differentiator.teamLine}
          </p>
          <Link to="/about" className="btn-outline" style={{ marginTop: '1.75rem', display: 'inline-block' }}>
            More About Us →
          </Link>
        </div>

        <div className="about-pillars">
          {[
            { num: '01', title: 'Three services, not ten', desc: 'MEL, donor-grade communications, and digital presence — delivered exceptionally, instead of ten services delivered adequately.' },
            { num: '02', title: 'We know the Horn of Africa', desc: 'Our clients are here. Our work has been here for a decade. We do not parachute in.' },
            { num: '03', title: 'Honest about our limits', desc: 'Ask us to do something outside our capability envelope and we will tell you, then recommend someone better placed.' },
          ].map(pillar => (
            <div className="about-pillar" key={pillar.num}>
              <div className="pillar-num">{pillar.num}</div>
              <div className="pillar-text">
                <h4>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT CTA ────────────────────────────────────────────── */}
      <section id="contact-cta" className="fade-in" ref={refContact}>
        <div className="contact-cta-info">
          <div className="section-label">Work With Us</div>
          <h2>
            Start with a<br />
            <em>free conversation.</em>
          </h2>
          <p>
            Whether you need a scoping conversation, a proposal, or just want to
            explore whether we're the right fit — we're available. No obligation,
            no sales pitch.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Free Call →
            </a>
            <Link to="/contact" className="btn-outline">Send a Message</Link>
          </div>

          <div className="contact-details" style={{ marginTop: '3rem' }}>
            {[
              { label: 'Email',     value: <a href={`mailto:${firm.email}`}>{firm.email}</a> },
              { label: 'Phone',     value: <a href={`tel:${firm.phoneHref}`} style={{ color: 'inherit' }}>{firm.phone}</a> },
              { label: 'Location',  value: firm.location },
              { label: 'Active In', value: firm.countries.join(' · ') },
            ].map(c => (
              <div className="contact-item" key={c.label}>
                <span className="contact-item-label">{c.label}</span>
                <span className="contact-item-value">{c.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Inline quick-contact form */}
        <div>
          <div className="section-label">Quick Message</div>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '2rem', letterSpacing: '-0.01em' }}>
            Or drop us a line directly
          </h3>

          {sent ? (
            <div className="form-success">
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                Message received. We will reply within two working days.
              </p>
              <button onClick={() => setSent(false)} style={{ fontSize: '0.8rem', color: 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer', marginTop: '0.5rem' }}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleForm}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="qs-name">Name</label>
                  <input
                    id="qs-name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="qs-email">Email</label>
                  <input
                    id="qs-email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="qs-subject">What do you need?</label>
                <select
                  id="qs-subject"
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  required
                >
                  <option value="">Select a service area…</option>
                  <option value="M&E">Monitoring &amp; Evaluation (M&amp;E)</option>
                  <option value="comms">Strategic Communications</option>
                  <option value="digital">Digital Systems &amp; Dashboards</option>
                  <option value="research">Research &amp; Analytics</option>
                  <option value="capacity">Capacity Building &amp; Training</option>
                  <option value="km">Knowledge Management</option>
                  <option value="proposal">Proposal Development Support</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="qs-message">Message</label>
                <textarea
                  id="qs-message"
                  placeholder="Brief description of what you're working on…"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="btn-primary" disabled={sending} style={{ alignSelf: 'flex-start' }}>
                {sending ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
