import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function App() {
  const waUrl =
    "https://wa.me/918888678078?text=Hello%20PatelAirCondition,%20I%20want%20to%20book%20an%20AC%20service/repair.";

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />

      {/* Floating Action Buttons for Mobile / Desktop Quick Contact */}
      <div className="floating-action-group">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-wa"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <a
          href="tel:+918888678078"
          className="floating-btn floating-call"
          aria-label="Call Noman Patel"
          title="Call Now"
        >
          <FaPhoneAlt />
        </a>
      </div>
    </div>
  );
}

export default App;
