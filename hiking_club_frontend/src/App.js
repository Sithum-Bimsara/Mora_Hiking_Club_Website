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

// Admin Screens
import AdminArticles from "./screens/AdminArticles";
import AdminKnowledge from "./screens/AdminKnowledge";
import AdminEvents from "./screens/AdminEvents";
import AdminDashboard from "./screens/AdminDashboard";
import AdminApplicants from "./screens/AdminApplicants";

// New HikeDetails Component
import HikeDetails from "./screens/HikeDetails";

// Layout Component
function Layout() {
  const location = useLocation();
  const isHomeScreen = location.pathname === "/";
  const isLogin = location.pathname === "/login";
  const isRegister= location.pathname === "/register";
  const isAboutUs= location.pathname === "/about";
  const isArticles= location.pathname === "/articles";
  const isHikes= location.pathname === "/hikes";
  const isKnowledge= location.pathname === "/knowledge";

  return (
    <>
      {/* Conditionally render Header1 for HomeScreen and Header for other pages */}
      {(isHomeScreen || isLogin || isRegister || isAboutUs || isArticles || isHikes || isKnowledge) ? <Header1 /> : <Header />}



      {/* Routes for all pages */}
      <Routes>
        <Route path="/" element={<Homescreen />} /> 
        <Route path="/hikes" element={<Hikes />} />
        <Route path="/hike-details/:id" element={<HikeDetails />} /> {/* Add this route */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />

        {/* Admin Routes */}
        <Route path="/AdminArticles" element={<AdminArticles />} />
        <Route path="/AdminKnowledge" element={<AdminKnowledge />} />
        <Route path="/AdminEvents" element={<AdminEvents />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/AdminApplicants" element={<AdminApplicants />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;