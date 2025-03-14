import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile3, profile4, profile5 } from "../../images";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: profile3,
    name: "Steven Vo",
    review: `Digital Crafters built a sleek, user-friendly site that boosted our online sales and inquiries. Highly recommended!`,
  },
  {
    avatar: profile4,
    name: "David H Phan",
    review: `Our new website has streamlined patient bookings and made information more accessible. A fantastic experience!`,
  },
  {
    avatar: profile5,
    name: "Norman Chilchik",
    review: `Digital Crafters delivered a professional, seamless website that perfectly meets our business needs. Outstanding work!`,
  },
];

const Testimonial = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" });

  return (
    <motion.section
      id="testimonial"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="section__wrapper">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, x: -50 }} 
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} 
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="primary__title">Testimonials</h2>
          <p className="text__muted description">
            See what our clients say about working with us and how our web solutions have helped their businesses grow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }} 
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <Swiper
            className="testimonial__container"
            modules={[Pagination, Autoplay]} 
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }} 
            loop={true} 
            breakpoints={{
              700: { slidesPerView: 2 },
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonial;