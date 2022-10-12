import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizInfo from "../QuizInfo/QuizInfo";

const Quiz = () => {
  const quizes = useLoaderData();
  const { data } = quizes;
  const { questions } = data;
  //   console.log(questions);
  return (
    <div>
      {questions.map(ques => (
        <QuizInfo key={ques.id} ques={ques} Data={data}></QuizInfo>
      ))}
    </div>
  );
};

export default Quiz;
