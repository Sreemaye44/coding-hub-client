import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img style={{height: '650px'}}
            className="d-block w-100 "
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt="First slide"
          />
          
          <Carousel.Caption style={{top:250}}>
           <h1>We Ensure Better education for a better world</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, animi dolore suscipit enim sequi aperiam tempore fugiat possimus, aut nam consequuntur? Earum distinctio perferendis, sunt eveniet obcaecati omnis veniam architecto.</p>
         
           <Button className='me-5 ' variant="outline-warning">Get Started</Button>
           <Link to='/register'><Button variant="outline-warning">Register Now!</Button></Link>
           
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height: '650px'}}
            className="d-block w-100 "
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt="First slide"
          />
          
          <Carousel.Caption style={{top:250}}>
           <h1>We Ensure Better education for a better world</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, animi dolore suscipit enim sequi aperiam tempore fugiat possimus, aut nam consequuntur? Earum distinctio perferendis, sunt eveniet obcaecati omnis veniam architecto.</p>
         
           <Button className='me-5 ' variant="outline-warning">Get Started</Button>
           <Button variant="outline-warning">Register Now!</Button>
           
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height: '650px'}}
            className="d-block w-100 "
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt="First slide"
          />
          
          <Carousel.Caption style={{top:250}}>
           <h1>We Ensure Better education for a better world</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, animi dolore suscipit enim sequi aperiam tempore fugiat possimus, aut nam consequuntur? Earum distinctio perferendis, sunt eveniet obcaecati omnis veniam architecto.</p>
         
           <Button className='me-5 ' variant="outline-warning">Get Started</Button>
           <Button variant="outline-warning">Register Now!</Button>
           
          
          </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>
    );
};

export default Home;