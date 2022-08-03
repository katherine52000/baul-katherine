import React, { Component } from "react";
import "./css/Cards.css";


function Card({producto}) {
  return (
    <div className="card-container">
      <div className="image-container">
     <img src="./img/tdb1.jpg " alt="" />
      </div>
      <div className="card-title">
        <h3>{producto.title}</h3>
      </div>
      <div className="card-body">
        <p>{producto.price}</p>
      </div>
      <div className="btn">
        <button>
          <a>view more</a>
        </button>
      </div>
    </div>

  );

  
}

export default Card;
