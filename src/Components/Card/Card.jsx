import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";
function Card({ food, onAdd, onRemove }) {
  const [count, setCount] = useState(0);
  const { title, Image, price, id } = food;

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(food);
    
  };


  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(food);
  };

  return (
    <div className="card">
     
      <div className="image__container">
        <img src={Image} alt={title} />
      </div>
      <h4 className="card__title">
        {title}  
        <span className="card__price">₽ {price}</span> <div className="btn-container"> 
        <Button title={"+"} type={"add"} onClick={handleIncrement}  />
        
      </div>
      </h4>
    </div>
  );
}

export default Card;