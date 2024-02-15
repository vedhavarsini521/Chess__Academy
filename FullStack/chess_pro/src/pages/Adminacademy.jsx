import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Rating } from '@mui/material';
import '../assets/css/Adminacademypage.css';
import Asidebar from '../components/Asidebar';
import Modal from 'react-modal';

function Adminacademy() {
  const [searchTerm, setSearchTerm] = useState('');
  const [academies, setAcademies] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [newAcademy, setNewAcademy] = useState({
    academyName: '',
    rate: '',
    duration: '',
    contact: '',
    imageUrl: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchAcademies();
  }, []);

  const fetchAcademies = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/academies');
      const data = await response.json();
      setAcademies(data);
      setFilteredCourses(data);
    } catch (error) {
      console.error('Error fetching academies:', error);
    }
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredCourses = academies.filter((academy) =>
      academy.academyName.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCourses(filteredCourses);
  };

  const handleEdit = (academy) => {
    setSelectedCourse(academy);
    openModal();
  };

  const handleCancelEdit = () => {
    setSelectedCourse(null);
    closeModal();
  };

  const handleUpdate = async (updatedAcademy) => {
    try {
      const response = await fetch(`http://localhost:8081/api/academies/${updatedAcademy.academyId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedAcademy),
      });
      if (response.ok) {
        const updatedAcademyData = await response.json();
        const updatedAcademies = academies.map((academy) =>
          academy.academyId === updatedAcademyData.academyId ? updatedAcademyData : academy
        );
        setAcademies(updatedAcademies);
        setFilteredCourses(updatedAcademies);
        setSelectedCourse(null);
        closeModal();
      } else {
        console.error('Failed to update academy');
      }
    } catch (error) {
      console.error('Error updating academy:', error);
    }
  };

  const handleDelete = async (academyId) => {
    try {
      const response = await fetch(`http://localhost:8081/api/academies/${academyId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const updatedAcademies = academies.filter((academy) => academy.academyId !== academyId);
        setAcademies(updatedAcademies);
        setFilteredCourses(updatedAcademies);
        setSelectedCourse(null);
      } else {
        console.error('Failed to delete academy');
      }
    } catch (error) {
      console.error('Error deleting academy:', error);
    }
  };

  const handleAddNewAcademy = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/academies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAcademy),
      });
      if (response.ok) {
        // Refresh the list of academies after adding a new one
        fetchAcademies();
        setNewAcademy({
          academyName: '',
          rate: '',
          duration: '',
          contact: '',
          imageUrl: ''
        });
        closeModal();
      } else {
        console.error('Failed to add academy');
      }
    } catch (error) {
      console.error('Error adding academy:', error);
    }
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
              <div className='add-academy'>
                <button className='add-aca' onClick={openModal}>
                  <FontAwesomeIcon icon={faPlus} /> Add New Academy
                </button>
              </div>
            </div>
            <br />
            <br />
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
              <div key={rowIndex} className="cour-row">
                {row.map((course) => (
                  <div key={course.academyId} className='acour2'>
                    <div className='acour3'>
                      <div className='acour4'>
                        <div className='acou1'>
                          <div className='acou2'>
                            <img src={course.imageUrl} alt='academy' />
                          </div>
                          <div className='acou3'>
                            <h2>{course.academyName}</h2><br />
                            <h3>Duration: {course.duration}</h3><br />
                            <h3>Contact : {course.contact}</h3><br />
                            <Rating className="astar-rating" value={parseFloat(course.rate)} readOnly precision={0.5} /><br />
                            <button onClick={() => handleEdit(course)}>
                              <FontAwesomeIcon icon={faEdit} /> Edit
                            </button>
                            <button onClick={() => handleDelete(course.academyId)}>
                              <FontAwesomeIcon icon={faTrash} /> Delete
                            </button>
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
        <AddAcademyForm onAddAcademy={handleAddNewAcademy} onCancel={closeModal} newAcademy={newAcademy} setNewAcademy={setNewAcademy} />
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

const AddAcademyForm = ({ onAddAcademy, onCancel, newAcademy, setNewAcademy }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAcademy(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    onAddAcademy();
  };

  return (
    <div className='add-form'>
      <div className='ad1'>
        <h2>Add New Academy</h2>
      </div>
      <br />
      <label>
        Academy Name:
        <br />
        <input
          type='text'
          name='academyName'
          value={newAcademy.academyName}
          onChange={handleInputChange}
        />
      </label><br />
      <label>
        Rating:
        <br />
        <input
          type='text'
          name='rate'
          value={newAcademy.rate}
          onChange={handleInputChange}
        />
      </label><br />
      <label>
        Duration:
        <br />
        <input
          type='text'
          name='duration'
          value={newAcademy.duration}
          onChange={handleInputChange}
        />
      </label><br />
      <label>
        Contact:
        <br />
        <input
          type='text'
          name='contact'
          value={newAcademy.contact}
          onChange={handleInputChange}
        />
      </label><br />
      <label>
        Image URL:
        <br />
        <input
          type='text'
          name='imageUrl'
          value={newAcademy.imageUrl}
          onChange={handleInputChange}
        />
      </label><br />
      <button onClick={handleSubmit}>Add Academy</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

const EditForm = ({ course, onUpdate, onCancel }) => {
  const [editedCourse, setEditedCourse] = useState(course);

  useEffect(() => {
    setEditedCourse(course);
  }, [course]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedCourse(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    onUpdate(editedCourse);
  };

  return (
    <div className='edit-form'>
      <div className='ad1'>
        <br />
        <h2>Edit Course</h2>
      </div><br />
      <label>
        Course Name:
        <br />
        <input
          type='text'
          name='academyName'
          value={editedCourse.academyName}
          onChange={handleInputChange}
        />
      </label><br />
      <label>
        Rating:
        <br />
        <input
          type='text'
          name='rate'
          value={editedCourse.rate}
          onChange={handleInputChange}
        />
      </label><br />
      <label>
        Duration:
        <br />
        <input
          type='text'
          name='duration'
          value={editedCourse.duration}
          onChange={handleInputChange}
        />
      </label><br />
      <label>
        Contact:
        <br />
        <input
          type='text'
          name='contact'
          value={editedCourse.contact}
          onChange={handleInputChange}
        />
      </label><br />
      <label>
        Image URL:
        <br />
        <input
          type='text'
          name='imageUrl'
          value={editedCourse.imageUrl}
          onChange={handleInputChange}
        />
      </label><br />
      <button onClick={handleSubmit}>Update</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default Adminacademy;
