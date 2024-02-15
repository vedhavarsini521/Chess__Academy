 import React from 'react';
 import { useState ,useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

// import { faUser, faBook, faGraduationCap, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import MenuIcon from "@mui/icons-material/Menu";
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';  
// import { Rating } from '@mui/material';
// import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

import '../assets/css/Moreinfopage.css';
import Usidebar from '../components/Usidebar';
import Footer from '../components/Footer';
import teach from '../assets/images/teach.png';

import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


export default function Moreinfo() {
  const [courses, setCourses] = useState([]);

  const { academyId } = useParams();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/courses/academy/${academyId}`);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className='moreinfo'>
      <div className='more'>
        <Usidebar />
        <div className='mor2'>
          <div className='mor3'>
            <img src={teach} alt='image'></img>
            <h1>School Programs</h1>
            <h3>The game of chess is a powerful tool for the harmonious development of intelligence.It develops ingenuity and logical thinking, teaches to think, remember, compare, summarize, anticipate the results of their activities.</h3>
          </div>
        </div>

        <div className='mor4'>
          <div className='mo1'>
            <h2>Benefits</h2>
            <ul>
              <li>You have the opportunity to engage with excellent teachers from completely different places</li>
              <li>You can choose an individual schedule for conducting classes</li>
              <li>Leveled assessments administered by STLCC certified instructors</li>
              <li>Optional Addition of Grandmaster lesson available</li>
              <li>All equipment, including sets and boards, provided for instruction</li>
            </ul>
            <h2>Format</h2>
            <ul>
              <li>K - 2nd grade: up to 16 students</li>
              <li>3rd - 12th grade: up to 20 students</li>
              <li>Taught by instructors from STLCC and moderated by school staff</li>
              <li>Classes are designed for one hour of instruction and practice on each day</li>
            </ul>
          </div>
        </div>

        <div className='mor5'>
          <h1>Courses For You !!</h1>
          <div className='mor5img'>
            {courses.map(course => (
              <div className='moi1' key={course.courseId}>
                <h2>{course.courseName}</h2>
                <h3><FontAwesomeIcon icon={faMapMarker} /> {course.location}</h3>
                <h3>Mode: {course.mode}</h3>
                <h3>Hours: {course.hours}</h3>
                <Link to={`/enro/${academyId}/${course.courseId}`}>
                <button className='morbut'>Enroll now</button>
                </Link>
                {/* <a href={`/enr/${academyId}/${course.courseId}`}><button className='morbut'>Enroll now</button></a> */}
                <br />
              </div>
            ))}
          </div>
        </div>

        <div className='mor6'>
          <h3>Interested in Joining Contact us!!</h3>
          <h1><FontAwesomeIcon icon={faPhone} /> 9357609145</h1>
        </div>
        <div className='morfo'>
          <Footer/>
        </div>
      </div>
    </div>
  );
}











