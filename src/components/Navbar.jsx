import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = isScrolled ? 64 : 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="navbar-logo">
          Rishabh Bhardwaj
        </a>

        {/* Desktop Links */}
        <div className="navbar-links">
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="navbar-link">Home</a>
          <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="navbar-link">Services</a>
          <a href="#work" onClick={(e) => handleLinkClick(e, 'work')} className="navbar-link">Work</a>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="navbar-link">About</a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="navbar-link">Contact</a>
        </div>

        <div className="navbar-actions">
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, 'contact')} 
            className="btn btn-primary"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
          >
            Let's Work Together
          </a>
          <button 
            className="hamburger" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="mobile-nav-link">Home</a>
        <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="mobile-nav-link">Services</a>
        <a href="#work" onClick={(e) => handleLinkClick(e, 'work')} className="mobile-nav-link">Work</a>
        <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="mobile-nav-link">About</a>
        <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="mobile-nav-link">Contact</a>
        <a 
          href="#contact" 
          onClick={(e) => handleLinkClick(e, 'contact')} 
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '1rem' }}
        >
          Let's Work Together
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
