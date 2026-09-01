import React, { useEffect } from 'react';
import { X, CheckCircle, ExternalLink, Code } from 'lucide-react';

const CaseStudyModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <span className="modal-category">Landing Page / Healthcare</span>
          <h2 className="modal-title">Hair Transplant Clinic Landing Page</h2>
        </div>

        <div className="modal-body">
          <img 
            src="/images/hair_clinic.jpg" 
            alt="Hair Transplant Clinic landing page demo mockup" 
            className="modal-image"
          />

          <div className="modal-grid">
            <div className="modal-main">
              <div className="modal-section">
                <h3 className="modal-section-title">
                  <span>The Challenge</span>
                </h3>
                <p>
                  Hair clinics require a focused online presence that immediately establishes credibility, answers patients' initial queries (treatments, results), and guides them toward booking a clinical consultation or starting an immediate consultation via messaging apps like WhatsApp.
                </p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">
                  <span>The Solution</span>
                </h3>
                <p>
                  Designed and developed a highly polished, responsive landing page with prominent consultation CTAs, specific treatment pages/details, patient result timelines, patient feedback, and integrated direct-chat options.
                </p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">
                  <span>Key Features</span>
                </h3>
                <div className="modal-list">
                  <div className="modal-list-item">
                    <CheckCircle size={16} />
                    <span>Responsive Layout</span>
                  </div>
                  <div className="modal-list-item">
                    <CheckCircle size={16} />
                    <span>Direct WhatsApp Call</span>
                  </div>
                  <div className="modal-list-item">
                    <CheckCircle size={16} />
                    <span>Treatment Options Grid</span>
                  </div>
                  <div className="modal-list-item">
                    <CheckCircle size={16} />
                    <span>Before/After Results Grid</span>
                  </div>
                  <div className="modal-list-item">
                    <CheckCircle size={16} />
                    <span>Lead Consultation Form</span>
                  </div>
                  <div className="modal-list-item">
                    <CheckCircle size={16} />
                    <span>Client Testimonials UI</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-sidebar">
              <div className="modal-meta-card">
                <div className="modal-meta-item">
                  <div className="modal-meta-label">Project Type</div>
                  <div className="modal-meta-val">Concept/Demo Page</div>
                </div>
                <div className="modal-meta-item">
                  <div className="modal-meta-label">Technologies</div>
                  <div className="modal-meta-val">React, JavaScript, CSS3, HTML5</div>
                </div>
                <div className="modal-meta-item" style={{ marginBottom: 0 }}>
                  <div className="modal-meta-label">Live Link</div>
                  <div className="modal-meta-val">
                    <a 
                      href="https://hair-clinic-landing.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-accent"
                      style={{ 
                        display: 'inline-flex', 
                        width: '100%', 
                        marginTop: '0.5rem',
                        padding: '0.5rem 1rem',
                        fontSize: '0.85rem'
                      }}
                    >
                      View Live Demo
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-disclaimer">
              <strong>Please Note:</strong> This project is a demonstration concept developed to showcase landing page design and direct lead generation integration. The displayed clinic information is mock data, and it is not an active commercial clinic.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
