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
import Quiz from './components/Quiz/Quiz';
import Errorpage from './Errorpage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>,
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          }
        },
        {

          path: '/blog',
          element: <Blog></Blog>

        },
        {

          path: '/statistics',
          element: <Statistics></Statistics>,
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          }

        },
        {

          path: '/topics',
          element: <Topics></Topics>,
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          }

        },
        {
          path: '/quiz/:quizid',
          loader: async ({ params }) => {
            // console.log(params);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizid}`);
          },
          element: <Quiz></Quiz>
        }

      ]
    },
    {
      path: '/*',
      element: <Errorpage></Errorpage>
    }

  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
