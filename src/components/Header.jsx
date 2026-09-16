import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Navigating away swaps the page underneath, so the menu can go at once. */
  const [menuLocation, setMenuLocation] = useState(location);
  if (menuLocation !== location) {
    setMenuLocation(location);
    setMenuOpen(false);
    setMenuClosing(false);
  }

  /* Closing in place plays a short fade before the sheet unmounts. */
  const closeMenu = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setMenuOpen(false);
      return;
    }
    setMenuClosing(true);
  };
  const onMenuAnimationEnd = e => {
    if (menuClosing && e.target === e.currentTarget) {
      setMenuOpen(false);
      setMenuClosing(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`main-nav${scrolled ? ' is-scrolled' : ''}`}>
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/mapped">Mapped</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-cta">Contact</Link>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          style={{ color: 'var(--ink)' }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <line x1="2" y1="5.5" x2="20" y2="5.5" stroke="currentColor" strokeWidth="1.5" />
            <line x1="2" y1="11.5" x2="20" y2="11.5" stroke="currentColor" strokeWidth="1.5" />
            <line x1="2" y1="17.5" x2="20" y2="17.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`mobile-menu${menuClosing ? ' is-closing' : ''}`}
          onAnimationEnd={onMenuAnimationEnd}
        >
          <div className="mobile-menu-header">
            <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/images/main_logo.png"
                alt="LMD Consulting Group"
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <button
              onClick={closeMenu}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink)', padding: 4, display: 'flex' }}
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            </li>
            <li>
              <Link to="/work" onClick={() => setMenuOpen(false)}>Work</Link>
            </li>
            <li>
              <Link to="/mapped" onClick={() => setMenuOpen(false)}>Mapped</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
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
