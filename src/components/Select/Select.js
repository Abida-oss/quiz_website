import React from 'react';
import Form from "react-bootstrap/Form";

const Select = (props) => {

    let test = (e) => {
        // console.log(e.target.getAttribute('results'));
        // console.log(props.correctAnswer);
        if (e.target.getAttribute('results') === props.correctAnswer) {
            alert('Correct')
        }
        else{alert("Wrong");}

    }
  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name="quiz" type="radio" label={props.option} onClick={test} results={props.option} inline />
      </Form.Group>
    </div>
  );
};

export default Select;