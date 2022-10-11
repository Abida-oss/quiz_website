import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Nab from "./components/Nab/Nab";
import Quiz from "./components/Quiz/Quiz";
import Statistics from "./components/Statistics/Statistics";

import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
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
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Statistics></Statistics>,
        },
        {
          path: "/Cards/:quizzId",
          loader: async ({ params }) => {
            console.log();
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizzId}`
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
