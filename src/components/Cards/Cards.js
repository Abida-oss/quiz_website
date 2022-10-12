import React from "react";
import { useLoaderData } from "react-router-dom";
import CardsInfo from "../CardsInfo/CardsInfo";
import Card from 'react-bootstrap/Card';
import logo from '../../images/index1.jpg'

const Cards = () => {
  const { data } = useLoaderData();
  // console.log(data);
  return (
    <div>
<Card>
        <Card.Img height="300px"  variant="top" src={logo} />
        <Card.Body>
          <Card.Text>
          Following quiz provides Multiple Choice Questions (MCQs) related to Basics of Computer Science. You will have to read all the given answers and click over the correct answer. If you are not sure about the answer then you can check the answer using Show Answer button. 
          </Card.Text>
        </Card.Body>
      </Card>

      <h1 style={{paddingTop:'2rem'}}>All Quizes</h1>




      {data.map(quiz => (
        <CardsInfo key={quiz.id} quiz={quiz}></CardsInfo>
      ))}
    </div>
  );
};

export default Cards;
