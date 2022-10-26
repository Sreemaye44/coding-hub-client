import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaClock, FaUser, FaDollarSign, FaUsers,FaDownload,FaShare, FaBookmark } from 'react-icons/fa';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Details = () => {
    const details= useLoaderData();
    const {name,duration, fee,instructor,intro, logo,students}=details
    console.log(details);

    const downloadPdfDocument = () => {
        const input = document.getElementById("divToPrint");
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG',0,0);
                pdf.save(`${name}.pdf`);
            })
    }
    

    return (
        <Card  className="mx-auto my-5 d-flex" style={{ width: '30rem'}}>
        <Card.Header className='d-flex justify-content-end'>
        <Button id="testId" onClick={downloadPdfDocument} className='me-2' variant='outline-primary'><FaDownload></FaDownload></Button>
        <Button variant='outline-primary'><FaBookmark></FaBookmark></Button>
        
        </Card.Header>
        <Card.Img style={{height: '20rem'}} variant="top" src={logo} />
        <Card.Body id="divToPrint" >
          <Card.Title  className='text-center'>{name}</Card.Title>
          <Card.Text>
          <div className='d-flex justify-content-between my-3'>
          <div><FaClock></FaClock> {duration} </div>
          <div><FaUser></FaUser> {instructor} </div>
         
          <div><FaDollarSign></FaDollarSign>{fee}</div>
          <div><FaUsers></FaUsers>{students}</div>
          </div>
           <p>{intro}</p>
          </Card.Text>
          <div className='d-flex justify-content-between'>
          </div>
        </Card.Body>
        <Link to='/premium'><Button className="mx-3 mb-2" variant="primary">Get Premium Access</Button></Link>
      </Card>
    );
};

export default Details;