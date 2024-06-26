import React, { useEffect, useRef } from 'react';
import "./About.css";
import profile2 from '../../images/profile-2.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const container = useRef(null);

  // Register plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const el = container.current;
    gsap.fromTo('.about__container', {
      scale: 0.7,
    },
      {
        scale: 1,
        scrollTrigger: {
          trigger: el,
          scrub: true,
          markers: false,
        }
      }
    )
  }, [])

  return (
    <section ref={container} id='about'>
      <div className="section__wrapper about__container">
        <div className="me__container blur-effect">
          <div className="photo__container">
            <img src={profile2} alt="Profile" />
          </div>
        </div>
        <div className="section__header">
          <h4 className='primary__title'>About Us</h4>
          <h1 className='title'>We are Digital Crafters</h1>
          <p className="text__muted description">
            We are a dedicated Full Stack Development Team with a focus on delivering cutting-edge, user-centric digital solutions.
            Our expertise spans various programming languages and frameworks, ensuring robust and scalable applications.
            We excel in database design and management, providing seamless data integration and security.
            Our team is committed to solving complex problems with innovative approaches, consistently delivering high-quality
            projects on time and within budget. Partner with us to transform your ideas into reality with precision and creativity.
          </p>
          <button className="btn btn__primary">Read more</button>
        </div>
      </div>
    </section>
  )
}

export default About;
