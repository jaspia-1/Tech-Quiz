import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Header.css';

const Header = () => {
    return (

        <div>
            <Container fluid className="my-2 p-4">

                <Row className="align-items-center justify-content-center px-2">
                    <Col sm={12} md={6}>
                        <div className='text-center'>
                            <h1 className=' p-3  display-3 fw-bold'>Explore  <span className='display-4 text-warning fw-bold' >Tech Quiz</span>   <br />to enhance  your Quiz skill <br />on technology</h1>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>


                        <div className='  rounded  m-3  '>

                            <img src="img1.png" className='img-fluid shadow-lg ' alt="" />
                        </div>

                    </Col>



                </Row>




            </Container>

        </div>

    );
};

export default Header;