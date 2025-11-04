import React from 'react';
import './TextileDesign.css';

const TextileDesign = () => {
  const designServices = [
    {
      title: "Concept & Trend Analysis",
      description: "We start with deep market research to align your collection with the latest global fashion and textile trends.",
      icon: "💡",
    },
    {
      title: "Digital Pattern Creation (CAD)",
      description: "Creating seamless, high-resolution digital files ready for manufacturing across various printing and weaving techniques.",
      icon: "💻",
    },
    {
      title: "Color Story Development",
      description: "Expert color matching and palette creation to ensure brand consistency and visual appeal across all materials.",
      icon: "🌈",
    },
    {
      title: "Technical Drafting & Repeats",
      description: "Ensuring all designs are technically sound, accurately sized, and optimized for bulk production with perfect repeats.",
      icon: "📐",
    },
  ];

  return (
    <div className="textile-design-page">
      <header className="td-hero-section">
        <div className="td-hero-content">
          <h1>Creative Textile Design Studio 🖌️</h1>
          <p>
            Your vision, our canvas. We transform ideas into production-ready textile patterns using **cutting-edge CAD technology** and artistic expertise.
          </p>
          <a href="#services" className="td-cta-button">
            View Our Services →
          </a>
        </div>
      </header>

      <section id="services" className="td-services-section">
        <div className="td-container">
          <h2>Our Design Process & Services</h2>
          <div className="td-services-grid">
            {designServices.map((service, index) => (
              <div key={index} className="td-service-card">
                <div className="td-service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="td-portfolio-section">
        <div className="td-container">
          <h2>Design Portfolio Showcase</h2>
          <div className="td-portfolio-grid">
            <div className="td-portfolio-item td-placeholder">Floral Abstract</div>
            <div className="td-portfolio-item td-placeholder">Geometric Jacquard</div>
            <div className="td-portfolio-item td-placeholder">Sustainable Prints</div>
          </div>
          <p className="td-portfolio-note">
            *This section contains design placeholders. Contact us to see our full, exclusive portfolio.*
          </p>
        </div>
      </section>

      <section className="td-consultation-section">
        <div className="td-container">
          <h2>Ready to Create? Book a Design Consultation</h2>
          <form className="td-consultation-form">
            <div className="td-form-group">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Work Email" required />
            </div>
            <div className="td-form-group">
                <input type="tel" placeholder="Phone Number" />
                <select required>
                    <option value="">Project Type</option>
                    <option value="apparel">Apparel</option>
                    <option value="home">Home Furnishing</option>
                    <option value="technical">Technical Textile</option>
                </select>
            </div>
            <textarea placeholder="Tell us about your design requirements and timeline." rows="4" required></textarea>
            <button type="submit" className="td-submit-button">Request Free Consultation</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default TextileDesign;
