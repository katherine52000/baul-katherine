import React, { Component } from "react";
import "./css/Cards.css";
import Contador from "./Contador"
import { Link } from "react-router-dom";


function Card({producto}) {
  return (
    
    <div className="card-container">
      <div className="image-container">
  <div className="div-imagen"><img src={producto.image} alt="" /></div>
      </div>    
      <div className="card-title">
        <h3>{producto.title}</h3>
      </div>
      <div className="card-body">
        <p className="price">${producto.price}</p>
      </div>
      <div>
        <Contador/>
      </div>
      <div className="btn">
        <button>
          <Link to={`/id/${producto.id}`}>view more</Link>
        </button>
    
      </div>
    </div>
    
  );

  
}

export default Card;
