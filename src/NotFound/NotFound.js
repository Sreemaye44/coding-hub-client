import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container w-25'>
  <div class="text-center">
    <h1>
    <Image className='img-fluid' src='https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=996&t=st=1666833786~exp=1666834386~hmac=99cf0ada17552535cf6ebacccb7049846f2a1b6c6be050eab677729787a6f81a'></Image>
     
    </h1>
    <h3 class="fadeIn">PAGE NOT FOUND</h3>
    <Link to='/'><Button>Return To Home</Button></Link>
  </div>
</div>
    );
};

export default NotFound;