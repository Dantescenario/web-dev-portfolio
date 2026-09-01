import React from 'react';
import { Smartphone, Code, Smile, MessageSquare } from 'lucide-react';
import useInView from '../hooks/useInView';

const WhyWorkWithMe = () => {
  const [leftRef, leftVisible] = useInView({ threshold: 0.2 });
  const [rightRef, rightVisible] = useInView({ threshold: 0.1 });

  const points = [
    {
      title: 'Responsive by default',
      desc: 'Websites that look stunning and work flawlessly across mobile, tablet, and desktop screens.',
      icon: <Smartphone className="why-icon" size={24} />
    },
    {
      title: 'Clean and maintainable code',
      desc: 'Built using React best practices, making it easy to update, scale, or integrate with backends.',
      icon: <Code className="why-icon" size={24} />
    },
    {
      title: 'Focused on user experience',
      desc: 'Designed around user behavior, loading fast, and driving visitors towards key actions.',
      icon: <Smile className="why-icon" size={24} />
    },
    {
      title: 'Clear communication',
      desc: 'Direct collaboration, regular updates, and no jargon. I make sure we are aligned at every stage.',
      icon: <MessageSquare className="why-icon" size={24} />
    }
  ];

  const delayClasses = ['', 'anim-delay-150', 'anim-delay-150', 'anim-delay-300'];

  return (
    <section className="section">
      <div className="container why-grid">
        <div
          ref={leftRef}
          className={`animate-hidden animate-slide-left ${leftVisible ? 'animate-visible' : ''}`}
        >
          <span className="badge">Why Hire Me</span>
          <h2 className="why-left-title">Built for Your Business, Not Just Your Browser</h2>
          <p className="why-left-text">
            I focus on building websites that look professional, work smoothly across devices, and make it easy for visitors to understand what a business offers. No over-engineering—just elegant, high-performing websites.
          </p>
        </div>

        <div ref={rightRef} className="why-right-grid">
          {points.map((point, index) => (
            <div
              key={index}
              className={`why-card animate-hidden animate-fade-up ${delayClasses[index]} ${rightVisible ? 'animate-visible' : ''}`}
            >
              {point.icon}
              <h3 className="why-title">{point.title}</h3>
              <p className="why-desc">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
