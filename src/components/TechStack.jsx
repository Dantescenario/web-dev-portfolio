import React from 'react';
import {
  Code2,
  Terminal,
  FileCode,
  Layers,
  Server,
  GitBranch,
  Triangle
} from 'lucide-react';
import Github from './icons/Github';
import useInView from '../hooks/useInView';

const TechStack = () => {
  const [headerRef, headerVisible] = useInView();
  const [gridRef, gridVisible] = useInView({ threshold: 0.1 });

  const stack = [
    { name: 'React', icon: <Code2 size={20} /> },
    { name: 'JavaScript', icon: <Terminal size={20} /> },
    { name: 'HTML5', icon: <FileCode size={20} /> },
    { name: 'CSS3', icon: <Layers size={20} /> },
    { name: 'Node.js', icon: <Server size={20} /> },
    { name: 'Git', icon: <GitBranch size={20} /> },
    { name: 'GitHub', icon: <Github size={20} /> },
    { name: 'Vercel', icon: <Triangle size={20} style={{ transform: 'rotate(180deg)' }} /> }
  ];

  const delayClasses = [
    '', 'anim-delay-100', 'anim-delay-150', 'anim-delay-200',
    'anim-delay-250', 'anim-delay-300', 'anim-delay-350', 'anim-delay-400'
  ];

  return (
    <section className="section section-alt">
      <div className="container tech-container">
        <div
          ref={headerRef}
          className={`section-title-wrapper animate-hidden animate-fade-up ${headerVisible ? 'animate-visible' : ''}`}
          style={{ marginBottom: '2.5rem' }}
        >
          <span className="badge">Technologies</span>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">
            Modern tools and technologies I use to build premium frontend interfaces.
          </p>
        </div>

        <div ref={gridRef} className="tech-grid">
          {stack.map((tech, index) => (
            <div
              key={index}
              className={`tech-card animate-hidden animate-scale-in ${delayClasses[index]} ${gridVisible ? 'animate-visible' : ''}`}
            >
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
