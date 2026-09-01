import React from 'react';
import { ExternalLink } from 'lucide-react';
import Github from './icons/Github';

const Footer = () => {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 64;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">Rishabh Bhardwaj</span>
            <p className="footer-tagline">
              Web Developer | React • JavaScript • Responsive Websites
            </p>
          </div>

          <div className="footer-links-grid">
            <div>
              <h4 className="footer-nav-title">Navigation</h4>
              <ul className="footer-nav-list">
                <li>
                  <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="footer-nav-link">Home</a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="footer-nav-link">Services</a>
                </li>
                <li>
                  <a href="#work" onClick={(e) => handleScrollTo(e, 'work')} className="footer-nav-link">Work</a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="footer-nav-link">About</a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="footer-nav-link">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="footer-nav-title">Platforms</h4>
              <ul className="footer-nav-list">
                <li>
                  <a href="https://github.com/Dantescenario" target="_blank" rel="noopener noreferrer" className="footer-nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    GitHub <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <span className="footer-nav-link" style={{ opacity: 0.5 }}>Contra</span>
                </li>
                <li>
                  <span className="footer-nav-link" style={{ opacity: 0.5 }}>Fiverr</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            © 2026 Rishabh Bhardwaj. All rights reserved.
          </span>
          
          <div className="footer-socials">
            <a 
              href="https://github.com/Dantescenario" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn"
              aria-label="GitHub profile link"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
