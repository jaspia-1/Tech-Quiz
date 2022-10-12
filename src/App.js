import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarHeader from './components/NavbarHeader/NavbarHeader';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Main from './Layout /Main';
import Blog from './components/BLog/Blog';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics /Topics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>
        },
        {

          path: '/blog',
          element: <Blog></Blog>

        },
        {

          path: '/statistics',
          element: <Statistics></Statistics>

        },
        {

          path: '/topics',
          element: <Topics></Topics>

        },


      ]
    }

  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
