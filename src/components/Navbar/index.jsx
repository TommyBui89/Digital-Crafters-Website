import React, { useState, useEffect, useRef } from 'react';
import { FaExternalLinkAlt, FaBars, FaTimes } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
import { menu } from '../../data';
import gsap from 'gsap';
import './Navbar.css';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [visible, setVisible] = useState(false);
  const container = useRef(null);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        '.navbar__container',
        {
          y: -250,
          width: '100%',
        },
        {
          y: 0,
          top: 0,
          zIndex: 100,
        }
      );
    }
  }, [visible]);

  return (
    <nav className={`navbar__container ${visible ? 'visible' : ''}`} ref={container}>
      {showSidebar && <div className="overlay" onClick={() => setShowSidebar(false)}></div>}
      
      <div className="logo__container" onClick={() => scroll.scrollToTop({ duration: 500 })}>
        <p className='primary__title' style={{fontSize:'1.8rem', marginTop:'0px'}}>Digital Crafters</p>
      </div>
      
      <div className={`tab__group ${showSidebar ? 'show' : ''}`}>
        <span className="icon__container close__btn" onClick={() => setShowSidebar(false)}>
          <FaTimes />
        </span>
        {menu.map((list, index) => (
          <Link
            key={index}
            activeClass="active"
            className='tab__item name'
            to={list.name.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setShowSidebar(false)}
          >
            {list.name}
          </Link>
        ))}
      </div>

      <div className="column nav__buttons__group">
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="btn btn__primary">
          Hire Us <FaExternalLinkAlt />
        </Link>
        <FaBars className='menu' onClick={() => setShowSidebar(!showSidebar)} />
      </div>
    </nav>
  );
};

export default Navbar;
