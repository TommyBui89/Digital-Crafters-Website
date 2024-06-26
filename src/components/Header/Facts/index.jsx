import React, { useState, useEffect, useRef } from 'react';
import Odometer from 'react-odometerjs';
import gsap from 'gsap';
import './Facts.css';

const Facts = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const container = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setExperience(2);
      setProjects(4);
      setClients(4);
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const el = container.current;
    const timeline = gsap.timeline();
    timeline
      .from('.fact__item', {
        delay: 1.5,
        x: -100,
        stagger: 0.5,
        opacity: 0,
      });
  }, []);

  return (
    <div className="fact__container" ref={container}>
      <div className="fact__item">
        <div className="count__container">
          <Odometer value={experience} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Years Of Experience</p>
      </div>

      <div className="fact__item">
        <div className="count__container">
          <Odometer value={projects} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Completed Projects</p>
      </div>
      
      <div className="fact__item">
        <div className="count__container">
          <Odometer value={clients} />
          <span className="indicator"></span>
        </div>
        <p className="name">Satisfied Clients</p>
      </div>
    </div>
  );
};

export default Facts;
