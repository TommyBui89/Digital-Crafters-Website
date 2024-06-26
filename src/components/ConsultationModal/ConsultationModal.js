import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";
import "./ConsultationModal.css";

const ConsultationModal = ({ isOpen, onRequestClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const contactus = (name, email, phone) => {
    return new Promise((resolve, reject) => {
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: name,
            to_name: "Tommy Bui",
            from_email: email,
            to_email: "buitommy998@gmail.com",
            cc_email: "haizzzchic@gmail.com",
            message: `Phone: ${phone}`,
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (response) => {
            resolve("Thank you. We will get back to you as soon as possible.");
          },
          (error) => {
            console.error("Failed to send message:", error);
            reject("Ahh, something went wrong. Please try again.");
          }
        );
    });
  };
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          to_name: "Tommy Bui",
          to_email: "buitommy998@gmail.com",
          cc_email: "haizzzchic@gmail.com",
          message: `Phone: ${phone}\nConsultation request`,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      alert("Thank you. We will get back to you as soon as possible.");
      setName("");
      setEmail("");
      setPhone("");
      onRequestClose();
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Ahh, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
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
        Let us call you for a free consultation. Please provide your contact
        details below:
      </p>
      <form className="consultation-form">
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={handlePhoneChange} />
        </label>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <button type="button" onClick={handleSubmit} disabled={loading}>
        {loading ? "Sending..." : "Submit"}
      </button>
    </Modal>
  );
};

export default ConsultationModal;
