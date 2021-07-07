import React from 'react'
import './About.css'
import Header from '../Header/Header.js'
import aboutvector from './../../Components/assets/about_vector.png'
import Footer from '../Footer/Footer'
import aboutanime from './../../Components/assets/about_anime.gif'
const About = () => {
    return (
        <div>
            <div className="section-container">
                <Header
                    heading="About Me."
                    details="Programmer JR | UI/UX Designer | Blogger | Competitive Programmer | Uplifting the student community in the field of tech and personal growth"
                />
                <div className="vector-frame">
                    <img
                        src={aboutvector}
                        alt="about_vector"
                        className="about-vector"
                    />
                </div>
                <div className="about-main">
                    <div className="about-main-left">
                        <h3 className="about-sub-heading">UI/UX Designer</h3>
                        <p className="about-details">
                            I've been creating cool UI designs for
                            mobile/desktop devices. Check out{' '}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.instagram.com/_programmer_jr/"
                                className="about-link"
                            >
                                my designs!
                            </a>
                        </p>
                        <h3 className="about-sub-heading">Blogger</h3>
                        <p className="about-details">
                            I've been writing blogs from around one year now.
                            Check out{' '}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://coding--logic.blogspot.com/"
                                className="about-link"
                            >
                                my blogspot today!
                            </a>
                        </p>
                        <h3 className="about-sub-heading">
                            Competitive Programmer
                        </h3>
                        <p className="about-details">
                            I've been doing competitve programming for almost
                            two years now. Check out{' '}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.hackerrank.com/Deebisht"
                                className="about-link"
                            >
                                my performance!
                            </a>
                        </p>
                    </div>
                    <div className="about-main-right">
                        <img
                            src={aboutanime}
                            alt="about_image"
                            className="about-image"
                        />
                    </div>
                </div>

                <Footer
                    phrase="Check out my "
                    link="projects!"
                    toAddress="/projects"
                />
            </div>
        </div>
    )
}

export default About
