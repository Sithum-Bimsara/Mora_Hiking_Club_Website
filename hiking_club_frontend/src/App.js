import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";  
import Homescreen from "./screens/Homescreen";  
import "./App.css";  

function App() {
  return ( 
    <BrowserRouter>  
      <div className="App">
        <Header />  
        <Routes>
          <Route path="/" element={<Homescreen />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
