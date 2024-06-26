import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css';
import StarsCanvas from "../StarCanvas/StarCanvas.jsx";
import EarthCanvas from "../EarthCanvas/EarthCanvas.jsx";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const contactus = (name, email, message) => {
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
            message: message,
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (response) => {
            resolve("Thank you. I will get back to you as soon as possible.");
          },
          (error) => {
            console.error("Failed to send message:", error);
            reject("Ahh, something went wrong. Please try again.");
          }
        );
    });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await contactus(form.name, form.email, form.message);
      alert(result);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-section" id="contact">
      <StarsCanvas />
      <div className="contact-form-container">
        <p>Get in touch</p>
        <h3>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <label>
            Your Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              aria-label="Your Name"
              required
            />
          </label>
          <label>
            Your Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              aria-label="Your Email"
              required
            />
          </label>
          <label>
            Your Message
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              aria-label="Your Message"
              required
            />
          </label>
          <button type="submit">{loading ? "Sending..." : "Send"}</button>
        </form>
      </div>
      <div className="earth-canvas-container">
        <EarthCanvas />
      </div>
    </div>
  );
};

export default Contact;