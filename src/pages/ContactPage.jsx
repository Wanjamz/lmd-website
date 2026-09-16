import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';
import { contactSubjects, firm, CALENDLY_URL } from '../data/siteData';
import { submitContactMessage } from '../lib/contact';

const emptyForm = {
  firstName: '', lastName: '', email: '', org: '', role: '', country: '',
  subject: '', message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Enter your first name.';
    if (!/\S+@\S+\.\S+/.test(form.email.trim())) e.email = 'Enter an email address we can reply to.';
    if (!form.subject) e.subject = 'Choose the service area closest to your need.';
    if (!form.message.trim()) e.message = 'Tell us briefly what you are working on.';
    return e;
  };

  const update = key => e => setForm(prev => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) {
      document.getElementById(`ct-${Object.keys(v)[0]}`)?.focus();
      return;
    }
    setSending(true);
    setSendFailed(false);
    try {
      await submitContactMessage({
        name: [form.firstName, form.lastName].map(s => s.trim()).filter(Boolean).join(' '),
        email: form.email.trim(),
        organisation: form.org.trim() || null,
        role: form.role.trim() || null,
        country: form.country.trim() || null,
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

  /* Accessible wiring shared by every validated field. */
  const invalid = key => ({
    'aria-invalid': errors[key] ? 'true' : undefined,
    'aria-describedby': errors[key] ? `ct-${key}-error` : undefined,
  });
  const errorText = key => errors[key] && (
    <span id={`ct-${key}-error`} className="field-error">{errors[key]}</span>
  );

  return (
    <div className="contact-page">
      {/* Left info panel */}
      <div className="contact-page-info">
        <div className="section-label">Contact</div>
        <h1 className="contact-info-title">
          A conversation <em>starts</em> everything.
        </h1>
        <p className="contact-info-lede">
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
          <CalendarDays size={18} strokeWidth={1.75} aria-hidden="true" />
          Book a Free Discovery Call
        </a>

        <div className="contact-details" style={{ marginBottom: '3rem' }}>
          {[
            { label: 'Email', value: <a href={`mailto:${firm.email}`}>{firm.email}</a> },
            { label: 'Phone', value: <a href={`tel:${firm.phoneHref}`}>{firm.phone}</a> },
            { label: 'Office', value: firm.location },
            { label: 'Active In', value: firm.countries.join(' · ') },
          ].map(c => (
            <div className="contact-item" key={c.label}>
              <span className="contact-item-label">{c.label}</span>
              <span className="contact-item-value">{c.value}</span>
            </div>
          ))}
        </div>

        <div className="contact-quick-links">
          <p className="contact-quick-links-head">Quick links</p>
          <div className="contact-quick-links-list">
            <Link to="/about">About Us →</Link>
            <Link to="/work">Work →</Link>
            <Link to="/mapped">Mapped →</Link>
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="contact-page-form">
        <div className="section-label">Send a Message</div>
        <h2 className="contact-form-heading">Tell us about your project</h2>
        <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginBottom: '2.5rem' }}>
          Fields marked <span className="field-required">*</span> are required.
        </p>

        {sent ? (
          <div className="form-success" role="status" style={{ padding: '3rem 2.5rem' }}>
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '0.75rem' }}>
              Message received. Thank you.
            </p>
            <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1.5rem', fontFamily: 'var(--sans)' }}>
              We will reply within two working days. If your request is urgent,
              please book a call directly using the link on the left.
            </p>
            <button type="button" className="text-button" onClick={() => setSent(false)}>
              Send another message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ct-firstName">
                  First Name <span className="field-required" aria-hidden="true">*</span>
                </label>
                <input
                  id="ct-firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Jane"
                  required
                  value={form.firstName}
                  onChange={update('firstName')}
                  {...invalid('firstName')}
                />
                {errorText('firstName')}
              </div>
              <div className="form-group">
                <label htmlFor="ct-lastName">Last Name</label>
                <input
                  id="ct-lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Mwangi"
                  value={form.lastName}
                  onChange={update('lastName')}
                />
              </div>
            </div>

            {/* Email & Org */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ct-email">
                  Email Address <span className="field-required" aria-hidden="true">*</span>
                </label>
                <input
                  id="ct-email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@organisation.org"
                  required
                  value={form.email}
                  onChange={update('email')}
                  {...invalid('email')}
                />
                {errorText('email')}
              </div>
              <div className="form-group">
                <label htmlFor="ct-org">Organisation</label>
                <input
                  id="ct-org"
                  type="text"
                  autoComplete="organization"
                  placeholder="Your NGO or Donor Agency"
                  value={form.org}
                  onChange={update('org')}
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
                  autoComplete="organization-title"
                  placeholder="e.g. M&E Manager, Programme Officer"
                  value={form.role}
                  onChange={update('role')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ct-country">Country</label>
                <input
                  id="ct-country"
                  type="text"
                  autoComplete="country-name"
                  placeholder="Kenya, Uganda, Ethiopia…"
                  value={form.country}
                  onChange={update('country')}
                />
              </div>
            </div>

            {/* Subject dropdown */}
            <div className="form-group">
              <label htmlFor="ct-subject">
                Service Area <span className="field-required" aria-hidden="true">*</span>
              </label>
              <select
                id="ct-subject"
                required
                value={form.subject}
                onChange={update('subject')}
                {...invalid('subject')}
              >
                <option value="">What do you need help with?</option>
                {contactSubjects.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errorText('subject')}
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="ct-message">
                Message <span className="field-required" aria-hidden="true">*</span>
              </label>
              <textarea
                id="ct-message"
                required
                placeholder="Tell us about your programme, the challenges you're facing, and what you need. The more context you give, the better we can respond."
                value={form.message}
                onChange={update('message')}
                style={{ minHeight: 160 }}
                {...invalid('message')}
              />
              {errorText('message')}
            </div>

            {sendFailed && (
              <p className="form-error" role="alert">
                We could not send your message just now. Please try again, or email us
                directly at <a href={`mailto:${firm.email}`}>{firm.email}</a>.
              </p>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button type="submit" className="btn-primary" disabled={sending}>
                {sending ? 'Sending…' : 'Send Message →'}
              </button>
              <span className="meta-label">We reply within two working days</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
