import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Typewriter from 'typewriter-effect';
import StarsCanvas from '../StarCanvas/StarCanvas';
import { profile1 } from '../../images';
import './Header.css';

const Header = () => {
  const container = useRef();

  useEffect(() => {
    gsap.fromTo(
      '.profile__photo__container',
      {
        scale: 0.5,
        duration: 1,
        opacity: 0.5,
      },
      {
        scale: 1,
        duration: 1,
        ease: 'sine.in',
        opacity: 1,
      }
    );

    gsap.from('.intro__text', {
      fontSize: 100,
      duration: 1,
      delay: 1,
      ease: 'sine.in',
    });
  }, []);

  return (
    <header id="header" className="blur-effect" ref={container}>
      <StarsCanvas />
      <div className="section__wrapper header__container">
        <div className="column intro__container blur-effect">
          <div className="header__info">
            <div className="header__info__middle">
              <h1 className="primary__title header__title" style={{ marginBottom: '0px' }}>
                Welcome to
              </h1>
              <h1 className="primary__title header__title" style={{ marginTop: '0px' }}>
                <Typewriter
                  options={{
                    strings: ['Digital Crafters'],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'typewriter-text',
                    cursorClassName: 'typewriter-cursor',
                  }}
                />
              </h1>
              <p className="header__description">
                We are a leading web development company dedicated to crafting stunning digital experiences. Our team of experts specializes in custom web solutions, UX/UI design, and digital transformation to help your business thrive in the digital age.
              </p>
            </div>
            <div className="header_button">
              <a href="#contact">CONTACT US</a>
            </div>
          </div>
        </div>
        <div className="column profile__wrapper">
          <div className="profile__photo__container">
            <img src={profile1} alt="Company Logo" className="profile__photo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
