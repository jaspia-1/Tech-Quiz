import React from 'react';
import { Col, Container, Row, ToastContainer } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

import QuizCard from '../QuizCard/QuizCard';
const HomePage = () => {
    const apiData = useLoaderData();
    console.log(apiData);
    const quizs = apiData.data;
    console.log(quizs);
    return (
        <div>
            <Header></Header>

            <Container>

                <Row className='my-5 mx-1'>
                    {
                        quizs.map(quiz => <QuizCard key={quiz.id} quiz={quiz}></QuizCard>)
                    }
                </Row>

            </Container>

        </div>
    );
};

export default HomePage;