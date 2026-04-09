import { Link } from 'react-router-dom';
import { PenTool, Monitor, Briefcase, Megaphone, CheckCircle2 } from 'lucide-react';

export default function BusinessServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-cream">
        <div className="container">
          <div className="max-w-3xl">
            <span className="badge">FOR SMALL & MEDIUM BUSINESSES</span>
            <h1 className="hero-display mb-6">
              We build brands<br/>
              that people <span className="highlight">trust</span>.
            </h1>
            <p className="body-large text-muted mb-8" style={{ fontSize: '20px' }}>
              LMD helps companies build credible brands, modern websites, and digital communication that drives sales and trust. We make you look serious and ready for business.
            </p>
            <Link to="/contact" className="btn btn-primary bg-navy">Request a Quote →</Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-4 gap-6">
            <div className="card text-center">
              <PenTool size={40} color="var(--color-primary-dark)" className="mx-auto mb-4" />
              <h3 className="card-heading mb-3" style={{ fontSize: '18px' }}>Branding</h3>
              <p className="text-muted" style={{ fontSize: '14px' }}>Logo design, brand guidelines, color & typography systems, stationery</p>
            </div>
            
            <div className="card text-center">
              <Monitor size={40} color="var(--color-accent-orange)" className="mx-auto mb-4" />
              <h3 className="card-heading mb-3" style={{ fontSize: '18px' }}>Websites & Tech</h3>
              <p className="text-muted" style={{ fontSize: '14px' }}>Corporate sites, e-commerce, hosting, business email (M365/Google), DNS configuration</p>
            </div>

            <div className="card text-center">
              <Briefcase size={40} color="var(--color-primary-dark)" className="mx-auto mb-4" />
              <h3 className="card-heading mb-3" style={{ fontSize: '18px' }}>Sales Assets</h3>
              <p className="text-muted" style={{ fontSize: '14px' }}>Company profiles, pitch decks, marketing collateral, professional photography</p>
            </div>

            <div className="card text-center">
              <Megaphone size={40} color="var(--color-accent-green)" className="mx-auto mb-4" />
              <h3 className="card-heading mb-3" style={{ fontSize: '18px' }}>Marketing</h3>
              <p className="text-muted" style={{ fontSize: '14px' }}>Social media management, content creation, paid ads (Google/Meta/TikTok)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="section bg-cream">
        <div className="container">
          <h2 className="section-heading text-center mb-12">Packages tailored to your stage.</h2>
          <div className="grid grid-cols-3 gap-8">
            
            <div className="card flex flex-col items-start" style={{ borderTop: '6px solid var(--color-primary-dark)' }}>
              <div className="mb-6 w-full">
                <span style={{ color: 'var(--color-text-muted)', fontWeight: 700, fontSize: '48px', opacity: 0.2, position: 'absolute', top: 20, right: 30 }}>01</span>
                <h3 className="card-heading mb-2">Starter Pack</h3>
                <p className="text-muted" style={{ fontSize: '14px', minHeight: '40px' }}>For new businesses that need to look credible fast.</p>
              </div>
              <ul className="text-muted w-full mb-8" style={{ listStylePosition: 'inside', padding: 0 }}>
                <li className="mb-2">Logo + brand kit</li>
                <li className="mb-2">Company profile (PDF)</li>
                <li className="mb-2">Social media setup</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary w-full mt-auto" style={{ justifyContent: 'center' }}>Request a Quote</Link>
            </div>

            <div className="card card-highlight flex flex-col items-start relative" style={{ transform: 'scale(1.05)', zIndex: 10, borderTop: '6px solid var(--color-dark-cta)' }}>
              <div className="mb-6 w-full">
                <span style={{ color: 'var(--color-dark-cta)', fontWeight: 700, fontSize: '48px', opacity: 0.1, position: 'absolute', top: 20, right: 30 }}>02</span>
                <h3 className="card-heading mb-2">Growth Pack</h3>
                <p style={{ color: 'rgba(15,23,42,0.8)', fontSize: '14px', minHeight: '40px' }}>For SMEs that need online presence and sales channels.</p>
              </div>
              <ul className="w-full mb-8" style={{ listStylePosition: 'inside', padding: 0, color: 'var(--color-dark-cta)' }}>
                <li className="mb-2">Full website (5–10 pages)</li>
                <li className="mb-2">Hosting + maintenance</li>
                <li className="mb-2">Professional email setup</li>
                <li className="mb-2">Product photography</li>
              </ul>
              <Link to="/contact" className="btn w-full mt-auto bg-dark" style={{ justifyContent: 'center' }}>Request a Quote</Link>
            </div>

            <div className="card flex flex-col items-start" style={{ borderTop: '6px solid var(--color-primary-dark)' }}>
              <div className="mb-6 w-full relative">
                <span style={{ color: 'var(--color-text-muted)', fontWeight: 700, fontSize: '48px', opacity: 0.2, position: 'absolute', top: -12, right: -2 }}>03</span>
                <h3 className="card-heading mb-2">Scale Pack</h3>
                <p className="text-muted" style={{ fontSize: '14px', minHeight: '40px' }}>For businesses ready to push their marketing boundaries.</p>
              </div>
              <ul className="text-muted w-full mb-8" style={{ listStylePosition: 'inside', padding: 0 }}>
                <li className="mb-2">Website improvements</li>
                <li className="mb-2">Social media management</li>
                <li className="mb-2">Paid ads setup (Google/Meta/TikTok)</li>
                <li className="mb-2">Analytics reporting</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary w-full mt-auto" style={{ justifyContent: 'center' }}>Request a Quote</Link>
            </div>

          </div>
        </div>
      </section>

      {/* How We Work Split Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-12">
            
            {/* Left: How We Work */}
            <div>
              <span className="badge mb-4">PROCESS</span>
              <h2 className="section-heading mb-8">How We Work</h2>
              <div className="flex flex-col gap-6">
                {[
                  { title: 'Discovery', desc: 'Tell us what your business does and what you need.' },
                  { title: 'Proposal', desc: 'We recommend the right package with clear pricing.' },
                  { title: 'Delivery', desc: 'We build fast and keep you updated — no silent weeks.' },
                  { title: 'Support', desc: 'We train your team and stay available long-term.' }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-accent-orange)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>
                      {idx + 1}
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 600, color: 'var(--color-primary-dark)', fontSize: '18px', marginBottom: '4px' }}>{step.title}</h4>
                      <p className="text-muted">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Expected Results & Form */}
            <div>
              <div className="card bg-navy text-white mb-8">
                <h3 className="card-heading text-white mb-6">Expected Results</h3>
                <ul style={{ listStyle: 'none', padding: 0 }} className="flex flex-col gap-4">
                  {[
                    'A credible brand people trust',
                    'Website that explains your value clearly',
                    'Higher conversion from inquiries to sales',
                    'Confidence pitching clients and partners'
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <CheckCircle2 color="var(--color-accent-green)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ opacity: 0.9 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <h3 className="card-heading mb-4">Get a Quote</h3>
                <form onSubmit={e => e.preventDefault()}>
                  <input type="text" placeholder="Name" required />
                  <input type="email" placeholder="Email" required />
                  <textarea placeholder="Message" required style={{ minHeight: '80px' }}></textarea>
                  <button type="submit" className="btn btn-primary w-full" style={{ width: '100%' }}>Request a Quote</button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer Tagline specifically for Business page */}
      <div className="py-8 bg-cream text-center text-muted" style={{ fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '14px' }}>
        Fast turnaround. Local Experts. Professional Delivery.
      </div>
    </div>
  );
}
