import React from 'react';
import './BulkOrders.css';

const BulkOrders = () => {
  const bulkBenefits = [
    { title: "Volume Discounts", detail: "Enjoy highly competitive pricing structures for large-scale production runs.", icon: "💰" },
    { title: "Dedicated Account Manager", detail: "Get personalized support and streamlined communication from a dedicated specialist.", icon: "🤵" },
    { title: "Priority Production Slot", detail: "Your order receives priority allocation in our manufacturing pipeline for faster delivery.", icon: "⏱️" },
    { title: "Customized Logistics", detail: "We manage freight, customs, and delivery tailored to your global supply chain needs.", icon: "🚢" },
  ];

  const orderProcess = [
    { step: 1, name: "Inquiry & Quotation", detail: "Submit your requirements (fabric, quantity, specifications) for a detailed quote." },
    { step: 2, name: "Sample Approval", detail: "We produce pre-production samples for your final quality and design confirmation." },
    { step: 3, name: "Contract & Scheduling", detail: "Upon approval, we finalize the contract and allocate a dedicated production slot." },
    { step: 4, name: "Manufacturing & QC", detail: "High-speed production with continuous quality control checks (4-Point system)." },
    { step: 5, name: "Shipping & Delivery", detail: "Goods are packaged, audited, and shipped via your preferred logistics route." },
  ];

  return (
    <div className="bulk-orders-page">
      <header className="bo-hero-section">
        <div className="bo-container">
          <h1>Global Bulk Order Solutions 🌍</h1>
          <p>
            Scale your business effortlessly with our **large-volume production capability** and guaranteed consistent quality. Minimum order quantity (MOQ) applies.
          </p>
          <a href="#inquiry" className="bo-cta-button">
            Start Your Bulk Inquiry →
          </a>
        </div>
      </header>

      <section className="bo-benefits-section">
        <div className="bo-container">
          <h2>Why Choose Us for Bulk?</h2>
          <div className="bo-benefits-grid">
            {bulkBenefits.map((item, index) => (
              <div key={index} className="bo-benefit-card">
                <div className="bo-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bo-process-section">
        <div className="bo-container">
          <h2>Our 5-Step Bulk Order Process</h2>
          <div className="bo-process-timeline">
            {orderProcess.map((item, index) => (
              <div key={index} className="bo-process-step">
                <div className="bo-step-number">
                    {item.step}
                </div>
                <div className="bo-step-content">
                  <h4>{item.name}</h4>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="bo-inquiry-section">
        <div className="bo-container">
          <h2>Request a Bulk Quote</h2>
          <p className="bo-inquiry-subtext">Fill out the form below and a sales representative will contact you within 24 hours.</p>
          <form className="bo-inquiry-form">
            <div className="bo-form-group">
              <input type="text" placeholder="Your Name" required />
              <input type="text" placeholder="Company Name" required />
            </div>
            <div className="bo-form-group">
              <input type="email" placeholder="Business Email" required />
              <input type="tel" placeholder="Phone Number" />
            </div>
            <select required>
              <option value="">Target Fabric Category</option>
              <option value="cotton">Cotton & Blends</option>
              <option value="silk">Silk & Luxury</option>
              <option value="synthetic">Synthetic (Nylon/Poly)</option>
            </select>
            <textarea placeholder="Desired Quantity (e.g., 10,000 yards) and brief specifications." rows="4" required></textarea>
            <button type="submit" className="bo-submit-button">Submit Inquiry</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BulkOrders;
