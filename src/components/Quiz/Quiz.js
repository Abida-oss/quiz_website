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
      <h1 style={{paddingBottom:'2rem'}}>{data.name}</h1>
      {questions.map(ques => (
        <QuizInfo key={ques.id} ques={ques}></QuizInfo>
      ))}
    </div>
  );
};

export default Quiz;
