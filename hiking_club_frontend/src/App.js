// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";  
// import Header1 from "./components/Header1";

// import Homescreen from "./screens/Homescreen";  
// import "./App.css";  
// import Hikes from "./screens/Hikes";
// import Profile from "./screens/Profile";
// import Articles from "./screens/Articles";
// import Knowledge from "./screens/Knowledge";
// import Login from "./screens/Login";
// import Register from "./screens/Register";
// import AboutUs from "./screens/AboutUs"; 

// function App() {
//   return ( 
//     <BrowserRouter>  
//       <div className="App">
//         <Header />  
//         <Routes>
//           <Route path="/" element={<Homescreen />} /> 
//           <Route path="/hikes" element={<Hikes />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/articles" element={<Articles />} />
//           <Route path="/knowledge" element={<Knowledge />} />
//           <Route path="/login" element={<Login/>} />
//           <Route path="/register" element={<Register/>} />
//           <Route path="/about" element={<AboutUs/>} />

           
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";  
import Header1 from "./components/Header1";  
import Homescreen from "./screens/Homescreen";  
import "./App.css";  
import Hikes from "./screens/Hikes";
import Profile from "./screens/Profile";
import Articles from "./screens/Articles";
import Knowledge from "./screens/Knowledge";
import Login from "./screens/Login";
import Register from "./screens/Register";
import AboutUs from "./screens/AboutUs"; 
import Footer from "./components/Footer";
import Header2 from "./components/Header2";

function Layout() {
  const location = useLocation();
  const isHomeScreen = location.pathname === "/";

  return (
    <>
      {isHomeScreen ? <Header1 /> : <Header />}
      <Routes>
        <Route path="/" element={<Homescreen />} /> 
        <Route path="/hikes" element={<Hikes />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <div>
      <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;