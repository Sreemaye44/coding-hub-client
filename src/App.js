import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

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
          element: <Login></Login>

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
