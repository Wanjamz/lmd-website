import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleHashNav = (e, hash) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="main-nav" style={{ boxShadow: scrolled ? '0 2px 16px rgba(13,13,11,0.08)' : 'none' }}>
        {/* Logo */}
        <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/images/main_logo.png"
            alt="LMD Consulting Group"
            style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        <ul className="nav-links">
          <li>
            <a href="/#services" onClick={e => handleHashNav(e, '#services')}>Services</a>
          </li>
          <li>
            <Link to="/case-studies">Case Studies</Link>
          </li>
          <li>
            <a href="/#packages" onClick={e => handleHashNav(e, '#packages')}>Packages</a>
          </li>
          <li>
            <a href="/#about" onClick={e => handleHashNav(e, '#about')}>About</a>
          </li>
          <li>
            <Link to="/contact" className="nav-cta">Let's Talk</Link>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <line x1="2" y1="5.5" x2="20" y2="5.5" stroke="#0d0d0b" strokeWidth="1.5" />
            <line x1="2" y1="11.5" x2="20" y2="11.5" stroke="#0d0d0b" strokeWidth="1.5" />
            <line x1="2" y1="17.5" x2="20" y2="17.5" stroke="#0d0d0b" strokeWidth="1.5" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/images/main_logo.png"
                alt="LMD Consulting Group"
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <ul>
            <li>
              <a href="/#services" onClick={e => { handleHashNav(e, '#services'); setMenuOpen(false); }}>Services</a>
            </li>
            <li>
              <Link to="/case-studies">Case Studies</Link>
            </li>
            <li>
              <a href="/#packages" onClick={e => { handleHashNav(e, '#packages'); setMenuOpen(false); }}>Packages</a>
            </li>
            <li>
              <a href="/#about" onClick={e => { handleHashNav(e, '#about'); setMenuOpen(false); }}>About</a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="mobile-cta-wrap">
            <Link to="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>
              Let's Talk →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
