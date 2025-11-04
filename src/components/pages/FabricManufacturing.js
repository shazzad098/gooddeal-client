import React from 'react';
import './FabricManufacturing.css';

const FabricManufacturing = () => {
  return (
    <div className="fabric-manufacturing-page">
      <header className="fm-hero-section">
        <div className="fm-hero-content">
          <h1>Fabric Manufacturing Excellence 🏭</h1>
          <p>
            From raw fiber to finished fabric, our state-of-the-art facilities ensure **premium quality** and efficiency in every thread.
          </p>
          <a href="#process" className="fm-cta-button">
            Explore Our Process →
          </a>
        </div>
      </header>

      <section id="process" className="fm-process-section">
        <h2>Our End-to-End Manufacturing Process</h2>
        <div className="fm-process-grid">
          <div className="fm-step">
            <h3>1. Fiber Sourcing & Preparation</h3>
            <p>
              We source high-quality **sustainable fibers** and prepare them for spinning or direct processing, ensuring material integrity.
            </p>
          </div>
          <div className="fm-step">
            <h3>2. Spinning & Yarn Production</h3>
            <p>
              Advanced spinning techniques create yarns of desired count, strength, and twist, forming the **foundation** of our fabric.
            </p>
          </div>
          <div className="fm-step">
            <h3>3. Weaving / Knitting</h3>
            <p>
              Utilizing high-speed looms and knitting machines to create various fabric structures: **Woven (denim, twill) or Knitted (jersey, fleece)**.
            </p>
          </div>
          <div className="fm-step">
            <h3>4. Dyeing & Finishing</h3>
            <p>
              Eco-friendly dyeing methods for vibrant, lasting colors. Finishing processes like mercerizing and coating for desired **texture and performance**.
            </p>
          </div>
          <div className="fm-step">
            <h3>5. Quality Assurance</h3>
            <p>
              Strict QC checks at every stage, including tensile strength, color fastness, and defect inspection, guaranteeing the final **product standard**.
            </p>
          </div>
        </div>
      </section>

      <section className="fm-gallery-section">
        <h2>Our Machinery & Facilities</h2>
        <div className="fm-gallery-grid">
          <img src="spinning-machines.jpg" alt="Modern Spinning Machines" className="fm-gallery-item" />
          <img src="weaving-looms.jpg" alt="High-Speed Weaving Looms" className="fm-gallery-item" />
          <img src="dyeing-plant.jpg" alt="Automated Dyeing Plant" className="fm-gallery-item" />
        </div>
        <p className="fm-note">
          **Note:** *Image source paths (like spinning-machines.jpg) are placeholders.*
        </p>
      </section>
      
      <section className="fm-benefits-section">
        <h2>Why Choose Our Manufacturing?</h2>
        <ul>
          <li>**Capacity:** High-volume production capabilities to meet global demand.</li>
          <li>**Sustainability:** Focus on water-saving and non-toxic chemical use.</li>
          {/* <li>**Innovation:** Continuous investment in $\text{R\&D}$ for new fabric types.</li> */}
        </ul>
      </section>
    </div>
  );
};

export default FabricManufacturing;