import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();

    console.log(data);
    return (

        <div>

            <Container fluid className="my-2 p-4">

                <Row className="align-items-center justify-content-center px-2">
                    <Col sm={12} md={6}>
                        <div className='text-center'>
                            <h1 className='text-purple p-3   fw-bold'>Analytical information of the <br />total number of the questions have seperately according to the topics.Day by day the Chart is Enriching .</h1>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>


                        <div className=' shadow-lg m-3 p-2 w-100 bg-light rounded  '>


                            <Container className="my-5  ">
                                <ResponsiveContainer aspect={1.8}>
                                    <LineChart data={data.data} className="mx-auto">
                                        <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />

                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                    </LineChart>
                                </ResponsiveContainer>


                            </Container>

                        </div>


                    </Col>



                </Row>




            </Container>

        </div>



    );
};

export default Statistics;