import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
<footer class="mt-0 bg-light text-center text-black">
  
  <div class="container p-4">
  
    <section class="mb-4">

      <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
        >
        <FaFacebook></FaFacebook>
      </a>

  
      <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
        ><FaTwitter></FaTwitter></a>

      
      <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
        ><FaGoogle></FaGoogle></a>

    
      <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
        ><FaInstagram></FaInstagram></a>

 
      <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
        ><FaLinkedin></FaLinkedin></a>

      <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
        ><FaGithub></FaGithub></a>
    </section>
  

  
    <section class="">
      <form action="">
       <div class="row d-flex justify-content-center">
       
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
        
          <div class="col-md-5 col-12">
          
            <div class="form-outline form-white mb-4">
              <input type="email" id="form5Example21" class="form-control" />
              <label class="form-label" for="form5Example21">Email address</label>
            </div>
          </div>
        
          <div class="col-auto">
           
            <button type="submit" class="btn btn-outline-dark mb-4">
              Subscribe
            </button>
          </div>
      
        </div>
   
      </form>
    </section>

    
  </div>
 
  <div class="text-center p-3" style={{backgroundColor: 'black'}}>
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">CODINGHUB.com</a>
  </div>
 
</footer>

        </div>
    );
};

export default Footer;