import React from 'react';
import { ExternalLink, BookOpen, Clock } from 'lucide-react';

const ProjectCard = ({ 
  title, 
  category, 
  description, 
  image, 
  tech, 
  liveUrl, 
  isPlaceholder, 
  isCaseStudyAvailable,
  onCaseStudyClick 
}) => {
  if (isPlaceholder) {
    return (
      <div className="project-card placeholder">
        <Clock size={36} className="placeholder-icon" />
        <h3 className="placeholder-title">Coming Soon</h3>
        <p className="placeholder-text">
          I'm currently working on new digital interfaces and websites. Stay tuned!
        </p>
      </div>
    );
  }

  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img 
          src={image} 
          alt={`${title} project preview`} 
          className="project-image"
          loading="lazy"
        />
      </div>

      <div className="project-content">
        <span className="project-category">{category}</span>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-tech">
          {tech.map((item, idx) => (
            <span key={idx} className="tech-tag">{item}</span>
          ))}
        </div>

        <div className="project-actions">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              View Live
              <ExternalLink size={14} />
            </a>
          )}
          {isCaseStudyAvailable && (
            <button 
              onClick={onCaseStudyClick} 
              className="btn btn-primary"
            >
              View Case Study
              <BookOpen size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
