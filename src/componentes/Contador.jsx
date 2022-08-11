import React, { useState } from "react";
import Cards from "./css/Cards.css"

const Contador = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="div-contador">

      <div>
        <div className="text-center">
          <div className="card-body">
            
            <h2 >{count}</h2>
            <div className="container text-center">
            <div className="row row-cols-3">
              <button onClick={() => setCount(count + 1)}> <strong>+</strong></button>
              <button onClick={() => setCount(0)}>Reset</button>
              <button disabled={count <= 0} onClick={() => setCount(count - 1)}> <strong>-</strong></button>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contador;
