import React from 'react';
import './Sustainability.css';

const Sustainability = () => {
  const pillars = [
    { 
      title: "Environmental Stewardship", 
      icon: "💧", 
      description: "Focusing on water conservation, reducing carbon emissions, and minimizing textile waste through advanced recycling programs." 
    },
    { 
      title: "Ethical Sourcing & Fair Labor", 
      icon: "🤝", 
      description: "Ensuring fair wages, safe working conditions, and zero tolerance for forced or child labor across our entire supply chain." 
    },
    { 
      title: "Product Innovation", 
      icon: "♻️", 
      description: "Prioritizing the development and use of recycled fibers, organic materials, and biodegradable finishes." 
    },
  ];

  const goals = [
    { target: "50% Water Reduction", metric: "By 2028, we aim to reduce water consumption per yard of fabric by 50% through closed-loop systems.", icon: "💦" },
    { target: "Carbon Neutral Operations", metric: "Achieve carbon neutrality in all production facilities by implementing renewable energy sources by 2030.", icon: "🌍" },
    { target: "100% Traceability", metric: "Ensure complete transparency from raw material cultivation to the finished textile by 2025.", icon: "🔍" },
  ];

  return (
    <div className="sustainability-page">
      <header className="sus-hero-section">
        <div className="sus-container">
          <h1>Committed to a Greener Future 🌿</h1>
          <p>
            Sustainability is at the core of our operations. We are dedicated to pioneering eco-friendly textile solutions and ensuring social responsibility.
          </p>
          <a href="#pillars" className="sus-cta-button">
            Explore Our Commitment ↓
          </a>
        </div>
      </header>

      <section id="pillars" className="sus-pillars-section">
        <div className="sus-container">
          <h2>Our Core Pillars of Sustainability</h2>
          <div className="sus-pillar-grid">
            {pillars.map((pillar, index) => (
              <div key={index} className="sus-pillar-card">
                <div className="sus-icon">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sus-goals-section">
        <div className="sus-container">
          <h2>Our 2030 Sustainability Goals</h2>
          <div className="sus-goals-grid">
            {goals.map((goal, index) => (
              <div key={index} className="sus-goal-item">
                <div className="sus-goal-header">
                    <span className="sus-goal-icon">{goal.icon}</span>
                    <h3 className="sus-goal-target">{goal.target}</h3>
                </div>
                <p className="sus-goal-metric">{goal.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sus-report-section">
        <div className="sus-container">
            <h2>Read Our Full Sustainability Report</h2>
            <p>
                Download our annual report for detailed metrics, audit results, and future plans. Transparency is our promise.
            </p>
            <a href="/download/sustainability-report-2024.pdf" target="_blank" className="sus-report-btn">
                Download Report (2024)
            </a>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
