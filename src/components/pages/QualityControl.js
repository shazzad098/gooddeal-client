import React from 'react';
import './QualityControl.css';

const QualityControl = () => {
  const qcSteps = [
    {
      step: "Raw Material Inspection (RMI)",
      details: "Checking fiber quality, yarn count, and chemical composition before manufacturing begins to prevent fundamental defects.",
      icon: "🔬",
    },
    {
      step: "In-Process Quality Control (IPQC)",
      details: "Continuous monitoring during spinning, weaving, and printing. Includes machine checks, tension tests, and initial defect scouting.",
      icon: "⚙️",
    },
    {
      step: "Final Fabric Inspection (FFI)",
      details: "Comprehensive 4-point system check on finished goods for defects, color shade matching, shrinkage, and GSM consistency.",
      icon: "✅",
    },
    {
      step: "Pre-Shipment Audit (PSA)",
      details: "A final random check on packaging, labeling, and documentation to ensure compliance with international shipping standards and client requirements.",
      icon: "📦",
    },
  ];

  return (
    <div className="quality-control-page">
      <header className="qc-hero-section">
        <div className="qc-hero-content">
          <h1>Rigorous Quality Control Standards 🛡️</h1>
          <p>
            Our commitment to quality is woven into every fabric. We ensure zero defects and adherence to global textile standards through **multi-stage inspection protocols**.
          </p>
          <a href="#process" className="qc-cta-button">
            View Our 4-Point System ↓
          </a>
        </div>
      </header>

      <section id="process" className="qc-process-section">
        <div className="qc-container">
          <h2>Our Four Pillars of Quality Assurance</h2>
          <div className="qc-process-grid">
            {qcSteps.map((item, index) => (
              <div key={index} className="qc-step-card">
                <div className="qc-step-icon">{item.icon}</div>
                <h3>{item.step}</h3>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="qc-certification-section">
        <div className="qc-container">
          <h2>International Certifications & Compliance</h2>
          <div className="qc-cert-list">
            <div className="qc-cert-item">
                <span className="qc-cert-name">ISO 9001:2015</span>
                <p>Certified for quality management system consistency and continual improvement.</p>
            </div>
            <div className="qc-cert-item">
                <span className="qc-cert-name">OEKO-TEX Standard 100</span>
                <p>Ensuring our fabrics are free from harmful substances, making them safe for human use.</p>
            </div>
            <div className="qc-cert-item">
                <span className="qc-cert-name">BCI (Better Cotton Initiative)</span>
                <p>Commitment to sustainable cotton farming practices, minimizing environmental impact.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="qc-contact-section">
        <div className="qc-container">
            <h2>Need Specific Testing Reports?</h2>
            <p>We provide comprehensive testing documentation for every bulk order. Contact our QC department directly.</p>
            <a href="/contact" className="qc-contact-button">Contact Quality Team</a>
        </div>
      </section>
    </div>
  );
};

export default QualityControl;
