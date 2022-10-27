import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img  style={{height: '650px'}}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt="First slide"
          />
          
          <Carousel.Caption className='text-dark w-50 mx-auto' style={{top:200}}>
           <h1>We Ensure Better education for a better world</h1>
           <p>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p>
         
           <Button className='me-5 ' variant="outline-dark">Get Started</Button>
           <Link to='/register'><Button variant="outline-dark">Register Now!</Button></Link>
           
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height: '750px'}}
            className="d-block w-100 "
            src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            alt="First slide"
          />
          
          <Carousel.Caption className='text-dark w-50 mx-auto' style={{top:200}}>
           <h1>We Ensure Better education for a better world</h1>
           <p>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p>
         
           <Button className='me-5 ' variant="outline-dark">Get Started</Button>
           <Link to='/register'><Button variant="outline-dark">Register Now!</Button></Link>
           
          
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img style={{height: '650px'}}
            className="d-block w-100 "
            src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="First slide"
          />
          
          <Carousel.Caption className='text-dark w-50 mx-auto' style={{top:200}}>
           <h1>We Ensure Better education for a better world</h1>
           <p>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p>
         
           <Button className='me-5 ' variant="outline-dark">Get Started</Button>
           <Link to='/register'><Button variant="outline-dark">Register Now!</Button></Link>
           
          
          </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>
    );
};

export default Home;