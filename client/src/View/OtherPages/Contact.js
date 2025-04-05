import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitContact } from "../../Redux/actions/contactActions";
import "./contact.css";

const Contact = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(submitContact(formData));
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="contact-hero">
      <div className="contact-hero-content">
        <h1>Contact Us</h1>
        <p>
          Let’s build something great together! Reach out with your questions,
          feedback, or ideas.
        </p>
      </div>

      <div className="contact-form-wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
