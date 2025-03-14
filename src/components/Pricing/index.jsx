import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import ConsultationModal from "../ConsultationModal/ConsultationModal";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./Pricing.css"; 

const tabs = [
  { name: "Web Development" },
  { name: "App Development" },
  { name: "Software Development" },
  { name: "Chatbot Development" },
];

const pricingData = [
  {
    category: "Web Development",
    title: "Basic Website Development",
    price: "Starting from $1000",
    description: "A professionally designed, fully responsive website tailored to your business needs.",
    features: ["Responsive & Mobile-Friendly Design", "SEO Optimization", "CMS Integration", "Basic Contact Form"],
  },
  {
    category: "Web Development",
    title: "Premium Website Development",
    price: "Starting from $2500",
    description: "A high-performance, fully customized website with advanced features for scaling businesses.",
    features: ["Custom Design & Branding", "E-Commerce Integration", "Advanced SEO", "Priority Support"],
  },
  {
    category: "App Development",
    title: "Basic Mobile App Development",
    price: "Starting from $1500",
    description: "A simple yet efficient cross-platform mobile application designed to deliver a great user experience.",
    features: ["Flutter Cross-Platform Development", "User-Friendly Interface", "Basic API Integration", "App Store Deployment"],
  },
  {
    category: "App Development",
    title: "Premium Mobile App Development",
    price: "Starting from $2500",
    description: "A feature-rich mobile application with custom functionalities, security, and seamless user experience.",
    features: ["Custom UI/UX Design", "Push Notifications & Analytics", "Enhanced Security", "Ongoing Maintenance"],
  },
  {
    category: "Software Development",
    title: "Basic Software Development",
    price: "Starting from $1500",
    description: "Custom-built software solutions to streamline business operations and improve efficiency.",
    features: ["Web-Based or Desktop Applications", "Node.js & .NET Backend", "Database Integration", "User Authentication"],
  },
  {
    category: "Chatbot Development",
    title: "Basic Chatbot Development",
    price: "Starting from $500",
    description: "An AI-powered chatbot to enhance customer interaction and automate basic tasks.",
    features: ["Botpress Integration", "WordPress & React Support", "Conversational Flow", "User Engagement"],
  },
  {
    category: "Chatbot Development",
    title: "Premium Chatbot Development",
    price: "Starting from $1000",
    description: "An intelligent chatbot with AI capabilities for personalized customer interactions.",
    features: ["Advanced AI & NLP", "Custom API & CRM Integrations", "Multi-Language Support", "Continuous Improvements"],
  },
];

const Pricing = () => {
  const [displayablePricing, setDisplayablePricing] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsEls = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: "0px", width: "0px" });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" });

  useEffect(() => {
    setDisplayablePricing(pricingData.filter((item) => item.category === tabs[activeIndex].name));
  }, [activeIndex]);

  useEffect(() => {
    if (itemsEls.current[activeIndex]) {
      const element = itemsEls.current[activeIndex];
      setIndicatorStyle({ left: `${element.offsetLeft}px`, width: `${element.offsetWidth}px` });
    }
  }, [activeIndex]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <motion.div
      className="pricing-section"
      id="pricing"
      ref={sectionRef}
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }}
    >
      <h1 className="primary__title">Pricing</h1>
      <p className="text__muted description">Choose from our affordable packages</p>

      <nav className="pricing-nav">
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={(el) => (itemsEls.current[index] = el)}
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {tab.name}
          </button>
        ))}
        <motion.span className="active__indicator" animate={indicatorStyle} />
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="pricing-cards"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {displayablePricing.map((plan, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{plan.title}</h3>
              <h4>{plan.price}</h4>
              <p>{plan.description}</p>
              <button className="get-started" onClick={openModal}>Get Started</button>
              <div className="features">
                <p>What's included:</p>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <ConsultationModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </motion.div>
  );
};

export default Pricing;
