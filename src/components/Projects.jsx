import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import CaseStudyModal from './CaseStudyModal';
import useInView from '../hooks/useInView';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [headerRef, headerVisible] = useInView();
  const [gridRef, gridVisible] = useInView({ threshold: 0.08 });

  const projectsData = [
    {
      title: 'Hair Transplant Clinic Landing Page',
      category: 'Landing Page / Healthcare',
      description: 'A modern landing page concept for a hair transplant clinic, designed around consultation lead generation and direct WhatsApp communication.',
      image: '/images/hair_clinic.jpg',
      tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'WhatsApp Integration'],
      liveUrl: 'https://hair-clinic-landing.vercel.app/',
      isCaseStudyAvailable: true,
      isPlaceholder: false
    },
    {
      title: 'Resume Builder',
      category: 'Web Application',
      description: 'An interactive web application for creating professional resumes, allowing real-time edits, templating, and instant PDF download.',
      image: '/images/resume_builder.jpg',
      tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'PDF Generation', 'State Management'],
      liveUrl: 'https://github.com/Dantescenario',
      isCaseStudyAvailable: false,
      isPlaceholder: false
    },
    { isPlaceholder: true },
    { isPlaceholder: true }
  ];

  const delayClasses = ['', 'anim-delay-150', 'anim-delay-300', 'anim-delay-450'];

  return (
    <section id="work" className="section">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-title-wrapper animate-hidden animate-fade-up ${headerVisible ? 'animate-visible' : ''}`}
        >
          <span className="badge">Featured Work</span>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-subtitle">
            A few websites and digital products I've designed and developed.
          </p>
        </div>

        <div ref={gridRef} className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`animate-hidden animate-fade-up ${delayClasses[index]} ${gridVisible ? 'animate-visible' : ''}`}
            >
              <ProjectCard
                {...project}
                onCaseStudyClick={() => setIsModalOpen(true)}
              />
            </div>
          ))}
        </div>
      </div>

      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Projects;
