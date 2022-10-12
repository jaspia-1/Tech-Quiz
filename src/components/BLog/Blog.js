import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Blog = () => {
    return (
        <div className='my-5 p-3 container'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>    what is the purpose of using React Router?</Accordion.Header>
                    <Accordion.Body>
                        For the functionality of SPA ,routing is very necessary to go on the page directly without reloading the page .To maake this easy ,we need to use React Router .React router is a standard library for routing in React .It enables the navigation among views of various components in the SPA,allow changing the browser URL,and keep the UI sync according to the URL.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> How does Context API works?</Accordion.Header>
                    <Accordion.Body>React context is an essential tool for every React developer to know. React context allows us to pass down and use (consume) data in whatever component we need in our React app without using props.React context allows us to share data (state) across our components more easily.It is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>      Do you want to know about useRef hook of React?</Accordion.Header>
                    <Accordion.Body>
                        Refs are probably the most misunderstood and misused part of React.
                        The hook useRef can be used to track the renders of the SPA(Single Page Application).This hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.However, useRef() is useful for more than the ref attribute. It's handy for keeping any mutable value around similar to how you'd use instance fields in classes.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default Blog;