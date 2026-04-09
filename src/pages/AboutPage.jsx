import { Link } from 'react-router-dom';
import { Quote } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section bg-cream">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-8">
            <div>
              <span className="badge">ABOUT LMD</span>
              <h1 className="hero-display mb-6">
                We don't just design.<br/>
                We build <span className="highlight">systems</span><br/>
                that work.
              </h1>
              <p className="body-large mb-4">
                LMD Consulting Group is a Kenya-based consultancy built on two foundations: technical rigour and strategic communication. We serve NGOs, donor-funded programmes, and SMEs across the Horn of Africa — helping them generate credible evidence and communicate it effectively to donors, partners, and communities.
              </p>
              <p className="body-regular text-muted">
                The firm is led by two senior consultants with complementary expertise in Monitoring & Evaluation and strategic communications, supported by a network of experienced associates. Our founding consultants are based in Nairobi and Mogadishu, giving us genuine local presence across the Horn of Africa.
              </p>
            </div>
            <div>
              <img 
                src="https://raw.githubusercontent.com/KaterinaLupacheva/react-app-with-tailwind/main/src/assets/hero-img.png" 
                alt="Team planning"
                className="illustration-placeholder w-full"
                style={{ filter: 'hue-rotate(180deg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Process Section */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-heading mb-8">How We Work</h2>
          
          <div className="grid grid-cols-4 gap-6 text-left">
            {[ 
              { step: 1, title: 'Align', desc: 'Confirm purpose, key questions, stakeholders, and deliverables. Review documents and lock the evaluation framework.' },
              { step: 2, title: 'Collect', desc: 'Design data collection tools. Deploy with ethics, consent, and rigorous quality controls.' },
              { step: 3, title: 'Analyse', desc: 'Clean and validate datasets. Synthesize findings into actionable insights including SWOT where relevant.' },
              { step: 4, title: 'Recommend', desc: 'Produce practical reports with prioritized recommendations. Stakeholder validation and full handover.' }
            ].map((item) => (
              <div key={item.step} className="card hover-blue flex flex-col" style={{ padding: '24px' }}>
                <div style={{ 
                  width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-accent-green)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--color-dark-cta)',
                  marginBottom: '16px'
                }}>
                  {item.step}
                </div>
                <h3 className="card-heading mb-2 hover-text">{item.title}</h3>
                <p className="text-muted hover-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge" style={{ background: 'white', color: 'var(--color-primary-dark)', border: '1px solid #e2e8f0' }}>25+ ORGANIZATIONS</span>
            <div className="flex justify-center gap-8 mt-6" style={{ opacity: 0.5 }}>
              <h3 className="card-heading" style={{ color: 'var(--color-text-muted)' }}>UNICEF</h3>
              <h3 className="card-heading" style={{ color: 'var(--color-text-muted)' }}>READO</h3>
              <h3 className="card-heading" style={{ color: 'var(--color-text-muted)' }}>SECPLUS</h3>
            </div>
          </div>

          <div className="card text-left max-w-3xl mx-auto relative mb-12" style={{ borderLeft: '6px solid var(--color-primary-dark)' }}>
            <Quote size={48} color="var(--color-accent-green)" className="absolute -top-4 -left-4 bg-white rounded-full p-2 shadow-sm" />
            <p className="body-large mb-6" style={{ fontSize: '20px', lineHeight: 1.6, marginTop: '16px' }}>
              "Working with LMD is working with a firm that has the intuition to capture your vision and turn it into communication strategies that resonate with your audience and represent you clearly to donors, partners, and potential clients."
            </p>
            <div>
              <p style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Ken Martin Gitari</p>
              <p className="text-muted">Managing Director, Secplus Kenya</p>
            </div>
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            <div className="card text-center" style={{ width: '200px', padding: '24px' }}>
              <h3 style={{ fontSize: '32px', color: 'var(--color-accent-orange)', marginBottom: '8px' }}>25+</h3>
              <p className="text-muted font-bold" style={{ fontSize: '14px' }}>Organizations</p>
            </div>
            <div className="card text-center" style={{ width: '200px', padding: '24px' }}>
              <h3 style={{ fontSize: '32px', color: 'var(--color-primary-dark)', marginBottom: '8px' }}>HOA</h3>
              <p className="text-muted font-bold" style={{ fontSize: '14px' }}>Kenya + Horn of Africa</p>
            </div>
            <div className="card text-center" style={{ width: '200px', padding: '24px' }}>
              <h3 style={{ fontSize: '32px', color: 'var(--color-accent-green)', marginBottom: '8px' }}>100%</h3>
              <p className="text-muted font-bold" style={{ fontSize: '14px' }}>M&E + Comms Specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section bg-navy text-center">
        <div className="container">
          <h2 className="section-heading text-white mb-6">Want to understand how we work?</h2>
          <p className="body-large text-white mb-8" style={{ opacity: 0.9 }}>Book a 30-minute intro call to discuss your objectives.</p>
          <Link to="/scheduletime" className="btn btn-primary" style={{ background: 'var(--color-accent-green)', color: 'var(--color-dark-cta)' }}>
            Book a Free Call →
          </Link>
        </div>
      </section>
      
      <style>{`
        .hover-blue:hover { background-color: var(--color-primary-dark); }
        .hover-blue:hover .hover-text { color: white; }
        .hover-blue:hover .hover-text-muted { color: rgba(255,255,255,0.8); }
      `}</style>
    </div>
  );
}
