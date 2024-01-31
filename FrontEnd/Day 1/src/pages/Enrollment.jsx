import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faGraduationCap, faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from "@mui/icons-material/Menu";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

import '../assets/css/Enrollmentpage.css';
import { Rating } from '@mui/material';
import Usidebar from '../components/Usidebar';


function Enrollment() {
  const [isSidebarOpen1, setIsSidebarOpen1] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSidebar1 = () => {
    setIsSidebarOpen1(!isSidebarOpen1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const [userRating, setUserRating] = useState(3.5);

  
  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
  };

  


  return (
    <div className='ecourses'>
     <Usidebar/>
      <div className='ecour5'>

        <div className='esearch-bar'>
              <input
                type='text'
                placeholder='Search...'
                value={searchTerm}
                onChange={handleSearchChange}
              />
          <FontAwesomeIcon className='esearfont' icon={faSearch} />
            </div>
      <div className='ecour2'>
        <div className='ecour3'>
          <div className='ecour4'>
            <br></br>
            <h2>Time2Chess Academy</h2> <br></br>
            <h3>Course : Beginer level</h3>
            <br></br>
            <h3>Start date : 01/01/2024</h3> <br></br>
            <h3>End date : 31/03/2024</h3> <br></br>
            
            <div className='float'>
              <br></br>
            <a href ="/graph"><button >Learning</button></a>
            </div>
          </div>
        </div> 

        <div className='ecour3'>
          <div className='ecour4'>
            <br></br>
            <h2>Time2Chess Academy</h2> <br></br>
            <h3>Course : Beginer level</h3>
            <br></br>
            <h3>Start date : 01/01/2024</h3> <br></br>
            <h3>End date : 31/03/2024</h3> <br></br>
            
            <div className='float'>
              <br></br>
            <a href ="/graph"><button >Learning</button></a>
            </div>
          </div>
        </div> 

      </div>

      <div className='ecour2'>
        <div className='ecour3'>
          <div className='ecour4'>
            <br></br>
            <h2>Time2Chess Academy</h2> <br></br>
            <h3>Course : Beginer level</h3>
            <br></br>
            <h3>Start date : 01/01/2024</h3> <br></br>
            <h3>End date : 31/03/2024</h3> <br></br>
            
            <div className='float'>
              <br></br>
            <a href ="/graph"><button >Learning</button></a>
            </div>
          </div>
        </div> 

        <div className='ecour3'>
          <div className='ecour4'>
            <br></br>
            <h2>Time2Chess Academy</h2> <br></br>
            <h3>Course : Beginer level</h3>
            <br></br>
            <h3>Start date : 01/01/2024</h3> <br></br>
            <h3>End date : 31/03/2024</h3> <br></br>
            
            <div className='float'>
              <br></br>
            <a href ="/graph"><button >Learning</button></a>
            </div>
          </div>
        </div> 

      </div>

       

      

      </div>

      </div>
    // </div>
  );
}

export default Enrollment;
