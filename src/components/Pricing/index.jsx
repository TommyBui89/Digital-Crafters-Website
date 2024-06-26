import React, { useEffect, useRef, useState } from 'react';
import ConsultationModal from '../ConsultationModal/ConsultationModal';
import './Pricing.css'; 

const tabs = [
  { name: "Web Development" },
  { name: "App Development" },
  { name: "Software Development" },
  { name: "Chatbox Development" },
];

const pricingData = [
  {
    category: "Web Development",
    title: "Basic Web Development",
    price: "Starting from $1000",
    description: "Developing high-quality, responsive websites tailored to meet your specific business needs and goals. Basic package includes websites made with WordPress, booking websites, and more.",
    features: ["Responsive Design", "SEO Friendly", "Easy to Manage"],
  },
  {
    category: "Web Development",
    title: "Premium Web Development",
    price: "Starting from $2500",
    description: "Developing high-quality, responsive websites tailored to meet your specific business needs and goals. Premium package includes websites made with WordPress or React, e-commerce websites, and more.",
    features: ["Advanced Customization", "E-commerce Integration", "Priority Support", "Regular Updates"],
  },
  {
    category: "App Development",
    title: "Basic App Development",
    price: "Starting from $1500",
    description: "Building mobile applications that offer a seamless user experience across all devices. Basic package includes apps made with Flutter.",
    features: ["Cross-Platform Compatibility", "User-Friendly Interface", "Performance Optimization"],
  },
  {
    category: "App Development",
    title: "Premium App Development",
    price: "Starting from $2500",
    description: "Building mobile applications that offer a seamless user experience across all devices. Premium package includes apps made with Flutter and advanced features.",
    features: ["Enhanced Security", "Custom Features", "Premium Support", "Future Updates"],
  },
  {
    category: "Software Development",
    title: "Basic Software Development",
    price: "Starting from $1500",
    description: "Creating custom software solutions to streamline your business operations and enhance efficiency. Basic package includes software made with React, JavaScript, and Python.",
    features: ["Scalable Solutions", "Efficient Workflows", "User-Friendly Interface"],
  },
  {
    category: "Software Development",
    title: "Premium Software Development",
    price: "Starting from $2500",
    description: "Creating custom software solutions to streamline your business operations and enhance efficiency. Premium package includes software made with React, JavaScript, and Python with advanced features.",
    features: ["Enterprise-Grade Security", "Custom Integrations", "Premium Support", "Regular Maintenance"],
  },
  {
    category: "Chatbox Development",
    title: "Basic Chatbox Development",
    price: "Starting from $500",
    description: "Developing chatbots that provide excellent user interaction and support for your business. Basic package includes chatbots made with Botpress and integrated with WordPress or React.",
    features: ["Basic Chatbot Functionality", "User-Friendly Interface", "Easy Integration"],
  },
  {
    category: "Chatbox Development",
    title: "Premium Chatbox Development",
    price: "Starting from $1000",
    description: "Developing chatbots that provide excellent user interaction and support for your business. Premium package includes chatbots made with Botpress and integrated with WordPress or React with advanced features.",
    features: ["Advanced AI Capabilities", "Custom Integrations", "Priority Support", "Regular Updates"],
  },
];

const Pricing = () => {
  const [displayablePricing, setDisplayablePricing] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const itemsEls = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const prevEl = itemsEls.current.filter((_, index) => index < activeIndex);
    const newOffset = prevEl.reduce((acc, el) => acc + el.offsetWidth, 0);
    setOffset(newOffset);
    setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth);
  }, [activeIndex]);

  useEffect(() => {
    setPricing(tabs[0].name);
  }, []);

  const setPricing = (category) => {
    const filteredPricing = pricingData.filter((item) => item.category === category);
    setDisplayablePricing(filteredPricing);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="pricing-section" id="pricing">
      <h1 className="primary__title">Pricing</h1>
      <p className="text__muted description">Choose from our affordable packages</p>
      <nav className="pricing-nav">
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={el => itemsEls.current[index] = el}
            onClick={() => {
              setActiveIndex(index);
              setPricing(tab.name);
            }}
          >
            {tab.name}
          </button>
        ))}
        <span
          className="active__indicator"
          style={{ left: `${offset}px`, width: `${indicatorWidth}px` }}
        />
      </nav>
      <div className="pricing-cards">
        {displayablePricing.map((plan, index) => (
          <div className={`card ${plan.category.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
            <h3>{plan.title}</h3>
            <h4>{plan.price}</h4>
            <p>{plan.description}</p>
            <button className="get-started" onClick={openModal}>Get Started</button>
            <div className="features">
              <p>What's included:</p>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <ConsultationModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Pricing;
