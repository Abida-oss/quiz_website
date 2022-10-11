import React from 'react';
import "./CardsInfo.css";
import { Button } from 'react-bootstrap';

const CardsInfo = ({quiz}) => {
    const { name, logo } = quiz;
    return (
      <div className='display'>
        <div>
          <img className='img' src={logo} alt="" />
        </div>
        <div className='txt'>
          <h3>{name}</h3>
          <Button >Start</Button>
        </div>
      </div>
    );
};

export default CardsInfo;