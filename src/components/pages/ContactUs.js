// client/src/components/pages/ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        console.log('Form Data:', formData);
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitMessage('Thank you for your inquiry! Our textile experts will contact you within 24 hours.');
        setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    };

    const contactMethods = [
        {
            icon: '📧',
            title: 'Email Us',
            details: 'info@textileindustries.com',
            description: 'Send us your queries about fabrics and materials',
            link: 'mailto:info@textileindustries.com'
        },
        {
            icon: '📞',
            title: 'Call Us',
            details: '+880 1619 302150',
            description: 'Mon - Fri: 8:00 - 18:00',
            link: 'tel:+8801619302150'
        },
        {
            icon: '🏢',
            title: 'Visit Us',
            details: '123 Textile Avenue',
            description: 'Industrial Zone, Dhaka 1212, Bangladesh',
            link: '#'
        },
    ];

    return (
        <div className="contact-us-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero-content">
                        <h1>Let's Discuss Your Textile Needs</h1>
                        <p>Get expert consultation for fabric selection, bulk orders, and custom textile solutions. Our team is here to provide you with the perfect material solutions.</p>
                    </div>
                </div>
            </section>

            <div className="container">
                {/* Contact Methods Grid */}
                <div className="contact-methods-grid">
                    {contactMethods.map((method, index) => (
                        <a key={index} href={method.link} className="contact-method-card">
                            <div className="method-icon">{method.icon}</div>
                            <h3>{method.title}</h3>
                            <p className="method-details">{method.details}</p>
                            <p className="method-description">{method.description}</p>
                        </a>
                    ))}
                </div>

                <div className="contact-main-grid">
                    {/* Contact Form - Left Side */}
                    <div className="contact-form-section">
                        <div className="form-header">
                            <h2>Request a Quote</h2>
                            <p>Fill out the form below and our textile experts will contact you with customized solutions.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@company.com"
                                    />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your company name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Inquiry Type</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select inquiry type</option>
                                        <option value="fabric-sourcing">Fabric Sourcing</option>
                                        <option value="bulk-order">Bulk Order</option>
                                        <option value="custom-manufacturing">Custom Manufacturing</option>
                                        <option value="sample-request">Sample Request</option>
                                        <option value="technical-consultation">Technical Consultation</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Project Details *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Please describe your textile requirements, quantity needed, and any specific details..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="btn-spinner"></span>
                                        Processing Your Request...
                                    </>
                                ) : (
                                    'Get Custom Quote'
                                )}
                            </button>
                            
                            {submitMessage && (
                                <div className="submit-success-message">
                                    <span className="success-icon">✓</span>
                                    {submitMessage}
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Location Info - Right Side */}
                    <div className="location-info-section">
                        <div className="location-header">
                            <h2>Find Our Location</h2>
                        </div>
                        
                        <div className="map-container">
                            <div className="google-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.837240932881!2d90.4066593154315!3d23.78882679322387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c15be1f1b%3A0x7a9b9f7b8b4b4b4b!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0, borderRadius: '15px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Our Location on Google Maps"
                                ></iframe>
                            </div>
                            <div className="map-info">
                                <h3>Dhaka Headquarters</h3>
                                <p>123 Textile Avenue, Industrial Zone</p>
                                <p>Dhaka 1212, Bangladesh</p>
                                <a 
                                    href="https://maps.google.com/?q=123+Textile+Avenue,+Industrial+Zone,+Dhaka+1212,+Bangladesh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-btn"
                                >
                                    Open in Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;