import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quiz = () => {
    const quizDetails = useLoaderData();
    const { name, questions } = quizDetails.data;
    const [noOfCorrect, setNoOfCorrect] = useState([]);
    const [noOfWrong, setNoOfWrong] = useState([]);


    console.log(name, questions);
    return (
        <Container>



            <div className="text-center text-purple my-5 d-block d-md-flex  justify-content-evenly container">
                <div >
                    <div className='text-center w-100'>

                        <h1 className='fw-bold'>Quiz of <span className='text-info'>{name}</span> </h1>
                    </div>
                </div>
                <div className=' p-2 rounded shadow' style={{ "background": "#EEB34B" }}>
                    <h6 className=' fw-bold '> Correct answered : {noOfCorrect.length} <br />Wrong answered:{noOfWrong.length}</h6>
                </div>
            </div>
            <div>
                {
                    questions.map((que, idx) => <SingleQuiz noOfCorrect={noOfCorrect} noOfWrong={noOfWrong} setNoOfCorrect={setNoOfCorrect} setNoOfWrong={setNoOfWrong} key={que.id} idx={idx} que={que}></SingleQuiz>)
                }
            </div>

        </Container>
    );
};

export default Quiz;