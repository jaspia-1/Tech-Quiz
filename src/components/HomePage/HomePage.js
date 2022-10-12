import React from 'react';
import { Col, Container, Row, ToastContainer } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';


const HomePage = () => {
    const apiData = useLoaderData();
    console.log(apiData);
    const quizs = apiData.data;
    console.log(quizs);
    return (
        <div>
            <Header></Header>

            <Container>

                <Row className='my-5'>
                    {
                        quizs.map(quiz => <h1>quiz</h1>)
                    }

                </Row>

            </Container>

        </div>
    );
};

export default HomePage;