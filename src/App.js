import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Nab from "./components/Nab/Nab";
import Ques from "./components/Ques/Ques";
import Quiz from "./components/Quiz/Quiz";
import Statistics from "./components/Statistics/Statistics";
import logo from "./images/index1.jpg";
import Card from 'react-bootstrap/Card';
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <div><Card.Img className='img' src={logo} /> </div> },
        { path: "nav", element: <Nab></Nab> },
        {
          path: "/Cards",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Cards></Cards>,
        },
        {
          path: "/Statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/Ques",
          element:<Ques></Ques>,
        },
        {
          path: "/Cards/:quizId",
          loader: async ({ params }) => {
            console.log();
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <Quiz></Quiz>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
