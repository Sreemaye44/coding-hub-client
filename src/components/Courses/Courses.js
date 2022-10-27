import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const Courses = () => {
    const courses= useLoaderData();

    return (
        <div className='container container-fluid d-lg-flex d-sm-block mx-auto justify-content-between mt-4 '>
            <div className='h-50 ms-4 mb-3 d-grid gap-2'>
            {
                courses.map(course=><Link to={`/details/${course.id}`}><Button className='m-2 w-75'  variant="outline-dark" size="md">{course.name}</Button></Link>)
            }
            </div>
            <div className='m-1 w-100 mx-auto bg-light bg-gradient p-4 row  row-cols-md-3 row-cols-sm-6 g-4 shadow-lg p-3 mb-5 rounded'>
           
                {
                    courses.map(course=>
                          <Link to={`/details/${course.id}`} className='text-decoration-none'><div className="col">
                          <div className="card">
                            <img src={course.logo} style={{height: '230px'}} className="card-img-top" alt="..."/>
                           <div className="card-body">
                        <h5 className="card-title">{course.name}</h5>
                             
                             <Button variant="dark" className='mt-2'>See Details</Button>
                          </div>
                         </div>
                        </div></Link>
                       
                    )
                }
            </div>
        </div>
    );
};

export default Courses;