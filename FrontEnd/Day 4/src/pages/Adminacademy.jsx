import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faGraduationCap, faSignOutAlt, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from "@mui/icons-material/Menu";
import { faArrowLeft, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { Rating } from '@mui/material';
import academyData from '../components/data';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Adminacademypage.css';
import Asidebar from '../components/Asidebar';
import Modal from 'react-modal';

function Adminacademy() {
  const [isSidebarOpen1, setIsSidebarOpen1] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [academies, setAcademies] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [newAcademy, setNewAcademy] = useState({
    name: '',
    rate: '',
    duration: '',
    // Add more fields as needed
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleEdit = (course) => {
    setSelectedCourse(course);
    openModal();
  };

  const handleCancelEdit = () => {
    setSelectedCourse(null);
    closeModal();
  };

  const handleUpdate = (updatedCourse) => {
    const updatedCourses = academies.map((course) =>
      course.id === updatedCourse.id ? updatedCourse : course
    );
    setAcademies(updatedCourses);
    setFilteredCourses(updatedCourses);
    setSelectedCourse(null);
    closeModal();
  };

  const handleDelete = (courseId) => {
    const updatedCourses = academies.filter((course) => course.id !== courseId);
    setAcademies(updatedCourses);
    setFilteredCourses(updatedCourses);
    setSelectedCourse(null);
  };

  
  const handleAddNewAcademy = () => {
    // Add validation if needed
    const newAcademyWithId = { ...newAcademy, id: academies.length + 1 };
    setAcademies((prevAcademies) => [...prevAcademies, newAcademyWithId]);
    setFilteredCourses((prevCourses) => [...prevCourses, newAcademyWithId]);
    setNewAcademy({
      name: '',
      rate: '',
      duration: '',
      // Reset other fields as needed
    });
    closeModal();
  };
  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='acourses'>
        <Asidebar />
        <div className='acours'>
          <div className='acour5'>
            <div className='asearch-bar'>
              <div className='asearchbar1'>
                <input
                  type='text'
                  placeholder='Search...'
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div className='asearchbar2'>
                <FontAwesomeIcon className='searfont' icon={faSearch} />
              </div>
            </div>
            <br></br>
            <br></br>
            <div className='add-academy'>
              <button onClick={openModal}><FontAwesomeIcon icon={faPlus} /> Add New Academy</button>
            </div>
          </div>

          <div className="acourses-container">
            {filteredCourses.reduce((rows, course, index) => {
              if (index % 2 === 0) {
                rows.push([course]);
              } else {
                rows[rows.length - 1].push(course);
              }
              return rows;
            }, []).map((row, rowIndex) => (
              <div key={rowIndex} className="acour-row">
                {row.map((course) => (
                  <div key={course.id} className='acour2'>
                    <div className='acour3'>
                      <div className='acour4'>
                        <div className='acou1'>
                          <div className='acou2'>
                            <img src={course.img} alt='academy'></img>
                          </div>
                          <div className='acou3'>
                            <h2>{course.name}</h2><br></br>
                            <h3>Duration: {course.duration}</h3><br></br>
                            <h4 className='star'> {course.rate}</h4><br></br>
                            <Rating name="star-rating" value={parseFloat(course.rate)} readOnly precision={0.5} /><br></br>
                          </div>
                          <div className="acourse-actions">
                            <button onClick={() => handleEdit(course)}><FontAwesomeIcon icon={faEdit} /> Edit</button>
                            <button onClick={() => handleDelete(course.id)}><FontAwesomeIcon icon={faTrash} /> Delete</button>
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

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add Academy Modal"
        className="modal"
      >
        <AddAcademyForm onAddAcademy={handleAddNewAcademy} onCancel={closeModal} />
      </Modal>

      <Modal
        isOpen={isModalOpen && selectedCourse !== null}
        onRequestClose={closeModal}
        contentLabel="Edit Course Modal"
        className="modal"
      >
        <EditForm course={selectedCourse} onUpdate={handleUpdate} onCancel={handleCancelEdit} />
      </Modal>
    </>
  );
}

const AddAcademyForm = ({ onAddAcademy, onCancel }) => {
  const [newAcademy, setNewAcademy] = useState({
    name: '',
    rate: '',
    duration: '',
    // Add more fields as needed
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAcademy((prevAcademy) => ({ ...prevAcademy, [name]: value }));
  };

  const handleSubmit = () => {
    onAddAcademy();
  };

  return (
    <div className='add-form'>
      <h2>Add New Academy</h2>
      <label>
        Academy Name:
        <input
          type='text'
          name='name'
          value={newAcademy.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Rating:
        <input
          type='text'
          name='rate'
          value={newAcademy.rate}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Duration:
        <input
          type='text'
          name='duration'
          value={newAcademy.duration}
          onChange={handleInputChange}
        />
      </label><br></br>
      {/* Add more input fields as needed */}
      <button onClick={handleSubmit}>Add Academy</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

const EditForm = ({ course, onUpdate, onCancel }) => {
  const [editedCourse, setEditedCourse] = useState(course);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  const handleSubmit = () => {
    onUpdate(editedCourse);
  };

  return (
    <div className='edit-form'>
      <h2>Edit Course</h2>
      <label>
        Course Name:
        <input
          type='text'
          name='name'
          value={editedCourse.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Rating:
        <input
          type='text'
          name='rate'
          value={editedCourse.rate}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Duration:
        <input
          type='text'
          name='duration'
          value={editedCourse.duration}
          onChange={handleInputChange}
        />
      </label><br></br>
      {/* Add more input fields as needed */}
      <button onClick={handleSubmit}>Update</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default Adminacademy;
