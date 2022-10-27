import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import Details from './components/Details/Details';
import FAQ from './components/FAQ/FAQ';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PremiumAccess from './components/PremiumAccess/PremiumAccess';
import Register from './components/Register/Register';
import Main from './layouts/Main';
import NotFound from './NotFound/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
          loader:(()=>fetch('https://coding-hub-server.vercel.app/course'))

        },
        {
          path: '/details/:id',
          element: <Details></Details>,
          loader : ({params})=>fetch(`https://coding-hub-server.vercel.app/details/${params.id}`)
        },
        {
          path: '/premium/:id',
          element:<PrivateRoute><PremiumAccess></PremiumAccess></PrivateRoute>,
          loader: ({params})=>fetch(`https://coding-hub-server.vercel.app/details/${params.id}`)
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        }

      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ])
  return (
    
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
