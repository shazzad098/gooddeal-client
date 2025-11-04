import React from 'react';
import './CustomPrinting.css';

const CustomPrinting = () => {
  const printingMethods = [
    {
      id: 1,
      name: "Digital Textile Printing (DTP)",
      description: "Ideal for complex, high-resolution designs and small to medium batches. Offers unlimited color options and rapid turnaround.",
      benefits: ["High Resolution", "Eco-Friendly Dyes", "Fast Production"],
      icon: "🖨️",
    },
    {
      id: 2,
      name: "Rotary Screen Printing",
      description: "Best suited for large volume orders and single or repetitive designs. Highly cost-effective for continuous patterns.",
      benefits: ["High Volume", "Durability", "Cost Effective"],
      icon: "🌀",
    },
    {
      id: 3,
      name: "Sublimation Printing",
      description: "Perfect for synthetic fabrics like polyester. Creates vibrant, permanent images that won't crack or fade. Used mainly for sportswear.",
      benefits: ["Vibrant Colors", "Permanent Print", "Breathable Fabric"],
      icon: "🔥",
    },
  ];

  return (
    <div className="custom-printing-page">
      <header className="cp-hero-section">
        <div className="cp-hero-content">
          <h1>Textile Printing Solutions 🎨</h1>
          <p>
            Bring your creative visions to life with our state-of-the-art **custom printing services**. Precision, vibrancy, and durability guaranteed.
          </p>
          <a href="#methods" className="cp-cta-button">
            View Printing Methods ↓
          </a>
        </div>
      </header>

      <section className="cp-design-form-section">
        <div className="cp-container">
          <h2>Start Your Design Project</h2>
          <form className="cp-design-form">
            <input type="text" placeholder="Your Name / Company Name" required />
            <input type="email" placeholder="Business Email" required />
            <select required>
              <option value="">Select Fabric Type</option>
              <option value="cotton">Cotton</option>
              <option value="silk">Silk</option>
              <option value="polyester">Polyester</option>
              <option value="blends">Blends</option>
            </select>
            <textarea placeholder="Describe your design and quantity needs (e.g., 500 meters, floral pattern, 4 colors)" rows="4" required></textarea>
            <div className="cp-file-upload">
                <label htmlFor="design-file">Upload Design File (PDF, AI, PSD)</label>
                <input type="file" id="design-file" accept=".pdf,.ai,.psd,.tiff" />
            </div>
            <button type="submit" className="cp-submit-button">Request a Quote</button>
          </form>
        </div>
      </section>

      <section id="methods" className="cp-methods-section">
        <div className="cp-container">
          <h2>Our Advanced Printing Technologies</h2>
          <div className="cp-methods-grid">
            {printingMethods.map((method) => (
              <div key={method.id} className="cp-method-card">
                <div className="cp-method-icon">{method.icon}</div>
                <h3>{method.name}</h3>
                <p>{method.description}</p>
                <ul className="cp-method-benefits">
                  {method.benefits.map((benefit, index) => (
                    <li key={index}>✓ {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FIX APPLIED HERE: OEKO-TEX is now plain text --- */}
      <section className="cp-qa-section">
        <div className="cp-container">
            <h2>Quality & Sustainability</h2>
            <p>We use **OEKO-TEX certified dyes** and employ strict wastewater treatment protocols, ensuring that your custom prints are not only stunning but also environmentally responsible.</p>
        </div>
      </section>
      {/* ---------------------------------------------------- */}
    </div>
  );
};

export default CustomPrinting;
