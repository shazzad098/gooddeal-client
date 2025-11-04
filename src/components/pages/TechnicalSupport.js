import React from 'react';
import './TechnicalSupport.css';

const TechnicalSupport = () => {
  const supportChannels = [
    { 
      title: "Submit a Ticket", 
      icon: "📧", 
      description: "For non-critical issues, fill out our detailed support form. Guaranteed response within 4 hours during business days.",
      link: "/contact?topic=technical",
      linkText: "Open Ticket Form"
    },
    { 
      title: "Live Chat Support", 
      icon: "💬", 
      description: "Immediate assistance for urgent production issues and technical consultations. Available 24/5.",
      link: "#", // Placeholder for live chat widget
      linkText: "Start Chat Now"
    },
    { 
      title: "Knowledge Base", 
      icon: "📚", 
      description: "Access our library of technical documentation, fabric specifications, and troubleshooting guides.",
      link: "/support?section=kb",
      linkText: "View Documentation"
    },
  ];

  const commonTopics = [
    "Fabric Data Sheets (GSM, Count, Shrinkage)",
    "Dyeing and Color Formulation Queries",
    "Compatibility with Specific Machinery",
    "API Integration for Order Tracking",
    "Defect Analysis and Consultation",
  ];

  return (
    <div className="technical-support-page">
      <header className="ts-hero-section">
        <div className="ts-container">
          <h1>Dedicated Technical Support 📞</h1>
          <p>
            Get expert assistance for your textile production, quality, and integration needs. Our technical team is ready to solve your challenges quickly and effectively.
          </p>
          <a href="#channels" className="ts-cta-button">
            Choose Your Support Channel ↓
          </a>
        </div>
      </header>

      <section id="channels" className="ts-channels-section">
        <div className="ts-container">
          <h2>Our Support Channels</h2>
          <div className="ts-channel-grid">
            {supportChannels.map((channel, index) => (
              <div key={index} className="ts-channel-card">
                <div className="ts-icon">{channel.icon}</div>
                <h3>{channel.title}</h3>
                <p>{channel.description}</p>
                <a href={channel.link} className="ts-card-link">{channel.linkText} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ts-topics-section">
        <div className="ts-container">
          <h2>Common Technical Topics We Cover</h2>
          <div className="ts-topics-list">
            {commonTopics.map((topic, index) => (
              <span key={index} className="ts-topic-tag">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="ts-escalation-section">
        <div className="ts-container">
          <h2>Escalation Procedure</h2>
          <div className="ts-escalation-box">
            <p>
              If your production is stalled or an issue remains unresolved for over 24 hours, you can **escalate** your existing ticket to a Senior Technician or R&D Specialist for priority review.
            </p>
            <a href="/contact?topic=escalation" className="ts-escalate-button">
                Request Escalation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalSupport;
