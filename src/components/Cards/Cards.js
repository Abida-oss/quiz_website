import React from "react";
import { useLoaderData } from "react-router-dom";
import CardsInfo from "../CardsInfo/CardsInfo";

const Cards = () => {
  const { data } = useLoaderData();
  // console.log(data);
  return (
    <div>
      <h1 style={{paddingTop:'2rem'}}>All Quizes</h1>
      {data.map(quiz => (
        <CardsInfo key={quiz.id} quiz={quiz}></CardsInfo>
      ))}
    </div>
  );
};

export default Cards;
