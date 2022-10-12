import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const NavbarHeader = () => {
    return (

        <Navbar bg="light" variant="light" className='shadow fw-bold'>
            <Container>
                <Link className='navbar-brand fs-2' style={{ 'color': '#EEB34B' }} to='/'> Tech Quiz</Link>

                <Nav className="ms-auto">
                    <Link className='nav-link' to='/' >Home</Link>
                    <Link className='nav-link' to='/topics'>Topics</Link>
                    <Link className='nav-link' to='/statistics' >Statistics</Link>
                    <Link className='nav-link' to='/blog'>Blog</Link>

                </Nav>
            </Container>
        </Navbar>

    );
};

export default NavbarHeader;