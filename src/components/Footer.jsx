import { Link } from 'react-router-dom';
import { firm } from '../data/siteData';

/* Main nav is Home · About Us · Work · Mapped · Contact.
   The footer additionally carries what sits off the menu. */
const footerLinks = [
  { label: 'About Us',  to: '/about' },
  { label: 'Work',      to: '/work' },
  { label: 'Mapped',    to: '/mapped' },
  { label: 'Services',  to: '/#services' },
  { label: 'AI 4 NGOs', to: 'https://www.ai4development.co/', external: true },
  { label: 'Contact',   to: '/contact' },
];

const footerLinkStyle = {
  color: 'rgba(232,238,244,0.72)',
  fontSize: '0.85rem',
  fontFamily: 'var(--sans)',
  letterSpacing: '0',
};

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
        <div style={{ marginTop: '0.9rem', fontSize: '0.85rem', color: 'rgba(232,238,244,0.72)', fontFamily: 'var(--sans)' }}>
          <a href={`tel:${firm.phoneHref}`} style={{ color: 'rgba(232,238,244,0.72)', textDecoration: 'none' }}>{firm.phone}</a>
        </div>
      </div>

      <div className="footer-copy">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', textAlign: 'right' }}>
          {footerLinks.map(link => (
            link.external ? (
              <a key={link.label} href={link.to} target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>
                {link.label} ↗
              </a>
            ) : (
              <Link key={link.label} to={link.to} style={footerLinkStyle}>
                {link.label}
              </Link>
            )
          ))}
          <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'rgba(232,238,244,0.45)' }}>
            Monitoring · Communications · Digital · Research
          </div>
        </div>
      </div>
    </footer>
  );
}
