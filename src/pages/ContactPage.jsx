import { useState } from 'react';
import { Link } from 'react-router-dom';
import { contactSubjects, firm, CALENDLY_URL } from '../data/siteData';

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', org: '', role: '', country: '',
    subject: '', message: '',
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.subject) e.subject = 'Please select a service area';
    if (!form.message.trim()) e.message = 'Required';
    return e;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }
    setErrors({});
    setSending(true);
    // ── Replace this with your actual form submission (e.g. Formspree, EmailJS) ──
    setTimeout(() => { setSending(false); setSent(true); }, 1400);
  };

  const field = (id, label, required, extra = {}) => (
    <div className="form-group" style={extra.span2 ? { gridColumn: '1 / -1' } : {}}>
      <label htmlFor={id}>
        {label} {required && <span style={{ color: 'var(--accent)' }}>*</span>}
      </label>
      {extra.textarea ? (
        <textarea
          id={id}
          placeholder={extra.placeholder || ''}
          value={form[id.replace('ct-', '').replace(/-([a-z])/g, (_, c) => c.toUpperCase())] || ''}
          onChange={e => setForm(prev => ({
            ...prev,
            [id.replace('ct-', '').replace(/-([a-z])/g, (_, c) => c.toUpperCase())]: e.target.value
          }))}
          style={{ minHeight: 140, ...(errors[id] ? { borderColor: 'var(--accent)' } : {}) }}
        />
      ) : (
        <input
          id={id}
          type={extra.type || 'text'}
          placeholder={extra.placeholder || ''}
          value={form[id.replace('ct-', '').replace(/-([a-z])/g, (_, c) => c.toUpperCase())] || ''}
          onChange={e => setForm(prev => ({
            ...prev,
            [id.replace('ct-', '').replace(/-([a-z])/g, (_, c) => c.toUpperCase())]: e.target.value
          }))}
          style={errors[id] ? { borderColor: 'var(--accent)' } : {}}
        />
      )}
      {errors[id] && (
        <span style={{ fontSize: '0.72rem', color: 'var(--accent)', fontFamily: 'var(--mono)' }}>
          {errors[id]}
        </span>
      )}
    </div>
  );

  return (
    <div className="contact-page">
      {/* Left info panel */}
      <div className="contact-page-info">
        <div className="section-label">Contact</div>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1.5rem', maxWidth: '18ch' }}>
          A conversation <em style={{ color: 'var(--accent)' }}>starts</em> everything.
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '42ch' }}>
          Send us the TOR, the RFP, or a paragraph on what you are trying to do.
          We will reply within two working days with a clear yes, no, or a
          referral to someone better placed.
        </p>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="calendly-badge"
        >
          <span>📅</span>
          Book a Free Discovery Call
        </a>

        <div className="contact-details" style={{ marginBottom: '3rem' }}>
          {[
            { label: 'Email', value: <a href={`mailto:${firm.email}`} style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>{firm.email}</a> },
            { label: 'Phone', value: <a href={`tel:${firm.phoneHref}`} style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>{firm.phone}</a> },
            { label: 'Office', value: firm.location },
            { label: 'Active In', value: firm.countries.join(' · ') },
          ].map(c => (
            <div className="contact-item" key={c.label}>
              <span className="contact-item-label">{c.label}</span>
              <span className="contact-item-value">{c.value}</span>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
          <p style={{ fontSize: '0.78rem', fontFamily: 'var(--mono)', color: 'var(--muted)', letterSpacing: '0.06em', marginBottom: '1rem' }}>
            QUICK LINKS
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link to="/about" style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>About Us →</Link>
            <Link to="/work" style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Work →</Link>
            <Link to="/mapped" style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Mapped →</Link>
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="contact-page-form">
        <div className="section-label">Send a Message</div>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
          Tell us about your project
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginBottom: '2.5rem' }}>
          Fields marked <span style={{ color: 'var(--accent)' }}>*</span> are required.
        </p>

        {sent ? (
          <div className="form-success" style={{ padding: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--accent2)', marginBottom: '0.75rem' }}>
              Message received. Thank you.
            </p>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              We will reply within two working days. If your request is urgent,
              please book a call directly using the link on the left.
            </p>
            <button
              onClick={() => { setSent(false); setForm({ firstName: '', lastName: '', email: '', org: '', role: '', country: '', subject: '', message: '' }); }}
              style={{ fontSize: '0.8rem', color: 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--mono)', letterSpacing: '0.06em' }}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ct-firstName">
                  First Name <span style={{ color: 'var(--accent)' }}>*</span>
                </label>
                <input
                  id="ct-firstName"
                  type="text"
                  placeholder="Jane"
                  value={form.firstName}
                  onChange={e => setForm({ ...form, firstName: e.target.value })}
                  style={errors.firstName ? { borderColor: 'var(--accent)' } : {}}
                />
                {errors.firstName && <span style={{ fontSize: '0.72rem', color: 'var(--accent)', fontFamily: 'var(--mono)' }}>{errors.firstName}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="ct-lastName">Last Name</label>
                <input
                  id="ct-lastName"
                  type="text"
                  placeholder="Mwangi"
                  value={form.lastName}
                  onChange={e => setForm({ ...form, lastName: e.target.value })}
                />
              </div>
            </div>

            {/* Email & Org */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ct-email">
                  Email Address <span style={{ color: 'var(--accent)' }}>*</span>
                </label>
                <input
                  id="ct-email"
                  type="email"
                  placeholder="jane@organisation.org"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  style={errors.email ? { borderColor: 'var(--accent)' } : {}}
                />
                {errors.email && <span style={{ fontSize: '0.72rem', color: 'var(--accent)', fontFamily: 'var(--mono)' }}>{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="ct-org">Organisation</label>
                <input
                  id="ct-org"
                  type="text"
                  placeholder="Your NGO or Donor Agency"
                  value={form.org}
                  onChange={e => setForm({ ...form, org: e.target.value })}
                />
              </div>
            </div>

            {/* Role & Country */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ct-role">Your Role</label>
                <input
                  id="ct-role"
                  type="text"
                  placeholder="e.g. M&E Manager, Programme Officer"
                  value={form.role}
                  onChange={e => setForm({ ...form, role: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ct-country">Country</label>
                <input
                  id="ct-country"
                  type="text"
                  placeholder="Kenya, Uganda, Ethiopia…"
                  value={form.country}
                  onChange={e => setForm({ ...form, country: e.target.value })}
                />
              </div>
            </div>

            {/* Subject dropdown */}
            <div className="form-group">
              <label htmlFor="ct-subject">
                Service Area <span style={{ color: 'var(--accent)' }}>*</span>
              </label>
              <select
                id="ct-subject"
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
                style={errors.subject ? { borderColor: 'var(--accent)' } : {}}
              >
                <option value="">What do you need help with?</option>
                {contactSubjects.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.subject && <span style={{ fontSize: '0.72rem', color: 'var(--accent)', fontFamily: 'var(--mono)' }}>{errors.subject}</span>}
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="ct-message">
                Message <span style={{ color: 'var(--accent)' }}>*</span>
              </label>
              <textarea
                id="ct-message"
                placeholder="Tell us about your programme, the challenges you're facing, and what you need. The more context you give, the better we can respond."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                style={{ minHeight: 160, ...(errors.message ? { borderColor: 'var(--accent)' } : {}) }}
              />
              {errors.message && <span style={{ fontSize: '0.72rem', color: 'var(--accent)', fontFamily: 'var(--mono)' }}>{errors.message}</span>}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button type="submit" className="btn-primary" disabled={sending}>
                {sending ? 'Sending…' : 'Send Message →'}
              </button>
              <span style={{ fontSize: '0.78rem', color: 'var(--muted)', fontFamily: 'var(--mono)', letterSpacing: '0.04em' }}>
                We reply within two working days
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
