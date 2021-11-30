import React from 'react';
import bike from "../../images/bike.png"
import traveler from "../../images/traveler.png"
import halim from "../../images/halim.png"
import "./Projects.css"
import { Button } from 'react-bootstrap';

const Projects = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pt-5">
                        <h1 className="heading">PROJECTS</h1>
                    </div>
                </div>
                <div className="row">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src={bike} class="card-img-top" alt="bike" />
                                <div class="card-body">
                                    <h5 class="card-title">BIKE BD</h5>
                                    <p class="card-text">Basically this is an online bike shop. Users can buy the latest bikes here.
                                        User Authentication feature included. Users can manage their orders also.
                                        Admin feature added. Admin can add or delete products.
                                        Responsive Design.
                                    </p>
                                </div>
                                <div class="card-footer">

                                    <Button className="me-2"
                                        onClick={() => window.open('https://bike-bd-1c1c0.web.app/')}
                                    >
                                        Live Site
                                    </Button>
                                    <Button className="me-2"
                                        onClick={() => window.open('https://github.com/Amdadul-Sikder/Bike-BD-niche-website-client')}
                                    >
                                        Github Client
                                    </Button>
                                    <Button className="me-2"
                                        onClick={() => window.open('https://github.com/Amdadul-Sikder/Bike-BD-niche-website-server')}
                                    >
                                        Github Server
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={halim} class="card-img-top" alt="bike" />
                                <div class="card-body">
                                    <h5 class="card-title">HALIM | BUSINESS WEBSITE</h5>
                                    <p class="card-text">This is a multipurpose business website. Users can connect with the company for their business product.
                                        If anyone needs to grow Business ideas then contact Creative teams here.
                                        Mobile-friendly Responsive website.
                                        Creative Agency-related website.
                                    </p>
                                </div>
                                <div class="card-footer">
                                    <Button className="me-2"
                                        onClick={() => window.open('https://halim-business-website.netlify.app/')}
                                    >
                                        Live Site
                                    </Button>
                                    <Button className="me-2"
                                        onClick={() => window.open('https://github.com/Amdadul-Sikder/Halim-Business-website')}
                                    >
                                        Github Code Link
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={traveler} class="card-img-top" alt="bike" />
                                <div class="card-body">
                                    <h5 class="card-title">TRAVELER</h5>
                                    <p class="card-text">Best place for booking tour packages internationally. Tourists can visit and book their desired packages at a cheap price.
                                        Without Sign in users can’t book any packages
                                        Single page and responsive design.
                                        MongoDB is used for database collection.
                                    </p>
                                </div>
                                <div class="card-footer">
                                    <Button className="me-2"
                                        onClick={() => window.open('https://traveler-c90d6.web.app/home#hero')}
                                    >
                                        Live Site
                                    </Button>
                                    <Button className="me-2"
                                        onClick={() => window.open('https://github.com/Amdadul-Sikder/Traveler-client-side-tourism')}
                                    >
                                        Github Client
                                    </Button>
                                    <Button className="me-2"
                                        onClick={() => window.open('https://github.com/Amdadul-Sikder/Traveler-server-side-tourism')}
                                    >
                                        Github Server
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;