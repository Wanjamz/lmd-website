import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { withViewTransition } from '../lib/motion';
import { tickerItems, insights, firm } from '../data/siteData';
import { useCaseStudies } from '../lib/useContentData';
import { submitContactMessage } from '../lib/contact';

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

export default function HomePage() {
  /* Case study filter */
  const { data: caseStudies } = useCaseStudies();
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...new Set(caseStudies.map(cs => cs.category))];
  const filteredStudies = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === activeFilter);

  /* Contact form */
  const emptyForm = { name: '', email: '', subject: '', message: '' };
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);

  const handleForm = async e => {
    e.preventDefault();
    setSending(true);
    setSendFailed(false);
    try {
      await submitContactMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject,
        message: form.message.trim(),
      });
      setSent(true);
      setForm(emptyForm);
    } catch {
      setSendFailed(true);
    } finally {
      setSending(false);
    }
  };

  /* Fade-in refs */
  const refTicker  = useFadeIn();

  /* The ticker loop pauses whenever it is out of view. */
  useEffect(() => {
    const el = refTicker.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      el.classList.toggle('is-offscreen', !entry.isIntersecting);
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [refTicker]);
  const refServices = useFadeIn();
  const refWork    = useFadeIn();
  const refProcess = useFadeIn();
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
            <span className="hero-line"><span>Evidence.</span></span>
            <span className="hero-line"><span>Communication.</span></span>
            <span className="hero-line"><span>Digital.</span></span>
          </h1>

          <p className="hero-sub">
            We help organisations understand their work, communicate it clearly, and build the digital systems that support it.
            <br/><br/>
            From research, monitoring and evaluation to strategic communications, publications, websites and digital platforms, LMD brings these disciplines together under one team.
          </p>

          <div className="hero-btns">
            <Link to="/work" className="btn-primary">Explore our work</Link>
            <Link to="/contact" className="btn-outline">Talk to us</Link>
          </div>
        </div>

        <div className="hero-right">
          <img
            className="hero-figure"
            src="/images/hero-figure.webp"
            alt="An LMD consultant at work, surrounded by the firm's outputs: a mapping dashboard, a data report, a printed publication and social content."
            width="1380"
            height="1140"
            fetchPriority="high"
          />

          <div className="hero-quote-card">
            <blockquote>
              "LMD has the intuition to capture your vision and turn it into
              communication strategies that resonate with the right audiences."
            </blockquote>
            <cite>
              — Ken Martin Gitari, Managing Director, 
              <a href="https://secplus.co.ke" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', textUnderlineOffset: '3px', marginLeft: '4px' }}>
                SecPlus Kenya
              </a>
            </cite>
          </div>
        </div>
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
      <section id="services" ref={refServices}>
        <div className="container" style={{ maxWidth: '100%', padding: 0 }}>
          <div className="services-header">
            <div>
              <div className="section-label">Three Core Services</div>
            </div>
          </div>

          <div className="services-grid pillar-grid">
            {/* 01 — Evidence */}
            <div className="service-card pillar-card">
              <div className="pillar-marker">
                <span className="pillar-index">01</span>
                <h3>Evidence</h3>
              </div>
              <p className="pillar-kicker">Understand what is happening. Measure what is changing. Know what to do next.</p>
              <p className="pillar-body">We design and deliver research, monitoring, evaluation and learning assignments that help organisations make better decisions and demonstrate results.</p>
              <Link to="/services/evidence" className="btn-outline" style={{ alignSelf: 'flex-start' }}>Learn more</Link>
            </div>

            {/* 02 — Communication */}
            <div className="service-card pillar-card">
              <div className="pillar-marker">
                <span className="pillar-index">02</span>
                <h3>Communication</h3>
              </div>
              <p className="pillar-kicker">Turn complex work into communication people can understand, use and act on.</p>
              <p className="pillar-body">We help organisations communicate programmes, research, results and ideas clearly to the audiences that matter.</p>
              <Link to="/services/communication" className="btn-outline" style={{ alignSelf: 'flex-start' }}>Learn more</Link>
            </div>

            {/* 03 — Digital */}
            <div className="service-card pillar-card">
              <div className="pillar-marker">
                <span className="pillar-index">03</span>
                <h3>Digital</h3>
              </div>
              <p className="pillar-kicker">Build the digital infrastructure behind a credible organisation.</p>
              <p className="pillar-body">We design, develop and maintain practical digital systems that help organisations communicate professionally and operate more effectively.</p>
              <Link to="/services/digital" className="btn-outline" style={{ alignSelf: 'flex-start' }}>Learn more</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ───────────────────────────────────────────── */}
      <section id="case-studies">
        <div className="fade-in" ref={refWork}>
          <div className="work-header">
            <div>
              <div className="section-label">Selected Work</div>
              <h2 className="section-title">
                Work that speaks<br />
                <em>for itself.</em>
              </h2>
              <p className="section-intro" style={{ marginTop: '1.5rem' }}>
                Our portfolio spans research, monitoring and evaluation, strategic communications, publications and digital systems across Africa and international development programmes.
                <br/><br/>
                Rather than telling you what we can do, we prefer to show you what we have done.
              </p>
            </div>
            <Link to="/work" className="btn-outline" style={{ alignSelf: 'flex-end' }}>
              View selected projects →
            </Link>
          </div>

          {/* Category filters */}
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab${activeFilter === cat ? ' active' : ''}`}
                aria-pressed={activeFilter === cat}
                onClick={() => withViewTransition(() => setActiveFilter(cat))}
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
                style={{ viewTransitionName: `work-${cs.id}` }}
              >
                <div
                  className={`work-card-media${cs.image ? '' : ' work-card-media--empty'}`}
                  style={cs.image ? { backgroundImage: `url("${cs.image}")` } : undefined}
                >
                  {!cs.image && <span>[ Photo Placeholder ]</span>}
                </div>
                <div className="work-card-meta">
                  <span className="work-card-type">{cs.category}</span>
                  <span className="work-card-client">{cs.year}</span>
                </div>
                <span className="work-card-client">{cs.client}</span>
                <h3>{cs.title}</h3>
                <p>{cs.excerpt}</p>
                <div className="work-card-tags">
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
        <div className="approach-head">
          <div className="section-label">How We Work</div>
        </div>

        {/* Five stages in order, so the numbering is the content's own. */}
        <ol className="approach-steps">
          <li className="approach-step">
            <h3>Discover</h3>
            <p>We begin by understanding the organisation, programme, audience and problem.</p>
          </li>
          <li className="approach-step">
            <h3>Design</h3>
            <p>We develop the right research, communication or digital approach for the assignment.</p>
          </li>
          <li className="approach-step">
            <h3>Deliver</h3>
            <p>Our team executes the work with clear responsibilities, timelines and quality controls.</p>
          </li>
          <li className="approach-step">
            <h3>Measure</h3>
            <p>Where relevant, we track performance, results and audience response.</p>
          </li>
          <li className="approach-step">
            <h3>Improve</h3>
            <p>We use what we learn to strengthen the next iteration.</p>
          </li>
        </ol>
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
      <section id="about" className="fade-in" ref={refAbout}>
        <div className="about-copy">
          <div className="section-label">About LMD</div>
          <p className="about-lede">
            LMD Consulting Group is an African consultancy working at the intersection of Evidence, Communication and Digital.
          </p>
          <p className="section-intro">
            We support NGOs, development organisations, businesses and institutions with research and evaluation, strategic communication, knowledge products and digital systems.
          </p>
          <p className="section-intro">
            Our work has supported organisations and programmes across multiple African countries and sectors.
          </p>
          <p className="section-intro">
            We are particularly comfortable working where programmes are complex, information is fragmented and organisations need to turn evidence into something useful.
          </p>
        </div>
        
        {/* Placeholder for Photo on the right side */}
        <div className="media-placeholder about-media">
          <span>[ Photo Placeholder ]</span>
        </div>
      </section>

      {/* ── CONTACT CTA ────────────────────────────────────────────── */}
      <section id="contact-cta" className="fade-in" ref={refContact}>
        <div className="contact-cta-info">
          <h2>
            Have a project<br />
            <em>in mind?</em>
          </h2>
          <p>
            Whether you need to understand your programme, communicate your results or strengthen your digital presence, we can help you build the right solution.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Start a conversation</Link>
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
          <h3 className="contact-form-title">Or drop us a line directly</h3>

          {sent ? (
            <div className="form-success" role="status">
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', marginBottom: '1rem' }}>
                Message received. We will reply within two working days.
              </p>
              <button type="button" className="text-button" onClick={() => setSent(false)}>
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
                    autoComplete="name"
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
                    autoComplete="email"
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

              {sendFailed && (
                <p className="form-error" role="alert">
                  We could not send your message just now. Please try again, or email us
                  directly at <a href={`mailto:${firm.email}`}>{firm.email}</a>.
                </p>
              )}

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
