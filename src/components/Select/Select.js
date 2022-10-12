import React from 'react';
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Select = (props) => {
  const notify = (value) => {
    toast(value);
  }

  let answer = (e) => {

    if (e.target.getAttribute('results') === props.correctAnswer) {
      notify('Your selected answer is correct')
    }
    else {

      notify('Your selected answer is wrong')
  
    }

  }
  return (
    <div className="col-12 col-md-6 col-lg-6">
      <div className="card bg-secondary text-white p-2 w-75">
        <Form.Group className="mb-2" controlId="formBasicCheckbox">
          <Form.Check onClick={answer} name="quiz" type="radio" label={props.option} results={props.option} inline />
        </Form.Group><ToastContainer />
      </div>
    </div>
  );
};

export default Select;