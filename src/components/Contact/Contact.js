import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../firebaseConfig.js';
import './Contact.scss';

import Typewriter from 'typewriter-effect';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Add the document to Firestore
            await addDoc(collection(db, 'contacts'), {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                timestamp: new Date(),
            });

            // Log the submitted information to the console
            console.log('Submitted Contact Information:', formData);

            // Update status and reset form
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error adding document: ', error);
            setStatus('Failed to send the message. Please try again later.');
        }
    };

    return (
        <div className="contact">
            <div className="contact-wrapper">
                <h1>Contact Me</h1>
                <div className="typewriter-effect">
                    <Typewriter
                        options={{
                            strings: [
                                "Let's build something amazing together.",
                                "Have a question? Feel free to ask!",
                                "Your next project starts here."
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                        }}
                    />
                </div>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">
                        Send Message
                    </button>
                </form>
                {status && <p className="status-message">{status}</p>}
            </div>
        </div>
    );
};

export default Contact;
