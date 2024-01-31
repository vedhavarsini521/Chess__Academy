import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';

// // ... (import statements)

import { faUser, faBook, faGraduationCap, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from "@mui/icons-material/Menu";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';  // Import the faPhone icon
import { Rating } from '@mui/material';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

import '../assets/css/Moreinfopage.css';
import Usidebar from '../components/Usidebar';

export default function Moreinfo() {
  return (
    <div className='moreinfo'>
      <div className='more'>
        <Usidebar />
        <div className='mor2'>
          {/* Course 1 */}
          <div className='mor3'>
            <div className='mor4'>
              <center>
                <h2>Time2Chess Academy</h2>
              </center>
              <br></br>
              <div className='mor7'>
                <div className='mor5'>
                  <h3>Chennai</h3>
                  <br></br>
                  <h3>Course for beginners</h3>
                  <br></br>
                  <h3><FontAwesomeIcon icon={faPhone} /> 9876543210</h3>
                </div>
                <div className='mor6'>
                  <h3>Online Mode : 6-8 hours per week</h3>
                  <br></br>
                  <h3>Offline Mode : 6-8 hours per week</h3>
                  <br></br>
                  <a href='/enr'><button className='morbut'>Enroll now</button></a>
                </div>
              </div>
            </div>
          </div>

          {/* Course 2 */}
          <div className='mor3'>
            <div className='mor4'>
              <center>
                <h2>Time2Chess Academy</h2>
              </center>
              <br></br>
              <div className='mor7'>
                <div className='mor5'>
                  <h3>Chennai</h3>
                  <br></br>
                  <h3>Course for intermediate</h3>
                  <br></br>
                  <h3><FontAwesomeIcon icon={faPhone} /> 9876543210</h3>
                </div>
                <div className='mor6'>
                  <h3>Online Mode : 6-8 hours per week</h3>
                  <br></br>
                  <h3>Offline Mode : 6-8 hours per week</h3>
                  <br></br>
                  <button className='morbut'>Enroll now</button>
                </div>
              </div>
            </div>
          </div>

          {/* Course 3 */}
          <div className='mor3'>
            <div className='mor4'>
              <center>
                <h2>Time2Chess Academy</h2>
              </center>
              <br></br>
              <div className='mor7'>
                <div className='mor5'>
                  <h3>Chennai</h3>
                  <br></br>
                  <h3>Course for advanced</h3>
                  <br></br>
                  <h3><FontAwesomeIcon icon={faPhone} /> 9876543210</h3>
                </div>
                <div className='mor6'>
                  <h3>Online Mode : 6-8 hours per week</h3>
                  <br></br>
                  <h3>Offline Mode : 6-8 hours per week</h3>
                  <br></br>
                  <button className='morbut'>Enroll now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
