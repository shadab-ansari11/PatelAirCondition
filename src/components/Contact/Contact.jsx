import React, { useState } from 'react';
import './Contact.css';
import techWatermark from '../../assets/contact-tech-watermark.png';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaUser,
  FaPaperPlane,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container contact-container">
        {/* Left Column: Contact Info Cards with Noman Patel & Muzammil Ahmad */}
        <div className="contact-left">
          <span className="section-badge">CONTACT US</span>
          <h2 className="contact-heading">
            We're Here to Help <span className="text-highlight-blue">You</span>
          </h2>

          <div className="contact-cards-grid">
            {/* Call Noman Patel */}
            <a href="tel:+918888678078" className="contact-item-card">
              <div className="contact-icon-wrapper">
                <FaPhoneAlt />
              </div>
              <div className="contact-detail-text">
                <span className="contact-type-title">Noman Patel</span>
                <span className="contact-type-val">+91 88886 78078</span>
              </div>
            </a>

            {/* Call Muzammil Ahmad */}
            <a href="tel:+917304077952" className="contact-item-card">
              <div className="contact-icon-wrapper">
                <FaPhoneAlt />
              </div>
              <div className="contact-detail-text">
                <span className="contact-type-title">Muzammil Ahmad</span>
                <span className="contact-type-val">+91 73040 77952</span>
              </div>
            </a>

            {/* Email Us */}
            <a href="mailto:info@patelaircondition.com" className="contact-item-card">
              <div className="contact-icon-wrapper">
                <FaEnvelope />
              </div>
              <div className="contact-detail-text">
                <span className="contact-type-title">Email Us</span>
                <span className="contact-type-val">info@patelaircondition.com</span>
              </div>
            </a>

            {/* Location */}
            <div className="contact-item-card">
              <div className="contact-icon-wrapper">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-detail-text">
                <span className="contact-type-title">Service Areas</span>
                <span className="contact-type-val">
                  Nagpur, Kamptee &amp; Kanhan (Doorstep Service)
                </span>
              </div>
            </div>

            {/* Working Hours */}
            <div className="contact-item-card full-span-card">
              <div className="contact-icon-wrapper">
                <FaClock />
              </div>
              <div className="contact-detail-text">
                <span className="contact-type-title">Working Hours</span>
                <span className="contact-type-val">Mon - Sun: 8:00 AM - 9:00 PM (Emergency Service Available)</span>
              </div>
            </div>
          </div>

          <div className="contact-cta-wrap">
            <a href="#contact-form" className="btn-primary-blue btn-contact-msg">
              <span>Send Message</span>
              <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Right Column: Form Card with Technician Watermark */}
        <div className="contact-right" id="contact-form">
          <div className="booking-card-wrapper">
            {submitted ? (
              <div className="form-success-box">
                <FaCheckCircle className="form-success-icon" />
                <h3>Thank You!</h3>
                <p>We have received your service request. Our technician will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-booking-form">
                <div className="form-two-cols">
                  <div className="form-field-group">
                    <div className="input-with-icon">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="form-control"
                      />
                      <FaUser className="inner-icon" />
                    </div>
                  </div>

                  <div className="form-field-group">
                    <div className="input-with-icon">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone (e.g. 8888678078)"
                        required
                        className="form-control"
                      />
                      <FaPhoneAlt className="inner-icon" />
                    </div>
                  </div>
                </div>

                <div className="form-two-cols">
                  <div className="form-field-group">
                    <div className="input-with-icon">
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Location / Area (e.g. Kamptee, Kanhan, Nagpur)"
                        className="form-control"
                      />
                      <FaMapMarkerAlt className="inner-icon" />
                    </div>
                  </div>

                  <div className="form-field-group">
                    <div className="select-with-icon">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-control form-select-ctrl"
                      >
                        <option value="">Select Required Service</option>
                        <option value="AC Repair">AC Repair &amp; Jet Service</option>
                        <option value="AC Installation">AC Installation &amp; Uninstallation</option>
                        <option value="AC Gas Filling">AC Gas Filling / Leak Check</option>
                        <option value="Underground Copper Piping">Underground Copper Piping</option>
                        <option value="Washing Machine Repair">Washing Machine Repair</option>
                        <option value="Refrigerator Repair">Refrigerator / Fridge Repair</option>
                        <option value="AC AMC">AC Annual Maintenance (AMC)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-field-group full-width">
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="form-control form-textarea-ctrl"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary-blue btn-form-send">
                  <span>Send Message</span>
                  <FaPaperPlane className="paper-plane-icon" />
                </button>
              </form>
            )}

            {/* Technician Watermark on Right Edge */}
            <img
              src={techWatermark}
              alt=""
              className="form-tech-watermark"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
