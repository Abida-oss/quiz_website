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
          <Accordion.Item eventKey="1">
            <Accordion.Header>How does context API works?</Accordion.Header>
            <Accordion.Body className="ques">
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. The new React
              Context API, introduced with React v.16.3, allows us to pass data
              through our component trees, giving our components the ability to
              communicate and share data at different levels.
              React.createContext() is all you need. It returns a consumer and a
              provider. Provider is a component that as it's names suggests
              provides the state to its children. It will hold the "store" and
              be the parent of all the components that might need that store.
              Consumer as it so happens is a component that consumes and uses
              the state.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What is useRef()?</Accordion.Header>
            <Accordion.Body className="ques">
              The useRef is a hook that allows to directly create a reference to
              the DOM element in the functional component. useRef returns a
              mutable ref object whose .current property is initialized to the
              passed argument (initialValue). The returned object will persist
              for the full lifetime of the component.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
};

export default Ques;