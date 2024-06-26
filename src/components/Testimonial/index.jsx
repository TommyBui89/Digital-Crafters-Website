import React from 'react'
import { profile3, profile4, profile5, profile6 } from '../../images'
import "./Testimonial.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: profile3,
    name: 'Samuel Eze',
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    avatar: profile4,
    name: 'Emmanuel Joseph',
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    avatar: profile5,
    name: 'Gloria Chiwendu',
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    avatar: profile6,
    name: 'Precious Stone',
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  }
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

        <Swiper className="testimonial__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            700: {
              slidesPerView: 2,
            }
          }}
        >
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={review} />
                </div>
                <h3 className='client__name'>{name}</h3>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonial
