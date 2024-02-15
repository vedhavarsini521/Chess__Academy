import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Rating } from '@mui/material';
import '../assets/css/Enrollmentpage.css';
import Usidebar from '../components/Usidebar';
import axios from 'axios';
import jsPDF from 'jspdf';

function Enrollment() {
  const [isSidebarOpen1, setIsSidebarOpen1] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [enrollcourse, setEnrollsourse] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  const fetchEnrolledCourses = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/api/enroll/${userId}`);
      setEnrollsourse(response.data);
      setFilteredCourses(response.data);
    } catch (error) {
      console.error('Error fetching enrolled courses:', error);
    }
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredCourses = enrollcourse.filter((course) =>
      course.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCourses(filteredCourses);
  };

  const generatePDF = (courseName, joinedDate, endDate, rating) => {
    const doc = new jsPDF();
    doc.text(`Course Name: ${courseName}`, 10, 10);
    doc.text(`Joined Date: ${joinedDate}`, 10, 20);
    doc.text(`End Date: ${endDate}`, 10, 30);
    doc.text(`Rating: ${rating}`, 10, 40);
    doc.save(`${courseName}_Syllabus.pdf`);
    alert('Syllabus downloaded');
  };

  const handleLearnNow = (courseId, courseName, joinedDate, endDate, rating) => {
    console.log(`Learn Now clicked for course with ID: ${courseId}`);
    generatePDF(courseName, joinedDate, endDate, rating);
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
                          <img src={course.imageUrl} alt='academy'></img>
                         </div>
                        <div className='ecou3'>
                          <br></br>
                          <h3>Academy : {course.academyName}</h3><br></br>
                          <h3>contact : {course.contact}</h3><br></br>
                          {/* <h3>Academy : {course.academyName}</h3><br></br> */}
                          <h3>Course : {course.courseName}</h3><br></br>
                          <h3>Location : {course.location}</h3><br></br>
                          <button onClick={() => handleLearnNow(course.id, course.name, course.joinedDate, course.endDate, course.rating)}>My Learning</button>
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
