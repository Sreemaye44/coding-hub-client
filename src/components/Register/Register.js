import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle,FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Register = () => {
  const{createUser,updateUserProfile}=useContext(AuthContext);
  const [error,setError]=useState(" ");
  const handleSubmit=(event)=>
  {
    event.preventDefault();
    const form= event.target;
    const name=form.name.value;
    const photoURL=form.photoURL.value;
    const email=form.email.value;
    const password= form.password.value;
    createUser(email,password)
    .then((result)=>{
         const user=result.user;
         setError('');
         form.reset();
         console.log(user)
         handleUpdateUserProfile(name,photoURL);
    
    })
    .catch((error)=>{
      console.error(error);
      setError(error.message);
    
    })
    
  }
  const handleUpdateUserProfile=(name,photoURL)=>{
    const profile={
      displayName: name,
      photoURL: photoURL
    }
    updateUserProfile(profile)
    .then(()=>{})
    .catch(error=>console.error(error));
  }
    return (
        <div>
          <Form onSubmit={handleSubmit} className='border rounded m-3 mx-auto py-3 px-5 bg-warning' style={{width:'23rem'}}>
            <h4 className='text-center'>Sign Up Now!</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control type="text" name="photoURL" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <p className='text-danger'><small>{error}</small></p>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Accept terms and conditions" />
      </Form.Group>
      <Button className='me-5' variant="dark" type="submit">
        Register
      </Button>
      <p className='mt-2'>Don't have an account? please <Link to='/login'>Login</Link></p>
    </Form>
 
    
    </div>
    
    
         );
};

export default Register;