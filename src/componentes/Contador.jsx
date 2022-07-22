import React, { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Contador</h1>
          <h2 className="my-5">{count}</h2>
          <button className="btn border-secondary .g-light mx-3" onClick={()=> setCount(count+1)}>+</button>
          <button className="btn border-secondary bg-light mx-3"onClick={()=> setCount(count-1)}>-</button>
          <button className="btn btn-secondary mx-3" onClick={()=> setCount(0)}>Reset</button>

        </div>
      </div>
    </div>
  );
};

export default Contador;
