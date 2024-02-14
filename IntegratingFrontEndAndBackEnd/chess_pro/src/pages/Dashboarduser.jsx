import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faGraduationCap, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Userdashboardpage.css';
import MenuIcon from "@mui/icons-material/Menu";
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

import '../pages/Profile';
import '../pages/Home';
import '../pages/Courses';
import '../pages/Home';
import '../pages/Enrollment';
import '../pages/DashboardNavbar';
import Usidebar from '../components/Usidebar';
// import "newimg" as '../assets/images/userbg.jpg';
// import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

function Dashboarduser() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className='dashboard'>
      <Usidebar/>
          <div className='dash1'>
            <center>
            <h1>Welcome to Chess Inscribe</h1>
            </center>
            {/* <img src='newimg' alt='img'></img> */}
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Dashboarduser;
