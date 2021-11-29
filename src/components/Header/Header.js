import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <Navbar bg="light" expand="lg">
                <Container>
                    <HashLink className="logo" to="/">Amdadul Sikder</HashLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <HashLink className="nav-menu" to="/home">Home</HashLink>
                            <HashLink className="nav-menu" to="/about">About</HashLink>
                            <HashLink className="nav-menu" to="/services">Services</HashLink>
                            <HashLink className="nav-menu" to="/projects">Projects</HashLink>
                            <HashLink className="nav-menu" to="/contact">Contact</HashLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;