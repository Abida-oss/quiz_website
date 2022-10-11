import React from "react";
import { Link } from "react-router-dom";
import "./CardsInfo.css";

const CardsInfo = ({ quiz }) => {
  const { id, name, logo } = quiz;
  return (
    
    <div className="display">
      <div>
        <img className="img" src={logo} alt="" />
      </div>
      <div className="txt">
        <h3>{name}</h3>
        <Link to={`${id}`}>Start</Link>
      </div>
    </div>
  );
};

export default CardsInfo;
