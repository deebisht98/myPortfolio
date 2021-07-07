import React from 'react'
import './Contact.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import contactVector from '../assets/contact_anime.png'
import github from '../assets/gh.png'
import linkedIn from '../assets/li.png'
import instagram from '../assets/in.png'
const Contact = () => {
    return (
        <div className="section-container">
            <Header
                heading="Get in touch."
                details="Interested to collaborate? Feel free to drop me an email."
            />
            <div className="contact-form-container">
                <form
                    action="https://formspree.io/f/xlealyvw"
                    method="POST"
                    className="contact-form"
                >
                    <input
                        type="email"
                        placeholder="Your Email ID"
                        name="_replyto"
                        className="input-box email-input"
                    />
                    <textarea
                        type="text"
                        placeholder="Your Message"
                        name="message"
                        className="input-box body-input"
                    ></textarea>
                    <button type="submit" className="contact-btn">
                        Send Email
                    </button>
                </form>
            </div>
            <div className="social-icons-container">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/deebisht98"
                    className="social-icon"
                >
                    <img src={github} alt="icon" />
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/dheeraj-bisht-29828a155/"
                    className="social-icon"
                >
                    <img src={linkedIn} alt="icon" />
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/dheerajbisht_/"
                    className="social-icon"
                >
                    <img src={instagram} alt="icon" />
                </a>
            </div>
            <Footer toAddress="/about" link="about me." phrase="Read more " />
            <div className="vec-frame">
                <img
                    src={contactVector}
                    alt="contact-vector"
                    className="contact-vector"
                />
            </div>
        </div>
    )
}

export default Contact
