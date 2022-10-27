import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaClock, FaUser, FaDollarSign, FaUsers,FaDownload,FaShare, FaBookmark } from 'react-icons/fa';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Details = () => {
    const details= useLoaderData();
    const {name,duration, fee,instructor,intro, logo,students,id}=details
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
        <div className='container container-fluid'>
          <Card  className="mx-auto my-5 d-flex overflow-hidden" style={{ width: ''}}>
        <Card.Header className='d-flex justify-content-between'>
        <h5>{name}</h5>
        <div>
        <Button id="testId" onClick={downloadPdfDocument} className='me-2' variant='outline-primary'><FaDownload></FaDownload></Button>
        <Button variant='outline-primary'><FaBookmark></FaBookmark></Button>
        </div>
        
        </Card.Header>
       <div className='d-lg-flex d-sm-block'>
       <Card.Img style={{height: '20rem'}} variant="top" src={logo} />
        <Card.Body id="divToPrint" >
          <Card.Text>
          <div className='d-flex justify-content-between my-3 px-3'>
          <div><FaClock></FaClock> {duration} </div>
          <div><FaUser></FaUser> {instructor} </div>
         
          <div><FaDollarSign></FaDollarSign>{fee}</div>
          <div><FaUsers></FaUsers>{students}</div>
          </div>
           <p className='px-3'>{intro}</p>
          </Card.Text>
          <div className='d-flex justify-content-between'>
          </div>
        </Card.Body>
       </div>
        <Link to={`/premium/${id}`}><Button variant="primary">Get Premium Access</Button></Link>
      </Card>
        </div>
    );
};

export default Details;