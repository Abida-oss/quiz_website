import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import './Ques.css';

const Ques = () => {
    return (
      <div className="ques">
        <h3>Frequently Ask Question</h3>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What is the purpose of react router?
            </Accordion.Header>
            <Accordion.Body className="ques">
              React Router is a standard library for routing in React. React
              Router is a state container for the current location , or URL. It
              keeps track of the location and renders different Route s as it
              changes, and it also gives you tools to update the location using
              Link's and the history API. It enables the navigation among views
              of various components in a React Application, allows changing the
              browser URL, and keeps the UI in sync with the URL.
            </Accordion.Body>
          </Accordion.Item>
          
        </Accordion>
      </div>
    );
};

export default Ques;