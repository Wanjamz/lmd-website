import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ServiceIcon from '../components/ServiceIcon';
import { services, caseStudies, tickerItems, packages, stats, heroWords, CALENDLY_URL } from '../data/siteData';

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

const categories = ['All', 'M&E', 'Communications', 'Research', 'Digital Systems', 'Capacity Building'];

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
  const [activeFilter, setActiveFilter] = useState('All');
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
  const refPacks   = useFadeIn();
  const refAbout   = useFadeIn();
  const refContact = useFadeIn();

  const doubleTickerItems = [...tickerItems, ...tickerItems];

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section id="hero">
        <div>
          <div className="hero-tag">Nairobi · East Africa</div>

          <h1 className="hero-title">
            We make<br />
            NGOs{' '}
            <em className={`hero-rotating-word ${wordVisible ? 'visible' : 'hidden'}`}>
              {heroWords[wordIdx]}
            </em>
            <br />
            trusted, and<br />
            impactful.
          </h1>

          <p className="hero-sub">
            LMD Consulting is an East Africa–based firm specialising in Monitoring &
            Evaluation, Strategic Communications, Digital Systems, and Research for
            development organisations, NGOs, and institutional donors.
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
            <a href="#services" className="btn-outline">Our Services</a>
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
              <div className="section-label">What We Do</div>
              <h2 className="section-title">
                Services built for<br />
                <em>development work</em>
              </h2>
            </div>
            <p className="section-intro">
              We work across six disciplines — combining technical rigour with deep
              contextual knowledge of East Africa's development landscape. Click any
              service to learn more about how we work.
            </p>
          </div>

          <div className="services-grid">
            {services.map((svc, idx) => (
              <React.Fragment key={svc.id}>
                <Link
                  to={`/services/${svc.id}`}
                  className="service-card"
                >
                  <span className="service-icon">
                    <ServiceIcon name={svc.icon} size={32} strokeWidth={1.2} />
                  </span>
                  <h3>{svc.title}</h3>
                  <p>{svc.short}</p>
                  <div className="service-tags">
                    {svc.tags.slice(0, 3).map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <span className="service-card-arrow">→</span>
                </Link>
                {/* Responsive Photo Card */}
                {idx === 3 && (
                  <div className="service-card photo-fit-card" style={{ padding: 0, overflow: 'hidden' }}>
                    <img 
                      src="/images/Evaluation.png" 
                      alt="Data analysis in field" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => { e.target.style.display = 'none'; }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ───────────────────────────────────────────── */}
      <section id="case-studies">
        <div className="fade-in" ref={refWork}>
          <div className="work-header">
            <div>
              <div className="section-label">Our Work</div>
              <h2 className="section-title">
                Case Studies &<br />
                <em>Selected Projects</em>
              </h2>
            </div>
            <Link to="/case-studies" className="btn-outline" style={{ alignSelf: 'flex-end' }}>
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
                to={`/case-studies/${cs.id}`}
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
            Our Systematic<br />
            <em>Approach</em>
          </h2>
          <p className="section-intro" style={{ marginBottom: '1rem' }}>
            A structured, evidence-led methodology applied consistently
            across every engagement — regardless of size.
          </p>
        </div>

        <div className="process-steps">
          {[
            {
              num: '01',
              title: 'Discover',
              body: 'We begin every engagement with a rigorous context analysis — mapping stakeholders, understanding organisational dynamics, and identifying the core question your work needs to answer. No assumptions. No copy-paste frameworks.',
            },
            {
              num: '02',
              title: 'Design',
              body: 'We develop bespoke frameworks, tools, and methodologies grounded in international best practice and calibrated to your specific context. Every design decision is explained and validated with your team.',
            },
            {
              num: '03',
              title: 'Deploy',
              body: 'Implementation is where quality is either made or lost. We bring field-tested protocols, rigorous quality assurance processes, and experienced teams to every data collection and delivery phase.',
            },
            {
              num: '04',
              title: 'Learn & Adapt',
              body: 'Evidence is only valuable if it changes something. We support organisations to interpret findings, communicate them effectively, and embed learning into programme and institutional decision-making.',
            },
          ].map(step => (
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

      {/* ── PACKAGES ───────────────────────────────────────────────── */}
      <section id="packages" className="fade-in" ref={refPacks}>
        <div className="container" style={{ maxWidth: '100%', padding: '0 4vw' }}>
          <div className="section-label">Investment</div>
          <h2 className="section-title">
            Choose a package<br />
            <em>or build your own</em>
          </h2>
          <p className="section-intro">
            Every engagement is scoped to your specific programme. These packages
            are a starting point — most of our clients build a custom combination.
          </p>

          <div className="packages-grid">
            {packages.map(pkg => (
              <div key={pkg.id} className={`package-card${pkg.featured ? ' featured' : ''}`}>
                {pkg.featured && <span className="package-badge">Most Popular</span>}
                <span className="package-emoji">
                  <ServiceIcon name={pkg.icon} size={40} strokeWidth={1} />
                </span>
                <h3>{pkg.title}</h3>
                <p className="package-desc">{pkg.description}</p>
                <div className="package-timeline">{pkg.timeline}</div>
                <ul className="package-features">
                  {pkg.features.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-ghost">Get in Touch →</Link>
              </div>
            ))}
          </div>
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
              <div className="about-logo-stat">
                <span className="about-stat-num">10<span style={{ color: 'var(--accent)' }}>+</span></span>
                <span className="about-stat-label">Years Experience</span>
              </div>
              <div className="about-logo-stat">
                <span className="about-stat-num">300<span style={{ color: 'var(--accent)' }}>+</span></span>
                <span className="about-stat-label">Projects Delivered</span>
              </div>
              <div className="about-logo-stat">
                <span className="about-stat-num">100<span style={{ color: 'var(--accent)' }}>%</span></span>
                <span className="about-stat-label">Local Expertise</span>
              </div>
            </div>
          </div>

          <div className="section-label" style={{ marginTop: '2rem' }}>About Us</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
            East Africa's M&E and communications partner for organisations that take
            their <em>evidence seriously.</em>
          </h2>
          <p className="section-intro" style={{ marginTop: '1rem' }}>
            LMD Consulting Group is a Nairobi-based consulting firm serving
            development organisations, NGOs, and institutional donors across East
            and the Horn of Africa. Founded by practitioners who grew up working
            inside the sector, we combine methodological discipline with genuine
            partnership to help organisations work better.
          </p>
        </div>

        <div className="about-pillars">
          {[
            { num: '01', title: 'Contextually Grounded', desc: "We don't parachute in. Our team has spent years inside the East African development sector — understanding what works, what doesn't, and why context always matters." },
            { num: '02', title: 'Methodologically Rigorous', desc: 'We apply international standards to every engagement — from OECD DAC evaluation criteria to feminist research principles — without losing sight of practical usability.' },
            { num: '03', title: 'Client-Partnered', desc: 'We work with organisations, not just for them. Co-creation, transparent communication, and genuine investment in your outcomes are non-negotiable for us.' },
            { num: '04', title: 'Locally Led', desc: '100% East African team. We understand the communities, languages, political economies, and operational realities your programmes navigate every day.' },
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
              { label: 'Email',     value: <a href="mailto:info@lmdconsulting.co.ke">info@lmdconsulting.co.ke</a> },
              { label: 'Phone',     value: '+254 700 000 000' },
              { label: 'Location',  value: 'Nairobi, Kenya' },
              { label: 'Active In', value: 'Kenya · Uganda · Tanzania · Somalia · Ethiopia' },
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
                Message received. We'll be in touch within 48 hours.
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
