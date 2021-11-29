import React from 'react';
import "./Home.css"
import profileImage from "../../images/Profile_square.jpg"
import { Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';

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
                                    <h3 className="mb-5">Web Developer</h3>
                                    <Button className="me-3">RESUME</Button>
                                    <Button>HIRE ME</Button>
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