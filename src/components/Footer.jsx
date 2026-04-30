import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div>
        <div className="footer-brand">LMD<span>.</span> Consulting Group</div>
        <div className="footer-sub">
          © {year} LMD Consulting Group. All rights reserved.
        </div>
        <div className="footer-nairobi">
          Made with love ❤️ from Nairobi.
        </div>
        <div style={{ marginTop: '0.8rem', fontSize: '0.78rem', color: 'rgba(245,242,235,0.55)', fontFamily: 'var(--mono)', letterSpacing: '0.04em' }}>
          <a href="tel:+254723539332" style={{ color: 'rgba(245,242,235,0.55)', textDecoration: 'none' }}>+254 723 539 332</a>
        </div>
      </div>

      <div className="footer-copy">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', textAlign: 'right' }}>
          <Link to="/#services" style={{ color: 'rgba(245,242,235,0.4)', fontSize: '0.72rem', fontFamily: 'var(--mono)', letterSpacing: '0.06em' }}>
            Services
          </Link>
          <Link to="/case-studies" style={{ color: 'rgba(245,242,235,0.4)', fontSize: '0.72rem', fontFamily: 'var(--mono)', letterSpacing: '0.06em' }}>
            Case Studies
          </Link>
          <Link to="/mapped" style={{ color: 'rgba(245,242,235,0.4)', fontSize: '0.72rem', fontFamily: 'var(--mono)', letterSpacing: '0.06em' }}>
            Mapped
          </Link>
          <a href="https://www.ai4development.co/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(245,242,235,0.4)', fontSize: '0.72rem', fontFamily: 'var(--mono)', letterSpacing: '0.06em' }}>
            AI 4 NGOs ↗
          </a>
          <Link to="/contact" style={{ color: 'rgba(245,242,235,0.4)', fontSize: '0.72rem', fontFamily: 'var(--mono)', letterSpacing: '0.06em' }}>
            Contact
          </Link>
          <div style={{ marginTop: '0.5rem', fontSize: '0.68rem', color: 'rgba(245,242,235,0.2)', letterSpacing: '0.04em' }}>
            Monitoring · Communications · Digital · Research
          </div>
        </div>
      </div>
    </footer>
  );
}
