import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  
import Homescreen from "./screens/Homescreen";  
import "./App.css";  

function App() {
  return ( 
    <BrowserRouter>  
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homescreen />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
