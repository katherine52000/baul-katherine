import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Cards from "./componentes/Cards";

function App(){
 
    return (
      <div className="app">
        <Router>
          <Navbar />

          <Cards 
          titulo="Card title"
           Body="loremasdfghjkl" />


        </Router>
      </div>
    );
  }


export default App;
