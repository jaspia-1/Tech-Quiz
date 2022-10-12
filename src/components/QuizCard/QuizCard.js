import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './QuizCard.css';
const QuizCard = ({ quiz }) => {
    const { id, logo, name, total } = quiz;

    return (
        <Col sm={6} md={3} className="my-2">

            <Card >
                <Card.Img variant="top" src={logo} className="bg-purple" />
                <Card.Body className="text-purple">
                    <Card.Title className="fw-bold">{name}</Card.Title>
                    <div>
                        <p>Total Questions : {total}</p>
                        <Link to={`/quiz/${id}`}>
                            <Button className='bg-purple-dark border-0' variant="primary">Start Practice</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default QuizCard;