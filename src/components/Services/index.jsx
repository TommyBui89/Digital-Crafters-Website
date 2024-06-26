import React, { useEffect, useRef } from 'react';
import { FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineCode } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Services.css";

const servicesData = [
  {
    icon: <FaPaintBrush className='icon' />,
    title: 'UI/UX Design',
    description: 'Crafting visually appealing and user-friendly designs that provide an intuitive and engaging user experience.',
  },
  {
    icon: <BsCodeSquare className='icon' />,
    title: 'Web Development',
    description: 'Developing high-quality, responsive websites that are tailored to meet your specific business needs and goals.',
  },
  {
    icon: <TfiWrite className='icon' />,
    title: 'Content Creation',
    description: 'Creating compelling and engaging content that effectively communicates your brand\'s message and values.',
  },
  {
    icon: <FaMobileAlt className='icon' />,
    title: 'App Development',
    description: 'Building mobile applications that offer a seamless user experience across all devices.',
  },
  {
    icon: <AiOutlineCode className='icon' />,
    title: 'Software Development',
    description: 'Creating custom software solutions to streamline your business operations and enhance efficiency.',
  },
  {
    icon: <BiMessageRoundedDots className='icon' />,
    title: 'Chatbox Creation',
    description: 'Developing chatbots that provide excellent user interaction and support for your business.',
  },
];

const Services = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);

  useEffect(() => {
    const el = container.current;
    gsap.fromTo('.service__head', 
      { opacity: 0 }, 
      { opacity: 1, scrollTrigger: { trigger: el } }
    );

    gsap.fromTo('.service', 
      { y: -50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: el, start: "-100% bottom", end: "bottom 20%", scrub: true } }
    );
  }, []);

  return (
    <section ref={container} id='services'>
      <div className="section__wrapper services__container">
        <div className="section__header center">
          <h2 className='primary__title'>Services</h2>
          <h3 className="text__muted description">
            We transform your ideas into distinctive web projects that inspire and captivate your customers.
          </h3>
        </div>
        <div className="services__group">
          {servicesData.map((service, index) => (
            <article className="service" key={index}>
              <div className="service__top">
                <div className="icon__container">
                  {service.icon}
                </div>
                <h3 className='title'>{service.title}</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
