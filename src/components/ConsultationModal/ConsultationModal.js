import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './ConsultationModal.css';
import emailjs from 'emailjs-com';

const ConsultationModal = ({ isOpen, onRequestClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Tommy Bui',
      from_name: name,
      name: name,
      email: email,
      phone: phone,
    };

    emailjs
      .send(
        'service_gut6som', // Your EmailJS service ID
        'template_03suyy8', // Your EmailJS template ID
        templateParams,
        'VU3-vPyznxsgFvzVo' // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response.status, response.text);
          alert('Email sent successfully');
        },
        (error) => {
          console.error('There was an error sending the email:', error);
          alert('Failed to send email');
        }
      );

    onRequestClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Book a Consultation"
      className="Modal"
      overlayClassName="Overlay"
    >
      <h2>Book a Free Consultation</h2>
      <p className="text__muted description">
        Let us call you for a free consultation. Please provide your contact details below:
      </p>
      <form className="consultation-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={handlePhoneChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ConsultationModal;
