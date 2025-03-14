"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Card.css";

const Card = ({ image, title, text, demoLink }) => {
  const [isActive, setIsActive] = useState(false);

  const handleInteraction = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <motion.div
      className="card-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onTouchStart={handleInteraction}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="flip-card-front"
      >
        <div className={`card-overlay ${isActive ? "visible" : ""}`} />
        <div className={`card-hover-content glass-effect ${isActive ? "visible" : ""}`}>
          <h1 className="card-title">{title}</h1>
          <p className="card-description">{text}</p>
          <a href={demoLink} target="__blank" className="card-button">
            View Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
