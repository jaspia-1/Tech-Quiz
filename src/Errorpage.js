import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <Container className=' h-100 my-5 fw-bold '>
            <Row className=''>
                <Col sm={12} md={6}>
                    <h1 className='fw-bold px-3 display-1 text-center' style={{ 'color': '#EEB34B' }} > Tech Quiz </h1>
                </Col>

                <Col sm={12} md={6} >
                    <h1 className='fw-bold display-1 text-danger text-center '> 404!!</h1>
                    <h1 className='fw-bold  text-center display-1 '> <FontAwesomeIcon icon={faFaceSadTear} /></h1>
                    <h1 className='fw-bold  text-center '> Page Not Found</h1>

                </Col>


            </Row>
            <Row className='text-center my-5'>

                <Link to='/'><button className='btn btn-info fw-bold'> GO TO HOME</button></Link>
            </Row>


        </Container>
    );
};

export default Errorpage;