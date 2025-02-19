import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";  
import Homescreen from "./screens/Homescreen";  
import "./App.css";  
import Hikes from "./screens/Hikes";
import Profile from "./screens/Profile";
import Articles from "./screens/Articles";
import Knowledge from "./screens/Knowledge";

function App() {
  return ( 
    <BrowserRouter>  
      <div className="App">
        <Header />  
        <Routes>
          <Route path="/" element={<Homescreen />} /> 
          <Route path="/hikes" element={<Hikes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/knowledge" element={<Knowledge />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
