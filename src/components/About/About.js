import React from 'react';
import "./About.css"
import aboutImg from "../../images/Profile_square.jpg"
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';


const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center py-5">
                        <h1 className="heading">ABOUT ME</h1>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-lg-6">
                        <div className="about-img-area">
                            <img className="img-fluid about-img" src={aboutImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <h4>Hi! I am Amdadul Sikder</h4>
                            <p>
                                I am a frontend React Developer. I have aquire the knowledge of MERN STACK and aquiring knowledge day by day. I am very passionate about my work.
                            </p>
                            <p>
                                I have some project based experiance using Html, Css, Javascript, React JS , React Router, Express JS, Node JS , MongoDB, Firebase, Heroku and other Technologies.
                            </p>
                            <p>
                                I also used some CSS framework like Bootstrap, React Bootstrap Tailwind and Material UI library.
                            </p>
                            <h6>WhatsApp: +8801822573631</h6>
                            <h6>Email: amdadulsikder3@gmail.com</h6>
                            <div className="social-links">
                                <span className="social-icon"><FaFacebook /></span>
                                <span className="social-icon"><FaLinkedin /></span>
                                <span className="social-icon"><FaGithub /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;