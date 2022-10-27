import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const FAQ = () => {
    return (
        <div className='container w-75'>
            <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Who should take this course?</Accordion.Header>
        <Accordion.Body>
        Anybody looking for a clear and straightforward introduction to the programming language, passionate in their logical structure and their main provisions.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How much time will student need?</Accordion.Header>
        <Accordion.Body>
        Most students can complete the course in about 3 months.  Coding hub are kept, allowing students to stop and restart as often as they wish, fitting in with their other duties
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How can students consolidate their learning  after taking the course??</Accordion.Header>
        <Accordion.Body>
        We provide a 48-page PDF document, which both summarises all the important learning points of the course and serves as a reference guide for day-to-day use
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default FAQ;