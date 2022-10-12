import React from 'react';
import { Col } from 'react-bootstrap';
import './SingleOption.css';

const SingleOption = ({ option, id, idx, handleToGivenAns }) => {
    return (
        <Col className='p-3 d-flex' sm={6}>

            <input className="form-check-input me-2 hideradio" type="radio" name={id} id={id + idx} />
            <label onClick={(event) => handleToGivenAns(event.target.innerText)} className="option p-3 form-check-label w-100 text-center" htmlFor={id + idx} >
                {option}
            </label>
        </Col>
    );
};

export default SingleOption;