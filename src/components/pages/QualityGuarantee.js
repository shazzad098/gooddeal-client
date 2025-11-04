import React from 'react';
import './QualityGuarantee.css';

const QualityGuarantee = () => {
  const guaranteePillars = [
    {
      icon: "🧵",
      title: "Material Integrity",
      description: "We guarantee the composition and sourcing of all raw materials are 100% accurate to the stated specifications (e.g., fiber type, blend ratio, organic certification).",
    },
    {
      icon: "🔬",
      title: "Testing & Compliance",
      description: "All products undergo rigorous AQL and 4-point system checks. We guarantee compliance with international standards like ISO and OEKO-TEX 100.",
    },
    {
      icon: "🎨",
      title: "Color Fastness & Consistency",
      description: "We guarantee superior color retention, wash after wash. Bulk orders match the approved Sample (PPS) color tolerance, grade 4 or higher.",
    },
    {
      icon: "⚙️",
      title: "Manufacturing Precision",
      description: "We guarantee that weight (GSM), weave/knit structure, and dimensional stability (shrinkage) meet the agreed-upon technical specifications.",
    },
  ];

  return (
    <div className="quality-guarantee-page">
      <header className="qg-hero-section">
        <div className="qg-container">
          <h1>Our Ironclad Quality Guarantee 💯</h1>
          <p>
            Your trust is our foundation. We stand by the quality of every yard of fabric produced, ensuring **reliability, consistency, and compliance** with global textile benchmarks.
          </p>
          <a href="#guarantee-details" className="qg-cta-button">
            See Guarantee Details ↓
          </a>
        </div>
      </header>

      <section id="guarantee-details" className="qg-pillars-section">
        <div className="qg-container">
          <h2>The Four Pillars of Our Guarantee</h2>
          <div className="qg-pillars-grid">
            {guaranteePillars.map((pillar, index) => (
              <div key={index} className="qg-pillar-card">
                <div className="qg-icon">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="qg-assurance-section">
        <div className="qg-container">
          <h2>Our Commitment to You</h2>
          <div className="qg-commitment-box">
            <p>
              If a bulk order is found to have defects exceeding the agreed-upon AQL (Acceptable Quality Limit) standard upon delivery, we commit to **immediate replacement** or providing a **full credit** for the defective goods. Claims must be raised within 30 days of receipt.
            </p>
            <div className="qg-buttons">
                <a href="/technical-support" className="qg-secondary-button">Submit a Quality Claim</a>
                <a href="/contact" className="qg-primary-button">Speak to a Quality Specialist</a>
            </div>
          </div>
        </div>
      </section>

      <section className="qg-faq-section">
        <div className="qg-container">
          <h2>FAQs on Guarantee</h2>
          <div className="qg-faq-item">
            <h4>Does the guarantee cover normal wear and tear?</h4>
            <p>No, our guarantee covers manufacturing defects, material faults, and non-compliance with confirmed specifications, not damage resulting from misuse or normal wear and tear.</p>
          </div>
          <div className="qg-faq-item">
            <h4>What is the AQL standard you follow?</h4>
            <p>We typically follow AQL 2.5 (Acceptable Quality Limit) for bulk fabric inspection, ensuring a minimal level of defects in the shipment batch.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityGuarantee;
