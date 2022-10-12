import React from 'react';
import Card from "react-bootstrap/Card";
import Select from '../Select/Select';
import './QuizInfo.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'react-bootstrap';

const QuizInfo = (props) => {
    const { question, options, correctAnswer } = props.ques;
    const handleClick = (e) => {
        e.preventDefault();
        alert(correctAnswer);
    }
    return (
      <div>
        <Card>
        <h1>{props.Data.name}</h1>
          <Card.Header as="h5">
            {question}
            <Button onClick={handleClick}>
              <FontAwesomeIcon icon={faEye} />
            </Button>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              {options.map(option => (
                  <Select key={option.id} option={option}
                  correctAnswer={correctAnswer}></Select>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
};

export default QuizInfo;