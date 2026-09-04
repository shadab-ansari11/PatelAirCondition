import React from 'react';
import './WhyChooseUs.css';
import {
  FaUserGear,
  FaThumbsUp,
  FaIndianRupeeSign,
  FaClockRotateLeft,
  FaGears,
  FaShieldHeart
} from 'react-icons/fa6';

const featuresData = [
  {
    id: 1,
    title: 'Expert Technicians',
    desc: 'Skilled & certified professionals for best service.',
    icon: <FaUserGear />
  },
  {
    id: 2,
    title: 'Quality Service',
    desc: 'We ensure 100% quality service every time.',
    icon: <FaThumbsUp />
  },
  {
    id: 3,
    title: 'Affordable Pricing',
    desc: 'Best services at competitive & transparent prices.',
    icon: <FaIndianRupeeSign />
  },
  {
    id: 4,
    title: 'Quick Response',
    desc: 'We reach you faster with quick response & support.',
    icon: <FaClockRotateLeft />
  },
  {
    id: 5,
    title: 'Genuine Parts',
    desc: 'We use only genuine parts for long lasting performance.',
    icon: <FaGears />
  },
  {
    id: 6,
    title: 'Satisfaction Guaranteed',
    desc: 'Your satisfaction is our top priority.',
    icon: <FaShieldHeart />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-section section-padding" id="why-us">
      <div className="container">
        {/* Centered Header */}
        <div className="why-header-center">
          <span className="section-badge">WHY CHOOSE US</span>
          <h2 className="why-main-title">Quality Service You Can Trust</h2>
        </div>

        {/* 6 Features Grid */}
        <div className="why-cards-grid">
          {featuresData.map((item) => (
            <div key={item.id} className="why-card-item">
              <div className="why-icon-box">
                {item.icon}
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
