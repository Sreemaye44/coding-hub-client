import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Courses from './components/Courses/Courses';
import Details from './components/Details/Details';

function App() {
  const route= createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {path: '/',
         element: <Home></Home>
        },
        {
          path: '/register',
          element: <Register></Register>

        },
        {
          path: '/login',
          element: <Login></Login>

        },
        {
          path: '/course',
          element: <Courses></Courses>,
          loader:(()=>fetch('http://localhost:5000/course'))

        },
        {
          path: '/details/:id',
          element: <Details></Details>,
          loader :
        }

      ]
    }
  ])
  return (
    
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
