import React from 'react';
import useInView from '../hooks/useInView';

const CTA = () => {
  const [bannerRef, bannerVisible] = useInView({ threshold: 0.2 });

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 64;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div
          ref={bannerRef}
          className={`cta-banner animate-hidden animate-scale-in ${bannerVisible ? 'animate-visible' : ''}`}
        >
          <div className="cta-content">
            <h2 className="cta-title">Have a website in mind?</h2>
            <p className="cta-text">
              Whether you need a landing page, a business website, or improvements to an existing site, let's talk about what you're trying to build.
            </p>
            <div className="cta-actions">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="btn btn-accent"
              >
                Start a Project
              </a>
              <a
                href="#work"
                onClick={(e) => handleScrollTo(e, 'work')}
                className="btn btn-secondary"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
