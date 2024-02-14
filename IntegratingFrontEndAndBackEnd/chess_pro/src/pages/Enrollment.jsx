import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Rating } from '@mui/material';
import enrollcourses from '../components/enrolldata';
import '../assets/css/Enrollmentpage.css';
import Usidebar from '../components/Usidebar';

function Enrollment() {
  const [isSidebarOpen1, setIsSidebarOpen1] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [enrollcourse, setEnrollsourse] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  // const toggleSidebar1 = () => {
  //   setIsSidebarOpen1(!isSidebarOpen1);
  // };

  useEffect(() => {
    setEnrollsourse(enrollcourses);
    setFilteredCourses(enrollcourses);
  }, []);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredCourses = enrollcourse.filter((course) =>
      course.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCourses(filteredCourses);
  };

  return (
    <div className='ecourses'>
      <Usidebar/>
      <div className='ecour5'>
        <div className='esearch-bar'>
          <div className='esearchbar1'>
            <input
              type='text'
              placeholder='Search...'
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className='esearchbar2'>
            <FontAwesomeIcon className='esearfont' icon={faSearch} />
          </div>
        </div>
        <div className="ecourses-container">
          {filteredCourses.reduce((rows, course, index) => {
            if (index % 3 === 0) {
              rows.push([course]);
            } else {
              rows[rows.length - 1].push(course);
            }
            return rows;
          }, []).map((row, rowIndex) => (
            <div key={rowIndex} className="ecour-row">
              {row.map((course) => (
                <div key={course.id} className='ecour2'>
                  <div className='ecour3'>
                    <div className='ecour4'>
                      <div className='ecou1'>
                        <div className='ecou2'>
                          <img src={course.img} alt='academy'></img>
                        </div>
                        <div className='ecou3'>
                          <h2>{course.name}</h2><br></br>
                          <h3>Course : {course.course}</h3><br></br>
                          <h3>Duration : {course.duration}</h3><br></br>
                          <h3>Mode : {course.mode}</h3><br></br>  
                          
                      {/* <a href='/more'> */}
                        <button>My Learning</button>
                        {/* </a> */}
                        </div>
                      </div>
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

export default Enrollment;
