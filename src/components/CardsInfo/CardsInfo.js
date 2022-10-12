import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CardsInfo.css";

const CardsInfo = ({ quiz }) => {
  const { id, name, logo,total } = quiz;
  return (
      <div className='display'>
      <Card style={{ width: '18rem' }}>
      <Card.Img className='img' variant="top" src={logo} />
      <Card.Body>
        <Card.Title> {name}</Card.Title>
        <Card.Title>Total: {total}</Card.Title>
        <Button variant="secondary"><Link  to={`${id}`} className="btn1">
      Start</Link></Button>
      </Card.Body>
    </Card>
    </div>

  
    
  );
};

export default CardsInfo;
