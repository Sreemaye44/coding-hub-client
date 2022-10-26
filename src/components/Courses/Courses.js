import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const Courses = () => {
    const courses= useLoaderData();

    return (
        <div className='container d-flex mx-auto justify-content-between  mt-4 '>
            <div className='w-25 h-50 bg-dark me-5 d-grid gap-2 p-2'>
            {
                courses.map(course=><Link to={`/details/${course.id}`}><Button className='m-2' variant="outline-warning" size="lg">{course.name}</Button></Link>)
            }
            </div>
            <div className='mt-1 w-75 bg-dark row row-cols-1 row-cols-md-3 g-4'>
           
                {
                    courses.map(course=>
                          <div className="col">
                          <div className="card">
                            <img src={course.logo} style={{height: '230px'}} className="card-img-top" alt="..."/>
                           <div className="card-body">
                        <h5 className="card-title">{course.name}</h5>
                             
                             <Button variant="outline-dark" className='mt-2'>See Details</Button>
                          </div>
                         </div>
                        </div>
                       
                    )
                }
            </div>
        </div>
    );
};

export default Courses;