import React from 'react';
import './WashingMachine.css';
import wmImg from '../../assets/washing-machine-service.jpg';
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaTools,
  FaClock,
  FaCertificate,
  FaMoneyBillWave
} from 'react-icons/fa';
import {
  FaRotate,
  FaFaucetDrip,
  FaMicrochip,
  FaShieldHalved
} from 'react-icons/fa6';

const WashingMachine = () => {
  const waUrl =
    'https://wa.me/918888678078?text=Hello%20PatelAirCondition,%20I%20need%20Washing%20Machine%20Repair/Service.';

  const commonIssues = [
    {
      icon: <FaRotate />,
      title: 'Drum & Spin Issues',
      desc: 'Fixing drum not rotating, loud sound, bearing damage & high vibration during spin cycle.'
    },
    {
      icon: <FaFaucetDrip />,
      title: 'Drainage & Water Leak',
      desc: 'Drain pump repair, water inlet valve unclogging, and door rubber gasket replacement.'
    },
    {
      icon: <FaMicrochip />,
      title: 'PCB Board & Motor Fix',
      desc: 'Repairs for electronic control boards, inverter motor faults, wiring issues & dead power supply.'
    },
    {
      icon: <FaShieldHalved />,
      title: 'Error Codes & Sensors',
      desc: 'Accurate diagnosis for all digital error codes (dE, OE, IE, UE), door locks & water sensors.'
    }
  ];

  const benefits = [
    { icon: <FaClock />, label: '60-90 Min Fast Doorstep Service' },
    { icon: <FaCertificate />, label: '100% Genuine Spare Parts' },
    { icon: <FaTools />, label: 'All Brands (LG, Samsung, Bosch, IFB, Whirlpool)' },
    { icon: <FaMoneyBillWave />, label: 'Affordable & Transparent Inspection Cost' }
  ];

  const typesList = [
    'Front Load Washing Machines',
    'Top Load Washing Machines',
    'Fully Automatic Machines',
    'Semi-Automatic Washing Machines'
  ];

  return (
    <section className="wm-section section-padding" id="washing-machine">
      <div className="container">
        {/* Header */}
        <div className="wm-header-center">
          <span className="section-badge">HOME APPLIANCE CARE</span>
          <h2 className="wm-main-title">
            Washing Machine Repair &amp; Maintenance Services
          </h2>
          <div className="title-underline-accent"></div>
          <p className="wm-subtitle">
            Reliable doorstep washing machine diagnosis &amp; repair for Front Load, Top Load &amp; Semi-Automatic models across all major brands.
          </p>
        </div>

        {/* Main Content Showcase */}
        <div className="wm-main-grid">
          {/* Left Text & Details */}
          <div className="wm-left-col">
            <span className="wm-sub-badge">ALL BRANDS REPAIR</span>
            <h3 className="wm-content-title">
              Fast, Expert Washing Machine Repair at Your Doorstep
            </h3>
            <p className="wm-content-desc">
              Is your washing machine vibrating loudly, not draining water, or displaying an error code? Our certified technicians diagnose and fix all mechanical and electrical issues on the spot using authentic company spare parts.
            </p>

            <div className="wm-types-pills">
              {typesList.map((type, index) => (
                <div key={index} className="wm-type-pill">
                  <FaCheckCircle className="pill-check" />
                  <span>{type}</span>
                </div>
              ))}
            </div>

            {/* Quick Badges */}
            <div className="wm-benefits-grid">
              {benefits.map((b, idx) => (
                <div key={idx} className="wm-benefit-item">
                  <div className="benefit-icon">{b.icon}</div>
                  <span className="benefit-text">{b.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="wm-cta-group">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-blue wm-wa-btn"
              >
                <FaWhatsapp /> Book Washing Machine Repair
              </a>
              <a href="tel:+918888678078" className="btn-outline-blue">
                <FaPhoneAlt /> Call: +91 88886 78078
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="wm-right-col">
            <div className="wm-image-card">
              <img
                src={wmImg}
                alt="Washing Machine Repair Technician"
                className="wm-card-img"
              />
              <div className="wm-service-stamp">
                <span className="stamp-title">Doorstep Service</span>
                <span className="stamp-sub">Same Day Quick Fix</span>
              </div>
            </div>
          </div>
        </div>

        {/* Common Issues 4-Grid Cards */}
        <div className="wm-issues-grid">
          {commonIssues.map((issue, idx) => (
            <div key={idx} className="wm-issue-card">
              <div className="issue-icon-wrap">{issue.icon}</div>
              <h4 className="issue-card-title">{issue.title}</h4>
              <p className="issue-card-desc">{issue.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WashingMachine;
