import React, { useState } from 'react';
import { Mail, ExternalLink, Send, CheckCircle2, AlertTriangle } from 'lucide-react';
import Github from './icons/Github';
import useInView from '../hooks/useInView';

const Contact = () => {
  const [headerRef, headerVisible] = useInView();
  const [infoRef, infoVisible] = useInView({ threshold: 0.1 });
  const [formRef, formVisible] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Landing Page',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic frontend validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setStatusMessage('Please fill out all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus('error');
      setStatusMessage('Please provide a valid email address.');
      return;
    }

    // Success response - simulated client-side confirmation
    setFormStatus('success');
    setStatusMessage('Validation passed! (Demo mode: In a production environment, this form would connect to Formspree, Web3Forms, or a custom backend to deliver your inquiry).');
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      projectType: 'Landing Page',
      message: ''
    });
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-title-wrapper animate-hidden animate-fade-up ${headerVisible ? 'animate-visible' : ''}`}
        >
          <span className="badge">Get in Touch</span>
          <h2 className="section-title">Let's Build Something</h2>
          <p className="section-subtitle">
            Have a project in mind or want to talk about frontend support? Drop me a message.
          </p>
        </div>

        <div className="contact-grid">
          <div ref={infoRef} className={`contact-info animate-hidden animate-slide-left ${infoVisible ? 'animate-visible' : ''}`}>
            <div>
              <h3 className="contact-info-title">Connect Directly</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                You can reach out through email or view my profiles on these professional freelancing and code platforms.
              </p>
            </div>

            <div className="contact-channels">
              <a href="mailto:risabh112000@gmail.com" className="contact-channel-card">
                <div className="contact-channel-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-channel-details">
                  <span className="contact-channel-label">Email</span>
                  <span className="contact-channel-value">risabh112000@gmail.com</span>
                </div>
              </a>

              <a href="https://github.com/Dantescenario" target="_blank" rel="noopener noreferrer" className="contact-channel-card">
                <div className="contact-channel-icon">
                  <Github size={20} />
                </div>
                <div className="contact-channel-details">
                  <span className="contact-channel-label">GitHub</span>
                  <span className="contact-channel-value">github.com/Dantescenario</span>
                </div>
              </a>

              <div className="contact-channel-card" style={{ opacity: 0.7 }}>
                <div className="contact-channel-icon">
                  <ExternalLink size={20} />
                </div>
                <div className="contact-channel-details">
                  <span className="contact-channel-label">Contra</span>
                  <span className="contact-channel-value" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    [Contra Link - Add URL Later]
                  </span>
                </div>
              </div>

              <div className="contact-channel-card" style={{ opacity: 0.7 }}>
                <div className="contact-channel-icon">
                  <ExternalLink size={20} />
                </div>
                <div className="contact-channel-details">
                  <span className="contact-channel-label">Fiverr</span>
                  <span className="contact-channel-value" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    [Fiverr Link - Add URL Later]
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div ref={formRef} className={`contact-form-container animate-hidden animate-slide-right anim-delay-150 ${formVisible ? 'animate-visible' : ''}`}>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    className="form-input" 
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="form-input" 
                    placeholder="yourname@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="projectType" className="form-label">Project Type</label>
                <select 
                  id="projectType" 
                  name="projectType" 
                  value={formData.projectType} 
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Landing Page">Landing Page</option>
                  <option value="Business Website">Business Website</option>
                  <option value="React Development">React Development</option>
                  <option value="Website Redesign">Website Redesign</option>
                  <option value="Figma to React">Figma to React</option>
                  <option value="Website Fixes">Website Fixes & Improvements</option>
                  <option value="Other">Other / Integration</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                  className="form-textarea" 
                  placeholder="Tell me a bit about your website, goals, and timeline..."
                  required
                />
              </div>

              <button type="submit" className="btn btn-accent" style={{ width: '100%' }}>
                Send Inquiry
                <Send size={16} />
              </button>

              {formStatus === 'success' && (
                <div className="form-feedback success">
                  <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
                  <span>{statusMessage}</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="form-feedback error">
                  <AlertTriangle size={18} style={{ flexShrink: 0 }} />
                  <span>{statusMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
