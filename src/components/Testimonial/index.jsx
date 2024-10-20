import React from 'react';
import { profile3, profile4, profile5 } from '../../images';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: profile3,
    name: 'Steven Vo',
    review: `DT Security Doors and Shutters has never been more efficient, thanks to the website built by Digital Crafters. 
             The sleek design and ease of use have boosted our online sales and inquiries. Clients now enjoy a seamless 
             experience when browsing products and requesting quotes. We couldn't be happier with the outcome!`,
  },
  {
    avatar: profile4,
    name: 'David H Phan',
    review: `The Broadmeadows Place Medical Clinic website has transformed how we connect with our patients. 
             With online booking and comprehensive service information, our patients find it easier to access 
             the care they need. Digital Crafters’ dedication to ensuring the website met our specific needs was outstanding.`,
  },
  {
    avatar: profile5,
    name: 'Norman Chilchik',
    review: `Integrated Insurance Solutions needed a complete online presence, and Digital Crafters delivered beyond expectations. 
             The website not only looks great but also handles complex service requests seamlessly. 
             Their responsiveness to feedback and attention to detail made the entire process smooth and effective.`,
  },
];

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className='primary__title'>Testimonials</h2>
          <p className='text__muted description'>
            Hear directly from our clients about their experiences working with us. From innovative startups to established enterprises, our commitment to delivering exceptional web development services is reflected in their testimonials.
          </p>
        </div>

        <Swiper
          className="testimonial__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            700: {
              slidesPerView: 2,
            },
          }}
        >
          {data.map(({ avatar, name, review }, index) => (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={`Avatar of ${name}`} />
              </div>
              <h3 className="client__name">{name}</h3>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
