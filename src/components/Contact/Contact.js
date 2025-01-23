import React from 'react';
import Typewriter from 'typewriter-effect';
import './Contact.scss';

const Contact = () => {
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
                <p>
                    Reach out to discuss your ideas, ask questions, or just say hi!
                </p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
