import React from 'react';
import './SampleRequests.css';

const SampleRequests = () => {
  const policyItems = [
    { title: "Standard Sample Size", detail: "All standard swatch samples are approximately 6in x 6in (15cm x 15cm).", icon: "📏" },
    { title: "Fee Structure", detail: "First 5 samples are free for registered business accounts. $5 USD per sample thereafter.", icon: "💵" },
    { title: "Shipping", detail: "Standard shipping (5-7 days) is free for orders over 3 samples. Express options are available at cost.", icon: "✈️" },
    { title: "Lead Time", detail: "Samples are dispatched within 48 hours of request submission.", icon: "⏱️" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission logic
    console.log("Sample request submitted.");
    // In a real application, you would send this data to a backend API
    alert("Thank you for your sample request! A confirmation email has been sent.");
  };

  const alert = (message) => {
    const customAlert = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    alertMessage.innerText = message;
    customAlert.style.display = 'flex';
    setTimeout(() => {
        customAlert.style.display = 'none';
    }, 5000);
  };

  return (
    <div className="sample-requests-page">
      <div id="custom-alert" className="sr-custom-alert">
        <div className="sr-alert-content">
          <span id="alert-message"></span>
          <button onClick={() => document.getElementById('custom-alert').style.display = 'none'}>&times;</button>
        </div>
      </div>

      <header className="sr-hero-section">
        <div className="sr-container">
          <h1>Request Fabric Samples 📋</h1>
          <p>
            Feel the quality and confirm specifications before placing a bulk order. Use the form below to select your desired fabrics.
          </p>
          <a href="#request-form" className="sr-cta-button">
            Go to Request Form ↓
          </a>
        </div>
      </header>

      <section className="sr-policy-section">
        <div className="sr-container">
          <h2>Sample Policy Highlights</h2>
          <div className="sr-policy-grid">
            {policyItems.map((item, index) => (
              <div key={index} className="sr-policy-card">
                <div className="sr-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="request-form" className="sr-form-section">
        <div className="sr-container">
          <h2>Your Sample Request</h2>
          <form className="sr-request-form" onSubmit={handleSubmit}>
            <p className="sr-form-instructions">
                Please enter the **Product SKU or Fabric Type** and the **Quantity** (max 10 pieces per request) for each sample needed.
            </p>
            
            {/* Contact Info */}
            <fieldset className="sr-fieldset">
                <legend>Contact Information</legend>
                <input type="text" placeholder="Your Full Name" required />
                <input type="text" placeholder="Company Name" required />
                <input type="email" placeholder="Business Email" required />
                <input type="tel" placeholder="Shipping Phone Number" required />
            </fieldset>

            {/* Sample List - Mockup for 3 samples */}
            <fieldset className="sr-fieldset">
                <legend>Sample Details (Max 10)</legend>
                <div className="sr-sample-input-group">
                    <input type="text" placeholder="SKU / Fabric Name (e.g., Organic Cotton T300)" required />
                    <input type="number" placeholder="Qty (Max 3/SKU)" min="1" max="3" defaultValue="1" required />
                </div>
                <div className="sr-sample-input-group">
                    <input type="text" placeholder="SKU / Fabric Name (e.g., Silk Charmeuse Black)" />
                    <input type="number" placeholder="Qty (Max 3/SKU)" min="1" max="3" />
                </div>
                <div className="sr-sample-input-group">
                    <input type="text" placeholder="SKU / Fabric Name (e.g., Recycled Polyester Dobby)" />
                    <input type="number" placeholder="Qty (Max 3/SKU)" min="1" max="3" />
                </div>
                <button type="button" className="sr-add-sample-btn" onClick={() => alert("Max 3 sample fields shown here. In production, this button would dynamically add more fields.")}>+ Add Another Sample</button>
            </fieldset>

            {/* Shipping Address */}
            <fieldset className="sr-fieldset">
                <legend>Shipping Address</legend>
                <input type="text" placeholder="Street Address" required />
                <div className="sr-address-group">
                    <input type="text" placeholder="City" required />
                    <input type="text" placeholder="State/Province" required />
                    <input type="text" placeholder="Zip/Postal Code" required />
                    <input type="text" placeholder="Country" required />
                </div>
            </fieldset>

            <button type="submit" className="sr-submit-button">Submit Request</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SampleRequests;
