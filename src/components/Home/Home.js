import React from 'react';
import "./Home.css"
import profileImage from "../../images/Profile_square.jpg"
import { Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Typewriter from 'typewriter-effect';
import { HashLink } from 'react-router-hash-link';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="profile-meta">
                                <div>
                                    <h1 className="hello">Hello</h1>
                                    <h1>I am Amdadul Sikder</h1>

                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter.typeString('Hello World!')
                                                .callFunction(() => {
                                                    console.log('String typed out!');
                                                })
                                                .pauseFor(2500)
                                                .deleteAll()
                                                .callFunction(() => {
                                                    console.log('All strings were deleted');
                                                })
                                                .start();
                                        }}
                                        options={{
                                            strings: ["Web Developer", "React Developer", "MERN Stack Developer"],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />

                                    <Button className="me-3"
                                        onClick={() => window.open('https://drive.google.com/file/d/1KZ6CxAZb71G_LfpsZE0-xfDF2v8bKEFh/view')}
                                    >
                                        RESUME
                                    </Button>
                                    <HashLink to="/contact">
                                        <Button>HIRE ME</Button>
                                    </HashLink>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="profile-img">
                                <img className="img-fluid" src={profileImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;