import React from 'react';
import { Col, Container, Row, ToastContainer } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';


const HomePage = () => {
    const apiData = useLoaderData();
    console.log(apiData);
    const quizs = apiData.data;
    console.log(quizs);
    return (
        <div>
            <h1>HEader</h1>

            <Container>
                <h1 className='text-white fw-bold text-center'>Choose topic to play Quiz</h1>
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