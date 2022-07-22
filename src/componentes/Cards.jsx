import React, { Component } from "react";
import "./css/Cards.css";


function Card(cardContent) {
  return (
    <div className="card-container">
      <div className="image-container">
     <img src="./img/tdb1.jpg " alt="" />
      </div>
      <div className="card-title">
        <h3>{cardContent.titulo}</h3>
      </div>
      <div className="card-body">
        <p>{cardContent.Body}</p>
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
