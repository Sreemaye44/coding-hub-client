import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import Toggle from '../Toggle/Toggle';


const Header = () => {
  const [toggle,setToggle]= useState(false);
  const handleToggleChange=()=>{
    setToggle(!toggle);
  }
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
  }
  
    return (
        <Navbar className='p-0' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
      <Image style={{width: '30px', height: '25px'}} src='https://cdn.worldvectorlogo.com/logos/code-school.svg'></Image>
        <Link  className="text-decoration-none text-secondary fs-2" to='/'>CODING HUB</Link>
        <Toggle toggle={toggle} handleToggleChange={handleToggleChange}></Toggle>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link className="text-decoration-none text-secondary" to='/course'>Courses</Link></Nav.Link>
            <Nav.Link> <Link className="text-decoration-none text-secondary" to='/blog'>Blog</Link></Nav.Link>
            <Nav.Link> <Link className="text-decoration-none text-secondary" to='/faq'>FAQ</Link></Nav.Link>
            
          </Nav>
          <Nav>
            {user?.uid?
            <>
            
             <Button onClick={handleLogOut} variant="warning" className='me-2' >LogOut</Button>
             <Image style={{height: '40px', width:'40px'}} roundedCircle src={user.photoURL} data-toggle="tooltip" data-placement="top" title={user.displayName} ></Image>
            </>
             :
            <Link to='/login'> <Button variant="warning">Login</Button></Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;