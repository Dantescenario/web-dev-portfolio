import React from 'react';
import { Target, Globe, Code2, RefreshCw, Layers, Wrench } from 'lucide-react';
import useInView from '../hooks/useInView';

const Services = () => {
  const [headerRef, headerVisible] = useInView();
  const [gridRef, gridVisible] = useInView({ threshold: 0.1 });

  const services = [
    {
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to communicate your offer clearly and drive visitors toward action.',
      icon: <Target size={24} />
    },
    {
      title: 'Business Websites',
      description: 'Professional responsive websites that help businesses establish a strong online presence.',
      icon: <Globe size={24} />
    },
    {
      title: 'React Development',
      description: 'Modern frontend interfaces built with React and reusable components.',
      icon: <Code2 size={24} />
    },
    {
      title: 'Website Redesign',
      description: 'Transform outdated websites into modern, responsive experiences.',
      icon: <RefreshCw size={24} />
    },
    {
      title: 'Figma to React',
      description: 'Convert designs into clean, responsive, production-ready frontend interfaces.',
      icon: <Layers size={24} />
    },
    {
      title: 'Website Fixes & Improvements',
      description: 'Fix responsive issues, UI bugs, layout problems, forms, and other frontend issues.',
      icon: <Wrench size={24} />
    }
  ];

  const delayClasses = ['', 'anim-delay-100', 'anim-delay-200', 'anim-delay-150', 'anim-delay-250', 'anim-delay-300'];

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-title-wrapper animate-hidden animate-fade-up ${headerVisible ? 'animate-visible' : ''}`}
        >
          <span className="badge">Services</span>
          <h2 className="section-title">What I Can Build</h2>
          <p className="section-subtitle">
            Web solutions designed around your business goals.
          </p>
        </div>

        <div ref={gridRef} className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card animate-hidden animate-fade-up ${delayClasses[index]} ${gridVisible ? 'animate-visible' : ''}`}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
