import React from 'react';
import { ArrowRight } from 'lucide-react';
import useInView from '../hooks/useInView';

const Hero = () => {
  const [badgeRef, badgeVisible] = useInView({ threshold: 0.2 });
  const [headlineRef, headlineVisible] = useInView({ threshold: 0.2 });
  const [descRef, descVisible] = useInView({ threshold: 0.2 });
  const [actionsRef, actionsVisible] = useInView({ threshold: 0.2 });
  const [visualRef, visualVisible] = useInView({ threshold: 0.1 });

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
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div
            ref={badgeRef}
            className={`availability-indicator animate-hidden animate-fade-in ${badgeVisible ? 'animate-visible' : ''}`}
          >
            <span className="availability-dot"></span>
            <span>Available for freelance projects</span>
          </div>
          <h1
            ref={headlineRef}
            className={`hero-headline animate-hidden animate-fade-up anim-delay-100 ${headlineVisible ? 'animate-visible' : ''}`}
          >
            Modern websites that turn visitors into customers.
          </h1>
          <p
            ref={descRef}
            className={`hero-description animate-hidden animate-fade-up anim-delay-200 ${descVisible ? 'animate-visible' : ''}`}
          >
            I build fast, responsive websites and landing pages for businesses and startups, with a focus on clean design, great user experience, and conversion.
          </p>
          <div
            ref={actionsRef}
            className={`hero-actions animate-hidden animate-fade-up anim-delay-300 ${actionsVisible ? 'animate-visible' : ''}`}
          >
            <a
              href="#work"
              onClick={(e) => handleScrollTo(e, 'work')}
              className="btn btn-primary"
            >
              View My Work
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="btn btn-secondary"
            >
              Let's Work Together
            </a>
          </div>
        </div>

        <div
          ref={visualRef}
          className={`hero-visual animate-hidden animate-slide-right anim-delay-200 ${visualVisible ? 'animate-visible' : ''}`}
        >
          <img
            src="/images/hair_clinic.jpg"
            alt="Hair Transplant Clinic Landing Page Design Mockup"
            className="hero-image"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <div className="hero-visual-caption">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="hero-visual-title">Hair Transplant Clinic Landing Page</span>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Demo Concept / Lead Generation</span>
            </div>
            <span className="hero-visual-badge">Featured Work</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
