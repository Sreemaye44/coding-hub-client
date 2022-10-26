import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaClock, FaUser, FaDollarSign, FaUsers } from 'react-icons/fa';

const Details = () => {
    const details= useLoaderData();
    console.log(details);
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={details.logo} />
        <Card.Body>
          <Card.Title>{details.name}</Card.Title>
          <Card.Text>
          <FaClock></FaClock> <FaUser></FaUser> <FaDollarSign></FaDollarSign> <FaUsers></FaUsers>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Get Premium Access</Button>
        </Card.Body>
      </Card>
    );
};

export default Details;