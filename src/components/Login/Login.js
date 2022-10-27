import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle,FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {
  const {GoogleProviderLogin,logIn,passwordResetEmail}=useContext(AuthContext);
  const [error,setError]=useState(" ");
  const [userEmail,setUserEmail]=useState("");
  const navigate=useNavigate();
  const location=useLocation();
  const from=location.state?.from?.pathname || '/';
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
        setError('');
        form.reset();
        navigate(from, {replace: true});
    })
    .catch(error=>{
        console.error(error);
        setError(error.message);
    });
  }
  const handleGoogleSignIn=(e)=>{
    e.preventDefault();
    console.log('click');
          GoogleProviderLogin(googleProvider)
          .then(result=>{
            const user=result.user;
            navigate(from, {replace: true});
         
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
            navigate(from, {replace: true});
         
          })
          .catch(error=>{
            console.error(error)
          
          });
  }
  const handleEmailBlur=event=>{
    const email=event.target.value;
    setUserEmail(email);
    console.log(email);
}
  const handleForgetPassword=()=>{
    if(!userEmail){
        alert('Enter email address');
        return;
    }

    passwordResetEmail(userEmail)
.then(() => {
   alert('password reset email send, Please check');
  })
  .catch((error) => {
    console.error(error);

  });

}
  
    return (
        <div>
        
    <Form onSubmit={handleSubmit} className='mx-auto border rounded m-5 p-5 bg-warning' style={{width: '23rem'}}>
      <h3 className='text-center'>Login </h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control onBlur={handleEmailBlur} type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <p><small>Forget Password?<button type="button" onClick={handleForgetPassword} className="btn btn-link text-decoration-none">Reset</button></small></p>
      <p className='text-danger'><small>{error}</small></p>
     
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
      <small><p className='mt-2'>New to CODING HUB? Please <Link to='/register' className='text-decoration-none'>Register</Link></p></small>
    </Form>
 
    
    </div>
    );
};

export default Login;