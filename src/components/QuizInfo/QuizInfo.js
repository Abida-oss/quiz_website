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
    <div style={{padding:'2rem'}}>
      <Card>
        <Card.Header as="h5">
          {question}
          <Button onClick={handleClick}>
            <FontAwesomeIcon icon={faEye} />
          </Button>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <div className='container'>
              <div className="row g-2">
                {options.map(option => (
                  <Select key={option.id} option={option}
                    correctAnswer={correctAnswer}></Select>
                ))}
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default QuizInfo;