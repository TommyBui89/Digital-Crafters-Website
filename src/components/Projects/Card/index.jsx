"use client"
import React from 'react'
import { motion } from 'framer-motion'
import './Card.css'

const Card = ({ image, title, text, demoLink }) => {

    return (
        <motion.div
            className='card-container'
            initial={false}
            transition={{ duration: 0.6, animationDirection: 'normal' }}
        >
            <a href={demoLink} target="__blank" className='card-link'>
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className='flip-card-front'>
                    <div className='card-overlay' />
                    <div className='card-hover-content'>
                        <h1 className='card-title'>{title}</h1>
                        <p className='card-description'>{text}</p>
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className='flip-card-back'>
                    <div className='card-back-overlay' />
                    <div className='card-back-content'>
                        <h1 className='card-title'>{title}</h1>
                        <p className='card-description'>
                            {text}
                        </p>
                    </div>
                </div>
            </a>
        </motion.div>
    )
}

export default Card
