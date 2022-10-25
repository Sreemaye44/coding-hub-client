import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle,FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {
  const {GoogleProviderLogin,logIn}=useContext(AuthContext);
  const googleProvider=new GoogleAuthProvider();
  const githubProvider=new GithubAuthProvider();
  const handleSubmit=event=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)
    logIn(email, password)
    .then(result=>{
        const user=result.user;
        form.reset();
        console.log(user);
    })
    .catch(error=>{
        console.error(error);
    });
  }
  const handleGoogleSignIn=(e)=>{
    e.preventDefault();
    console.log('click');
          GoogleProviderLogin(googleProvider)
          .then(result=>{
            const user=result.user;
            console.log("login: "+user);
         
          })
          .catch(error=>{
            console.error(error)
          
          });
  }

  const handleGithubSignIn=(e)=>
  {
    e.preventDefault();
    console.log('click');
          GoogleProviderLogin(githubProvider)
          .then(result=>{
            const user=result.user;
            console.log(user);
         
          })
          .catch(error=>{
            console.error(error)
          
          });
  }
    return (
        <div>
        
    <Form onSubmit={handleSubmit} className='w-25 mx-auto border rounded m-5 p-5 bg-warning'>
      <h3 className='text-center'>Login </h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
     
      <div className='d-flex justify-content-between'>
      <Button className='me-5' variant="dark" type="submit">
        Login
      </Button>
      <div>
      <Button onClick={handleGoogleSignIn} className='me-2' variant="light"  type="submit"> <FaGoogle></FaGoogle>
      </Button>
      <Button onClick={handleGithubSignIn} className='me-1'  variant="dark" type="submit">
       <FaGithub></FaGithub>
      </Button>
      </div>
      </div>
      <p className='mt-2'>Don't have an account? please <Link to='/register'>Register</Link></p>
    </Form>
 
    
    </div>
    );
};

export default Login;