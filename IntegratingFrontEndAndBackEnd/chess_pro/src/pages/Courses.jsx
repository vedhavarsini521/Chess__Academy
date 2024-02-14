import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/css/Coursespage.css';
import Usidebar from '../components/Usidebar';

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [academies, setAcademies] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const fetchAcademies = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/academies');
        if (response.ok) {
          const data = await response.json();
          setAcademies(data);
          setFilteredCourses(data);
        } else {
          console.error('Failed to fetch academies');
        }
      } catch (error) {
        console.error('Error fetching academies:', error);
      }
    };

    fetchAcademies();
  }, []);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredCourses = academies.filter((course) =>
      course.academyName.toLowerCase().includes(term.toLowerCase())
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
                <div key={course.academyId} className='cour2'>
                  <div className='cour3'>
                    <div className='cour4'>
                      <div className='cou1'>
                        <div className='cou2'>
                          <img src={course.imageUrl} alt='academy'></img>
                        </div>
                        <div className='cou3'>
                          <h2>{course.academyName}</h2><br></br>
                          <h3>Duration : {course.duration}</h3><br></br>
                          <h3>Contact : {course.contact}</h3><br></br>
                          <h4 className='star'> {course.rate}</h4><br></br>
                          <Rating name="star-rating" value={parseFloat(course.rate)} readOnly precision={0.5} /><br></br>
                          {/* Update the button to use Link to navigate to the Moreinfo page */}
                          <Link to={`/more/${course.academyId}`}><button>More Info</button></Link>
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

export default Courses;







// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { Rating } from '@mui/material';
// import '../assets/css/Coursespage.css';
// import Usidebar from '../components/Usidebar';

// function Courses() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [academies, setAcademies] = useState([]);
//   const [filteredCourses, setFilteredCourses] = useState([]);

//   useEffect(() => {
//     const fetchAcademies = async () => {
//       try {
//         const response = await fetch('http://localhost:8081/api/academies');
//         if (response.ok) {
//           const data = await response.json();
//           setAcademies(data);
//           setFilteredCourses(data);
//         } else {
//           console.error('Failed to fetch academies');
//         }
//       } catch (error) {
//         console.error('Error fetching academies:', error);
//       }
//     };

//     fetchAcademies();
//   }, []);

//   const handleSearchChange = (event) => {
//     const term = event.target.value;
//     setSearchTerm(term);

//     const filteredCourses = academies.filter((course) =>
//       course.academyName.toLowerCase().includes(term.toLowerCase())
//     );
//     setFilteredCourses(filteredCourses);
//   };

//   return (
//     <div className='courses'>
//       <Usidebar/>
//       <div className='cour5'>
//         <div className='search-bar'>
//           <div className='searchbar1'>
//             <input
//               type='text'
//               placeholder='Search...'
//               value={searchTerm}
//               onChange={handleSearchChange}
//             />
//           </div>
//           <div className='searchbar2'>
//             <FontAwesomeIcon className='searfont' icon={faSearch} />
//           </div>
//         </div>
//         <div className="courses-container">
//           {filteredCourses.reduce((rows, course, index) => {
//             if (index % 2 === 0) {
//               rows.push([course]);
//             } else {
//               rows[rows.length - 1].push(course);
//             }
//             return rows;
//           }, []).map((row, rowIndex) => (
//             <div key={rowIndex} className="cour-row">
//               {row.map((course) => (
//                 <div key={course.academyId} className='cour2'>
//                   <div className='cour3'>
//                     <div className='cour4'>
//                       <div className='cou1'>
//                         <div className='cou2'>
//                           <img src={course.imageUrl} alt='academy'></img>
//                         </div>
//                         <div className='cou3'>
//                           <h2>{course.academyName}</h2><br></br>
//                           <h3>Duration : {course.duration}</h3><br></br>
//                           <h3>Contact : {course.contact}</h3><br></br>
//                           <h4 className='star'> {course.rate}</h4><br></br>
//                           <Rating name="star-rating" value={parseFloat(course.rate)} readOnly precision={0.5} /><br></br>
//                           <a href={`/more/${course.academyId}`}><button>More Info</button></a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Courses;
