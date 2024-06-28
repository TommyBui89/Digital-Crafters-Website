"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Card.css'

const Card = ({ image, title, text, demoLink }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(prevState => !prevState);
    };

    return (
        <motion.div
            className={`card-container ${isClicked ? 'clicked' : ''}`}
            initial={false}
            transition={{ duration: 0.6, animationDirection: 'normal' }}
            onClick={handleClick}
        >
            <div
                style={{ backgroundImage: `url(${image})` }}
                className='flip-card-front'>
                <div className='card-overlay' />
                <div className='card-hover-content'>
                    <h1 className='card-title'>{title}</h1>
                    <p className='card-description'>{text}</p>
                    <a href={demoLink} target="__blank" className='card-button'>
                        View Demo
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default Card
