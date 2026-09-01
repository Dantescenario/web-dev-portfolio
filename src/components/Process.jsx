import React from 'react';
import useInView from '../hooks/useInView';

const Process = () => {
  const [headerRef, headerVisible] = useInView();
  const [gridRef, gridVisible] = useInView({ threshold: 0.1 });

  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Understand your business, audience, goals, and requirements.'
    },
    {
      num: '02',
      title: 'Design',
      desc: 'Create a clean structure and user experience around your goals.'
    },
    {
      num: '03',
      title: 'Develop',
      desc: 'Build a responsive, performant website using modern technologies.'
    },
    {
      num: '04',
      title: 'Launch',
      desc: 'Test, optimize, deploy, and hand over the finished website.'
    }
  ];

  const delayClasses = ['', 'anim-delay-150', 'anim-delay-300', 'anim-delay-450'];

  return (
    <section className="section section-alt">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-title-wrapper animate-hidden animate-fade-up ${headerVisible ? 'animate-visible' : ''}`}
        >
          <span className="badge">Workflow</span>
          <h2 className="section-title">How I Work</h2>
          <p className="section-subtitle">
            A structured process designed to deliver the best results for your project.
          </p>
        </div>

        <div ref={gridRef} className="process-grid">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`process-card animate-hidden animate-fade-up ${delayClasses[index]} ${gridVisible ? 'animate-visible' : ''}`}
            >
              <div className="process-step">
                {step.num}
              </div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
