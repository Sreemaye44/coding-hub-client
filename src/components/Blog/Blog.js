import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Blog = () => {
    return (
        <CardGroup className='container container-fluid'>
      <Card className='me-3 '>
        <Card.Body>
          <Card.Title>What is cors?</Card.Title>
          <Card.Text>
CORS is an abbreviation for Cross-Origin Response Sharing. It is what allows the website on one URL to request data from a different URL, and it frustrates both the frontend and backend devs alike. You might've added an image URL only to end up with something like this.Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='me-3'>
        <Card.Body>
          <Card.Title>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
          <Card.Text>
          The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. Its handle user authentication system. Some other alternatives of firebase for authentication are Auth0, Passport, MongoDB, Okta, JSON Web Token, Amazon Cognito etc.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card >
        <Card.Body>
          <Card.Title>How does the private route work?</Card.Title>
          <Card.Text>
          Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route. So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card >
        <Card.Body>
          <Card.Title>What is Node? How does Node work?</Card.Title>
          <Card.Text>
          A node is a basic unit of a data structure, such as a linked list or tree data structure. Nodes contain data and also may link to other nodes. Links between nodes are often implemented by pointers. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications. Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
    );
};

export default Blog;