import React from 'react';
import './QualityStandards.css';

const QualityStandards = () => {
  const certifications = [
    { name: "ISO 9001:2015", icon: "✅", description: "Certified for Quality Management Systems, ensuring consistent, high-quality products and services." },
    { name: "OEKO-TEX Standard 100", icon: "🌿", description: "Guarantees that every component of the textile product is harmless to human health." },
    { name: "GOTS (Global Organic Textile Standard)", icon: "🌱", description: "Ensures the organic status of textiles from harvesting of the raw materials through environmentally and socially responsible manufacturing." },
    { name: "AQL 2.5 Compliance", icon: "📊", description: "All shipments are inspected to Acceptable Quality Limit (AQL) standards, guaranteeing low defect rates." },
  ];

  const testingProtocols = [
    "Tensile and Tear Strength Testing",
    "Color Fastness to Washing, Rubbing, and Light",
    "Dimensional Stability (Shrinkage) Analysis",
    "Fabric Hand and Drape Evaluation",
    "pH and Chemical Residue Testing",
  ];

  return (
    <div className="quality-standards-page">
      <header className="qs-hero-section">
        <div className="qs-container">
          <h1>Our Quality Standards & Certifications 🏆</h1>
          <p>
            We adhere to the highest global standards in textile manufacturing, backed by rigorous testing and internationally recognized certifications.
          </p>
          <a href="#certifications" className="qs-cta-button">
            View Certifications ↓
          </a>
        </div>
      </header>

      <section id="certifications" className="qs-certifications-section">
        <div className="qs-container">
          <h2>International Certifications</h2>
          <div className="qs-cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="qs-cert-card">
                <div className="qs-icon">{cert.icon}</div>
                <h3>{cert.name}</h3>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="qs-protocols-section">
        <div className="qs-container">
          <h2>In-House Testing Protocols</h2>
          <p className="qs-intro-text">
            Every fabric batch undergoes a comprehensive series of laboratory tests to ensure it meets both our internal benchmarks and the client's specifications.
          </p>
          <div className="qs-protocols-list">
            <ul>
              {testingProtocols.map((protocol, index) => (
                <li key={index}>
                  <span className="qs-check-icon">✓</span> {protocol}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="qs-download-section">
        <div className="qs-container">
            <h2>Documentation & Transparency</h2>
            <p>
                Download our Quality Management Manual and official certificates for your compliance records.
            </p>
            <div className="qs-download-links">
                <a href="/download/quality-manual.pdf" target="_blank" className="qs-download-btn">
                    Quality Management Manual (PDF)
                </a>
                <a href="/download/oekotex-certificate.pdf" target="_blank" className="qs-download-btn qs-secondary-btn">
                    View OEKO-TEX Certificate
                </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default QualityStandards;
