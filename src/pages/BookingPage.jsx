import { Calendar, Layers, Globe2 } from 'lucide-react';

export default function BookingPage() {
  return (
    <div>
      <section className="section bg-cream min-h-screen">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="hero-display mb-6">
              Schedule Your<br/>Strategic Consultation.
            </h1>
            <p className="body-large text-muted max-w-2xl mx-auto">
              A focused 30-minute call to explore your M&E needs, visibility gaps, or digital infrastructure — and how LMD can support your mission.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-3 gap-6 mb-12 text-left">
            <div className="card">
              <Calendar size={32} color="var(--color-primary-dark)" className="mb-4" />
              <h3 className="card-heading mb-2">30-Min Intro</h3>
              <p className="text-muted">A focused discussion on your objectives and challenges</p>
            </div>
            
            <div className="card">
              <div style={{ position: 'relative', width: '32px', height: '32px', marginBottom: '16px' }}>
                <Layers size={32} color="var(--color-accent-orange)" />
                <span style={{ position: 'absolute', top: -5, right: -5, color: 'var(--color-accent-green)' }}>✦</span>
              </div>
              <h3 className="card-heading mb-2">Actionable Path</h3>
              <p className="text-muted">We'll outline exactly how LMD can turn your work into decision-ready evidence</p>
            </div>

            <div className="card">
              <Globe2 size={32} color="var(--color-primary-dark)" className="mb-4" />
              <h3 className="card-heading mb-2">Global Standard</h3>
              <p className="text-muted">Strategies used for organisations including UNICEF and READO</p>
            </div>
          </div>

          <p className="text-muted text-italics mb-12">
            "We've supported 25+ organisations including UNICEF Zambia and READO."
          </p>

          {/* Mock Calendar Widget */}
          <div className="card max-w-4xl mx-auto p-0 overflow-hidden" style={{ minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
            <div className="text-center" style={{ padding: '60px' }}>
              <Calendar size={64} color="var(--color-accent-green)" className="mx-auto mb-6" />
              <h3 className="card-heading mb-2">Fluent Booking Widget</h3>
              <p className="text-muted mb-6">Shortcode embedding placeholder [fluent_booking id="1"]</p>
              
              {/* Fake UI for demo purposes */}
              <div className="flex gap-8 justify-center mt-8">
                <div style={{ width: '300px', background: '#f8fafc', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'left' }}>
                  <p style={{ fontWeight: 600, marginBottom: '16px' }}>Available Times</p>
                  <button className="btn btn-secondary w-full" style={{ padding: '8px', marginBottom: '8px' }}>10:00 AM</button>
                  <button className="btn btn-secondary w-full" style={{ padding: '8px', marginBottom: '8px' }}>1:30 PM</button>
                  <button className="btn btn-secondary w-full" style={{ padding: '8px' }}>4:00 PM</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
