import React, { useEffect, useState } from 'react';
import './SingleQuiz.css'
import { Col, Container, Row } from 'react-bootstrap';
import SingleOption from '../SingleOption/SingleOption';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser';
const SingleQuiz = ({ que, idx, setNoOfWrong, setNoOfCorrect, noOfWrong, noOfCorrect }) => {
    const { question, options, correctAnswer, id } = que;
    let modifiedQuestion = question;
    if (modifiedQuestion.startsWith('<p>')) {
        modifiedQuestion = modifiedQuestion.substring(3);

    }
    if (modifiedQuestion.endsWith('</p>')) {
        modifiedQuestion = modifiedQuestion.substring(0, modifiedQuestion.length - 4);

    }
    const parse = require('html-react-parser');
    const handleToGivenAns = (value) => {
        const correct = noOfCorrect.find(ans => ans === id);
        const inccorrect = noOfWrong.find(ans => ans === id);

        if (value === correctAnswer) {
            toast.success('Correct Answer', {
                position: toast.POSITION.TOP_CENTER
            });
            if (!correct && !inccorrect) {
                setNoOfCorrect([...noOfCorrect, id]);
            }
        } else {
            toast.error('Wrong Answer !', {
                position: toast.POSITION.TOP_CENTER
            });
            if (!correct && !inccorrect) {
                setNoOfWrong([...noOfWrong, id]);
            }
        }
        console.log(noOfWrong);
        console.log(noOfCorrect);

    }
    const showCorrectAnswer = () => {
        toast.success(`Correct Ans : ${correctAnswer}`, {
            position: toast.POSITION.TOP_CENTER
        });
    }

    return (
        <div className='question m-5 p-4'>
            <ToastContainer />

            <div className='  text-center  d-flex justify-content-between w-100 align-items-center'>
                <div className='text-center w-100'>

                    <h5 className=' fw-bolder p-3 '>Quiz {idx + 1}:{parse(question)}</h5>
                </div>
                <div className=' '>

                    <button onClick={showCorrectAnswer} className='show-ans w-100 '><FontAwesomeIcon icon={faEye} /></button>
                </div>
            </div>
            <div className='Options'>
                <Container>
                    <Row>
                        {
                            options.map((option, idx) => <SingleOption handleToGivenAns={handleToGivenAns} key={idx} idx={idx} option={option} id={id} ></SingleOption>)
                        }
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default SingleQuiz;