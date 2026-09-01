import React from 'react';
import { ShieldCheck, Monitor, Zap, Smartphone, Heart } from 'lucide-react';
import useInView from '../hooks/useInView';

const TrustStrip = () => {
  const [stripRef, stripVisible] = useInView({ threshold: 0.3 });

  const items = [
    { text: 'Responsive', icon: <Monitor size={18} /> },
    { text: 'Modern UI', icon: <Zap size={18} /> },
    { text: 'Performance-focused', icon: <ShieldCheck size={18} /> },
    { text: 'Mobile-first', icon: <Smartphone size={18} /> },
    { text: 'Client-focused', icon: <Heart size={18} /> }
  ];

  const delayClasses = ['', 'anim-delay-100', 'anim-delay-200', 'anim-delay-300', 'anim-delay-400'];

  return (
    <div ref={stripRef} className="trust-strip">
      <div className="container trust-container">
        {items.map((item, index) => (
          <div
            key={index}
            className={`trust-item animate-hidden animate-fade-up ${delayClasses[index]} ${stripVisible ? 'animate-visible' : ''}`}
          >
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustStrip;
