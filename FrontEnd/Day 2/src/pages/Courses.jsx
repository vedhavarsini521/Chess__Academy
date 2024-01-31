import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faGraduationCap, faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from "@mui/icons-material/Menu";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Rating } from '@mui/material';
import academyData from '../components/data';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Coursespage.css';
import Usidebar from '../components/Usidebar';

function Courses() {
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
    <div className='courses'>
      <Usidebar/>
      <div className='cour5'>
        <div className='search-bar'>
          <div className='searchbar1'>
            <input
              type='text'
              placeholder='Search...'
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className='searchbar2'>
            <FontAwesomeIcon className='searfont' icon={faSearch} />
          </div>
        </div>
        <div className="courses-container">
          {filteredCourses.reduce((rows, course, index) => {
            if (index % 2 === 0) {
              rows.push([course]);
            } else {
              rows[rows.length - 1].push(course);
            }
            return rows;
          }, []).map((row, rowIndex) => (
            <div key={rowIndex} className="cour-row">
              {row.map((course) => (
                <div key={course.id} className='cour2'>
                  <div className='cour3'>
                    <div className='cour4'>
                      <div className='cou1'>
                        <div className='cou2'>
                          <img src={course.img} alt='academy'></img>
                        </div>
                        <div className='cou3'>
                          <h2>{course.name}</h2><br></br>
                          <h3>Duration : {course.duration}</h3><br></br>
                          <h4 className='star'> {course.rate}</h4><br></br>
                          <Rating name="star-rating" value={3.5} readOnly precision={0.5} /><br></br>
                        </div>
                      </div>
                      <a href='/more'><button>More Info</button></a>
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

export default Courses;
