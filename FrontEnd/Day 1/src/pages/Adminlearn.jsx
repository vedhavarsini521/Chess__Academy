import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faGraduationCap, faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from "@mui/icons-material/Menu";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Rating } from '@mui/material';
import academyData from '../components/data';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Adminlearnpage.css';
import Asidebar from '../components/Asidebar';

function Adminlearn() {
  const [isSidebarOpen1, setIsSidebarOpen1] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [academies, setAcademies] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const toggleSidebar1 = () => {
    setIsSidebarOpen1(!isSidebarOpen1);
  };

  useEffect(() => {
    setAcademies(academyData);
    setFilteredCourses(academyData);
  }, []);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredCourses = academies.filter((course) =>
      course.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCourses(filteredCourses);
  };

  return (
    <div className='lcourses'>
      <Asidebar/>
      <div className='lcour5'>
        <div className='lsearch-bar'>
          <div className='lsearchbar1'>
            <input
              type='text'
              placeholder='Search...'
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className='lsearchbar2'>
            <FontAwesomeIcon className='lsearfont' icon={faSearch} />
          </div>
        </div>
        <div className="lcourses-container">
          {filteredCourses.reduce((rows, course, index) => {
            if (index % 3 === 0) {
              rows.push([course]);
            } else {
              rows[rows.length - 1].push(course);
            }
            return rows;
          }, []).map((row, rowIndex) => (
            <div key={rowIndex} className="lcour-row">
              {row.map((course) => (
                <div key={course.id} className='lcour2'>
                  <div className='lcour3'>
                    <div className='lcour4'>
                      <div className='lcou1'>
                        <div className='lcou2'>
                          <img src={course.img} alt='academy'></img>
                        </div>
                        <div className='lcou3'>
                          <h2>{course.name}</h2><br></br>
                          {/* <h3>Duration : {course.duration}</h3><br></br> */}
                          {/* <h4 className='lstar'> {course.rate}</h4><br></br> */}
                          {/* <Rating name="lstar-rating" value={3.5} readOnly precision={0.5} /><br></br> */}
                        </div>
                      </div>
                      <a href='/admcour'><button>More Info</button></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Adminlearn;
