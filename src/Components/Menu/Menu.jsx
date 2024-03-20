import React from 'react';
import './menu.css'
import { Navbar, Container, Nav, } from 'react-bootstrap';
import Logo from "../../assets/logo.png";
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <Navbar expand="lg" className='menu_bg'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt={Logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='menu_options'><IoMdHome className='homeicon' />Home</Link>
                            <Link to="/service" className='menu_options'>Service</Link>
                            <Link className='menu_options'>Features</Link>
                            <Link className='menu_options'>Pricing</Link>
                            <Link className='menu_options'>UX</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Menu
