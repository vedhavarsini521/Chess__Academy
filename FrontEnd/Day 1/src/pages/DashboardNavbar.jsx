import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faGraduationCap, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from "@mui/icons-material/Menu";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import '../assets/css/DashboardNavbarpage.css';


function DashboardNavbar() {

  const [isSidebarOpen1, setIsSidebarOpen1] = useState(false);

  const toggleSidebar1 = () => {
    setIsSidebarOpen1(!isSidebarOpen1);
  };

  return (
    <div className={`dcourses ${isSidebarOpen1 ? "sidebar-open1" : ""}`}>
    <div className='dcours'>
      <div className='dcour'>
        <div className="dtog_btn" onClick={toggleSidebar1}>
          <MenuIcon />
        </div>
        <div className='dcour1'>

        <h2><a href="/profile"><FontAwesomeIcon className="dashicon" icon={faUser} />Profile</a></h2>
          <h2><a href="/courses"><FontAwesomeIcon className="dashicon" icon={faBook} />Courses</a></h2>
          <h2><FontAwesomeIcon className="dashicon" icon={faGraduationCap} />Enrolled courses</h2>
          <h2><a href="/dash"><FontAwesomeIcon className="dashicon" icon={faTachometerAlt} />Dashboard</a></h2>

          <h2><a href='/'><FontAwesomeIcon className="dashicon" icon={faSignOutAlt} />Logout</a></h2>

          <h2><a href="/dashb"> <FontAwesomeIcon icon={faArrowLeft} />Back</a></h2>

         
        </div>
        <div className={isSidebarOpen1 ? 'sidebar1 sidebar-open1':'sidebar1 sidebar-close1'}>
          
          <div className="tog_btn1" onClick={toggleSidebar1}>
          <MenuIcon />
        </div>

        <ul>
         <li><a href="/profile"><FontAwesomeIcon className="dashicon" icon={faUser} /></a></li>
            <li><a href="/courses"><FontAwesomeIcon className="dashicon" icon={faBook} /></a></li>
            <li><a href="/enroll"><FontAwesomeIcon className="dashicon" icon={faGraduationCap} /></a></li>
            <h2><a href="/dashb"><FontAwesomeIcon className="dashicon" icon={faTachometerAlt} /></a></h2> 
            <li><a href="/dashb"> <FontAwesomeIcon className="dashicon" icon={faArrowLeft} /></a></li>


            <li><a href="/"><FontAwesomeIcon className="dashicon" icon={faSignOutAlt} /></a></li>
          </ul>

        
        </div>
      </div>

      <div className='dcour2'>
        <img src='src\assets\images\dashbg.webp' alt='bg'></img>
        {/* <h1>Hello</h1> */}
      </div>

      <div className='dcour3'>
        <h2>Welcome to Your DashBoard</h2>
      </div>

      <div className='dcour4'>
        <h3>Name : Varshu</h3>
        <br></br>
        <h3>Login Id : 10001</h3>
      </div>
      <br></br>

    <div className='dcour7'>
      <div className='dcour5'>
        <div className='dcour6'>
        <h3>Total number of courses :  </h3>
        <h2>9</h2>
        </div>

        <div className='dcour6'>
        <h3>Total number of courses Enrolled :  </h3>
        <h2>2</h2>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className='dcour5'>
        <div className='dcour6'>
        <h3>Total number of classes :  </h3>
        <h2>10</h2>
        </div>

        <div className='dcour6'>
        <h3>Total number of classes attended :  </h3>
        <h2>9</h2>
        </div>
      </div>

      </div>

      </div>
      </div>
  );
}

export default DashboardNavbar;
