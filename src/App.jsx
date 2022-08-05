import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Cards from "./componentes/Cards";
import Contador from "./componentes/Contador";
import {ProductsListContainer} from "./componentes/ProductsListContainer";
import ProductsDetailContainer from "./componentes/ProductsDetailContainer";


function App() {

  return (
    <div className="app">
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<ProductsListContainer />} />
          <Route path="/title/:titleProducts" element={<ProductsListContainer />} />
          <Route path="/id/:idProducts" element={<ProductsDetailContainer />} />

        </Routes>


      </Router>


    </div>
  );
}

export default App 
