import React from 'react';
import './Refrigerator.css';
import fridgeImg from '../../assets/refrigerator-service.jpg';
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaSnowflake,
  FaWrench,
  FaShieldAlt,
  FaBolt
} from 'react-icons/fa';
import {
  FaTemperatureArrowDown,
  FaGasPump,
  FaFan,
  FaScrewdriverWrench
} from 'react-icons/fa6';

const Refrigerator = () => {
  const waUrl =
    'https://wa.me/918888678078?text=Hello%20PatelAirCondition,%20I%20need%20Refrigerator/Fridge%20Repair%20service.';

  const fridgeServices = [
    {
      icon: <FaTemperatureArrowDown />,
      title: 'Low / No Cooling Fix',
      desc: 'Rapid diagnosis and repair for cooling loss in freezer or fresh food compartments.'
    },
    {
      icon: <FaGasPump />,
      title: 'Fridge Gas Refilling',
      desc: 'Safe & eco-friendly R134a / R600a refrigerant gas charging with full leak testing.'
    },
    {
      icon: <FaBolt />,
      title: 'Compressor & Inverter Repair',
      desc: 'Genuine compressor replacement, relay starter, overload protector and PCB fixes.'
    },
    {
      icon: <FaFan />,
      title: 'Defrost & Fan Motor Repair',
      desc: 'Fixing ice accumulation, defrost heater problems, evaporator fan & thermostat sensor.'
    }
  ];

  const fridgeTypes = [
    'Single Door Refrigerators',
    'Double Door Frost-Free',
    'Side-by-Side & Multi-Door',
    'Inverter Tech Refrigerators',
    'Commercial Deep Freezers'
  ];

  const highlights = [
    'Fast Doorstep Arrival within 60 Mins',
    'Certified Technicians for Samsung, LG, Whirlpool, Haier, Godrej, Bosch',
    '100% Genuine Compressors & Spare Parts',
    '90 Days Warranty on Parts & Service'
  ];

  return (
    <section className="fridge-section section-padding" id="refrigerator">
      <div className="container">
        {/* Header */}
        <div className="fridge-header-center">
          <span className="section-badge">COOLING EXPERTS</span>
          <h2 className="fridge-main-title">
            Refrigerator &amp; Deep Freezer Repair Services
          </h2>
          <div className="title-underline-accent"></div>
          <p className="fridge-subtitle">
            Keep your food fresh with fast, dependable fridge repair, genuine gas refilling, and compressor replacement at your doorstep.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="fridge-grid">
          {/* Left: Image with Quality Badge */}
          <div className="fridge-image-col">
            <div className="fridge-image-wrapper">
              <img
                src={fridgeImg}
                alt="Refrigerator Repair Specialist"
                className="fridge-main-img"
              />
              <div className="fridge-floating-badge">
                <FaSnowflake className="fridge-badge-icon" />
                <div>
                  <strong>Instant Cooling Fix</strong>
                  <span>Same-Day Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content & Checklist */}
          <div className="fridge-content-col">
            <h3 className="fridge-content-title">
              Complete Fridge Care for Single, Double &amp; Multi-Door Models
            </h3>
            <p className="fridge-content-desc">
              Whether your refrigerator has stopped cooling, making abnormal humming sounds, or has gas leakage, <strong>PatelAirCondition</strong> delivers reliable doorstep repair with certified technicians and authentic parts.
            </p>

            {/* Types Tags */}
            <div className="fridge-types-wrap">
              {fridgeTypes.map((type, idx) => (
                <span key={idx} className="fridge-type-tag">
                  <FaCheckCircle className="fridge-tag-check" />
                  {type}
                </span>
              ))}
            </div>

            {/* Checklist */}
            <ul className="fridge-checklist">
              {highlights.map((item, idx) => (
                <li key={idx} className="fridge-check-item">
                  <FaCheckCircle className="fridge-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="fridge-cta-group">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-blue fridge-wa-btn"
              >
                <FaWhatsapp /> Book Refrigerator Service
              </a>
              <a href="tel:+918888678078" className="btn-outline-blue">
                <FaPhoneAlt /> Call: +91 88886 78078
              </a>
            </div>
          </div>
        </div>

        {/* 4 Feature Service Cards */}
        <div className="fridge-services-grid">
          {fridgeServices.map((service, idx) => (
            <div key={idx} className="fridge-service-card">
              <div className="fridge-service-icon">{service.icon}</div>
              <h4 className="fridge-service-title">{service.title}</h4>
              <p className="fridge-service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Refrigerator;
