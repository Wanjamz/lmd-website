import { Link } from 'react-router-dom';
import { ArrowRight, FileBadge, Globe, CalendarRange, LineChart, Users } from 'lucide-react';

export default function ServicesNGOPage() {
  return (
    <div>
      {/* Intro Section */}
      <section className="section bg-cream">
        <div className="container">
          <p className="text-muted mb-4" style={{ fontSize: '14px' }}>
            <Link to="/" style={{ color: 'var(--color-primary-dark)', textDecoration: 'none' }}>Home</Link> &gt; 
            <span style={{ color: 'var(--color-text-muted)' }}> Services</span> &gt; 
            <span style={{ fontWeight: 600 }}> For NGOs</span>
          </p>
          <div className="max-w-3xl">
            <h1 className="section-heading" style={{ fontSize: '48px', marginBottom: '24px' }}>
              We specialize in delivering actionable strategies.
            </h1>
            <p className="body-large text-muted" style={{ fontSize: '20px' }}>
              We specialize in delivering actionable strategies and expert support to NGOs, development partners, and donor-funded programmes across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Featured Packages */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            
            {/* Package 1 */}
            <div className="card flex flex-col items-start" style={{ borderTop: '6px solid var(--color-primary-dark)' }}>
              <FileBadge size={48} color="var(--color-primary-dark)" className="mb-4" />
              <h3 className="card-heading mb-2">NGO Visibility Kit</h3>
              <p className="body-large mb-4 text-primary-dark" style={{ fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                Look credible and donor-ready in 14 days.
              </p>
              
              <div className="mb-6 w-full">
                <p style={{ fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Deliverables</p>
                <ul className="text-muted" style={{ listStylePosition: 'inside', padding: 0 }}>
                  <li className="mb-2">Brand identity (logo, colors, typography)</li>
                  <li className="mb-2">Capability profile PDF</li>
                  <li className="mb-2">Social media templates (10)</li>
                  <li className="mb-2">Basic website (3–5 pages, hosted and secured)</li>
                </ul>
              </div>

              <div className="mt-auto w-full mb-6">
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
                  <span className="text-muted">Timeline</span>
                  <span style={{ fontWeight: 600 }}>2 weeks</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
                  <span className="text-muted">Investment</span>
                  <span style={{ fontWeight: 600 }}>From $800 – $1,500</span>
                </div>
                <div style={{ padding: '12px 0' }}>
                  <p className="text-muted" style={{ fontSize: '14px' }}><strong>Who it's for:</strong> Small or new NGOs, underfunded but serious teams</p>
                </div>
              </div>
              
              <Link to="/contact" className="btn btn-secondary w-full" style={{ width: '100%', justifyContent: 'center' }}>Get Started →</Link>
            </div>

            {/* Package 2 */}
            <div className="card card-highlight flex flex-col items-start" style={{ borderTop: '6px solid var(--color-dark-cta)' }}>
              <Globe size={48} color="var(--color-dark-cta)" className="mb-4" />
              <h3 className="card-heading mb-2">Digital Presence System</h3>
              <p className="body-large mb-4" style={{ fontWeight: 600 }}>
                A complete system that drives visibility, reporting, and donor confidence.
              </p>
              
              <div className="mb-6 w-full">
                <p style={{ fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', marginBottom: '8px' }}>Deliverables</p>
                <ul style={{ listStylePosition: 'inside', padding: 0 }}>
                  <li className="mb-2">Full website (SEO-structured)</li>
                  <li className="mb-2">Content structure (projects, blogs, updates)</li>
                  <li className="mb-2">Social media setup + templates</li>
                  <li className="mb-2">Email/newsletter integration</li>
                  <li className="mb-2">Analytics setup</li>
                  <li className="mb-2">Hosting + domain management</li>
                </ul>
              </div>

              <div className="mt-auto w-full mb-6">
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(15, 23, 42, 0.1)' }}>
                  <span style={{ opacity: 0.8 }}>Timeline</span>
                  <span style={{ fontWeight: 600 }}>3–5 weeks</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(15, 23, 42, 0.1)' }}>
                  <span style={{ opacity: 0.8 }}>Investment</span>
                  <span style={{ fontWeight: 600 }}>$2,000 – $5,000</span>
                </div>
                <div style={{ padding: '12px 0' }}>
                  <p style={{ fontSize: '14px' }}><strong>Who it's for:</strong> NGOs scaling operations or entering a new funding cycle</p>
                </div>
              </div>
              
              <Link to="/contact" className="btn btn-primary w-full" style={{ width: '100%', justifyContent: 'center' }}>Get Started →</Link>
            </div>

            {/* Package 3 */}
            <div className="card flex flex-col items-start" style={{ borderTop: '6px solid var(--color-primary-dark)' }}>
              <CalendarRange size={48} color="var(--color-primary-dark)" className="mb-4" />
              <h3 className="card-heading mb-2">Monthly Visibility Retainer</h3>
              <p className="body-large mb-4 text-primary-dark" style={{ fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                Consistent, professional communications without the cost of a full-time team.
              </p>
              
              <div className="mb-6 w-full">
                <p style={{ fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Tiers</p>
                <ul className="text-muted" style={{ listStylePosition: 'inside', padding: 0 }}>
                  <li className="mb-2"><strong>Basic — $500/mo:</strong> 8 posts/month, basic design support</li>
                  <li className="mb-2"><strong>Growth — $1,000/mo:</strong> 12–16 posts, content creation, website updates, donor report design</li>
                  <li className="mb-2"><strong>Premium — $2,000+/mo:</strong> Full communications support — reports, campaigns, M&E summaries, strategy</li>
                </ul>
              </div>

              <div className="mt-auto w-full mb-6">
                <div style={{ padding: '12px 0', borderTop: '1px solid #eee' }}>
                  <p className="text-muted" style={{ fontSize: '14px' }}><strong>Who it's for:</strong> NGOs with active programmes needing ongoing communications</p>
                </div>
              </div>
              
              <Link to="/contact" className="btn btn-secondary w-full" style={{ width: '100%', justifyContent: 'center' }}>Get Started →</Link>
            </div>

          </div>
        </div>
      </section>

      {/* Supporting Service Cards */}
      <section className="section bg-cream">
        <div className="container">
          <h2 className="section-heading text-center mb-12">Supporting Services</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center gap-4 mb-4">
                <div style={{ padding: '12px', background: '#e0e7ff', borderRadius: '12px' }}>
                  <LineChart size={32} color="var(--color-primary-dark)" />
                </div>
                <h3 className="card-heading">M&E Research</h3>
              </div>
              <p className="mb-4" style={{ fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                Credible evidence that informs decisions and satisfies donors.
              </p>
              <ul className="text-muted" style={{ listStylePosition: 'inside', padding: 0 }}>
                <li className="mb-2">Baseline & endline surveys</li>
                <li className="mb-2">Midline evaluations</li>
                <li className="mb-2">Learning and outcome reviews</li>
                <li className="mb-2">Qualitative + quantitative data collection</li>
                <li className="mb-2">Data analysis and evaluation reporting</li>
              </ul>
            </div>

            <div className="card">
              <div className="flex items-center gap-4 mb-4">
                <div style={{ padding: '12px', background: '#ffedd5', borderRadius: '12px' }}>
                  <Users size={32} color="var(--color-accent-orange)" />
                </div>
                <h3 className="card-heading">Capacity Strengthening & Org. Development</h3>
              </div>
              <p className="mb-4" style={{ fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                Internal readiness for donor engagement and programme management.
              </p>
              <ul className="text-muted" style={{ listStylePosition: 'inside', padding: 0 }}>
                <li className="mb-2">Organisational assessments and capacity diagnostics</li>
                <li className="mb-2">Strengthening internal systems and workflows</li>
                <li className="mb-2">Development of organisational strategies</li>
                <li className="mb-2">Support to donor engagement and reporting readiness</li>
                <li className="mb-2">Internal proposal development support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container">
          <div className="card bg-navy text-white text-center max-w-4xl mx-auto" style={{ padding: '48px 32px' }}>
            <h2 className="section-heading text-white mb-4">Not sure which package is right for you?</h2>
            <p className="body-large mb-8" style={{ opacity: 0.9 }}>
              Tell us what you're working on — we'll suggest the right fit.
            </p>
            
            <form className="max-w-xl mx-auto text-left" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Name" required style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }} />
              <input type="email" placeholder="Email" required style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }} />
              <textarea placeholder="Message" required style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}></textarea>
              <button type="submit" className="btn btn-primary w-full" style={{ width: '100%', background: 'var(--color-accent-green)', color: 'var(--color-dark-cta)' }}>Send Message</button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
