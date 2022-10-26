import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaClock, FaUser, FaDollarSign, FaUsers,FaDownload } from 'react-icons/fa';

const Details = () => {
    const details= useLoaderData();
    const {name,duration, fee,instructor,intro, logo,students}=details
    console.log(details);
    return (
        <Card className="mx-auto my-5 d-flex" style={{ width: '30rem'}}>
        <Card.Img style={{height: '20rem'}} variant="top" src={logo} />
        <Card.Body>
          <Card.Title className='text-center'>{name}</Card.Title>
          <Card.Text>
          <div className='d-flex justify-content-between m-3'>
          <div><FaClock></FaClock> {duration} </div>
          <div><FaUser></FaUser> {instructor} </div>
         
          <div><FaDollarSign></FaDollarSign>{fee}</div>
          <div><FaUsers></FaUsers>{students}</div>
          </div>
           <p>{intro}</p>
          </Card.Text>
          <div className='d-flex justify-content-between'>
          <Link to='/premium'><Button variant="primary">Get Premium Access</Button></Link>
          <Button variant="primary">Download pdf <FaDownload></FaDownload></Button>
          </div>
        </Card.Body>
      </Card>
    );
};

export default Details;