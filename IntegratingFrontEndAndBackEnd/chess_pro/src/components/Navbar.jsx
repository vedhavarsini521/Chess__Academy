// import {Link} from "react-router-dom";
// import '../pages/About';
// import '../pages/Contact';
// import '../pages/Home';
// import "../components/Nav.css";
// import "../pages/Login";
// // import MenuIcon from '@mui/icons-material/Menu';
// //  import Back from '../assets/images/bg.jpg';


// function Navbar()
// {
//     return(
//         <>
//         {/* <div style={{backgroundImage:`url(${Back})`}}> */}
//         <body className="nav">
//         <header>
//         <div className="navbar">
//             <div className="logo"><a href="#">Chess Inscribe</a></div>
//                 <div className="links">
//                     <ul>
//                     <li><a href="/">Home</a></li>
//                     <li><a href="/about">About</a></li>
//                     <li><a href="/contact">Contact</a></li>
//                     <li><a href="/login">Login</a></li>
//                     </ul>
                   
//                     <a href="#" class="action_btn">Get Started</a>
//                     <div class="toggle_btn" onClick={toggleSidebar}>
//                         <i class="fa-regular fa-bars"></i>

//                     </div>
//                 </div>

//                 <div className="dropdown">
//                 <li><a href="/">Home</a></li>
//                     <li><a href="/about">About</a></li>
//                     <li><a href="/contact">Contact</a></li>
//                     <li><a href="/login">Login</a></li>
//                     <li><a href="#" class="action_btn">Get Started</a></li>
//                 </div>

//         </div>
//         </header>
//         </body>
//         </>
//     )
// }

// export default Navbar;


// Navbar.js

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "../pages/About";
import "../pages/Contact";
import "../pages/Home";
import "../components/Nav.css";
import "../pages/Login";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={`nav ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <header>
          <div className="navbar">
            <div className="logo">
              <a href="#">Chess Inscribe</a>
            </div>
            <div className="links">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/log">Login</a></li>
              </ul>
              <a href="#" className="action_btn">
                Get Started
              </a>
            </div>
            
            <div className="toggle_btn" onClick={toggleSidebar}>
                <MenuIcon />
              </div>
          </div>

          <div className={isSidebarOpen ? 'sidebar sidebar-open':'sidebar sidebar-close'}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/log">Login</a></li>
              <li><a href="#" className="action_btn">Get Started</a></li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;






