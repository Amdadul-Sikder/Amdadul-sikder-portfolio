import React from 'react';
import { FcMultipleDevices } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcNeutralTrading } from "react-icons/fc";
import "./Services.css"


const Services = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center py-5">
                        <h1 className="heading">SERVICES</h1>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-lg-4">
                        <div className="single-services">
                            <div className="icon">
                                <FcMultipleDevices />
                            </div>
                            <h4>RESPONSIVE DESIGN</h4>
                            <p>
                                without Mobile friendly we can't imagine any website now. Website should be mobile friendly becauase the user always used their mobile first. I prefer responsive design.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-services">
                            <div className="icon">
                                <FcGlobe />
                            </div>
                            <h4>WEB DEVELOPMENT</h4>
                            <p>
                                I have been working on web development world now. I like to use MongoDB, Express, React JS, Node JS, Firebase, Heroku for full functional websites.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-services">
                            <div className="icon">
                                <FcNeutralTrading />
                            </div>
                            <h4>PSD/FIGMA TO HTML</h4>
                            <p>
                                If you need to convert any PSD or Figma file to HTML I am here to help you. I have some work experiance with PSD and Figma. So I will convert your desired file to a website carefully.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;