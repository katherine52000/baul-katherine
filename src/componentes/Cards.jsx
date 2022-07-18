import React, { Component } from "react";
import "./css/Cards.css";


function Card(titulo, ImgUrl, Body) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={ImgUrl}  alt="" />
      </div>
      <div className="card-title">
<h3>titulo de la card</h3>
      </div>
      <div className="card-body">
        <p>{Body} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, dolorem</p>
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

