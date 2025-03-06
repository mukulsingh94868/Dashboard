import React, { useState } from "react";
import axios from "axios";
import "./contact.css";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { submitContact } from "../../Redux/actions/contactActions";

const Contact = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
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
            console.log('error', error);
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-image">
                <img src={'https://spruko.com/demo/xintra/dist/assets/images/media/media-65.png'} alt="Contact Us" />
            </div>


            <div className="contact-form-container">
                <h2>Contact Us</h2>
                <h5>Still Have Questions? We're Here to Help!</h5>
                <span>Contact our support team for personalized assistance. Your satisfaction is our priority! Write your question below and we'll get back to you shortly.</span>

                <form onSubmit={handleSubmit} className="contact-form">
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                    <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
