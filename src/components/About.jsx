import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import useInView from '../hooks/useInView';

const About = () => {
  const [contentRef, contentVisible] = useInView({ threshold: 0.2 });
  const [visualRef, visualVisible] = useInView({ threshold: 0.2 });

  const highlights = [
    { text: 'Clean & Maintainable React' },
    { text: 'Performance & SEO Friendly' },
    { text: 'Detail-Oriented & Responsive' },
    { text: 'Collaboration-focused' }
  ];

  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div
          ref={contentRef}
          className={`about-content animate-hidden animate-slide-left ${contentVisible ? 'animate-visible' : ''}`}
        >
          <span className="badge">About Me</span>
          <h2 className="section-title" style={{ textAlign: 'left', margin: '0' }}>Rishabh Bhardwaj</h2>
          <p className="about-text" style={{ marginTop: '1rem' }}>
            I'm Rishabh Bhardwaj, a web developer focused on building modern, responsive websites and web interfaces.
          </p>
          <p className="about-text">
            I enjoy turning ideas and designs into clean, functional digital experiences. My work focuses on frontend development, responsive design, landing pages, and practical web solutions for businesses and startups.
          </p>

          <div className="about-highlights">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-item">
                <CheckCircle2 size={16} />
                <span>{highlight.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={visualRef}
          className={`about-visual animate-hidden animate-slide-right anim-delay-150 ${visualVisible ? 'animate-visible' : ''}`}
        >
          <div className="about-avatar-placeholder">
            RB
          </div>
          <h3 className="about-visual-title">Rishabh Bhardwaj</h3>
          <p className="about-visual-subtitle">Web Developer | Frontend Developer</p>
        </div>
      </div>
    </section>
  );
};

export default About;
