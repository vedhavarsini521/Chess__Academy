import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import '../assets/css/Admincourse.css';
import Asidebar from '../components/Asidebar';
import axios from 'axios';

import { useParams } from 'react-router-dom';

Modal.setAppElement('#root');

export default function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    courseName: '',
    location: '',
    mode: '',
    hours: '',
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { academyId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/courses/academy/${academyId}`);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchData();
  }, [academyId]);

  const handleAddCourse = () => {
    axios.post(`http://localhost:8081/api/courses/${academyId}`, newCourse)
      .then(response => {
        if (!response.data.error) {
          fetchCourses();
          setNewCourse({
            courseName: '',
            location: '',
            mode: '',
            hours: '',
          });
          setIsAddModalOpen(false);
        } else {
          console.error('Failed to add course');
        }
      })
      .catch(error => console.error('Error adding course:', error));
  };

  const handleEdit = (course) => {
    setEditCourse({
      ...course,
      academyId: academyId
    });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    axios.put(`http://localhost:8081/api/courses/${editCourse.courseId}`, editCourse)
      .then(response => {
        if (!response.data.error) {
          fetchCourses();
          setIsEditModalOpen(false);
        } else {
          console.error('Failed to save course');
        }
      })
      .catch(error => console.error('Error saving course:', error));
  };

  const handleDelete = (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      axios.delete(`http://localhost:8081/api/courses/${courseId}`)
        .then(response => {
          if (response.status === 204) {
            fetchCourses();
          } else {
            throw new Error('Failed to delete course');
          }
        })
        .catch(error => console.error('Error deleting course:', error));
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/api/courses/academy/${academyId}`);
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const filteredCourses = Array.isArray(courses)
    ? courses.filter((course) => course.courseName.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const [editCourse, setEditCourse] = useState({
    courseId: '',
    courseName: '',
    location: '',
    mode: '',
    hours: '',
    academyId: academyId // Initialize with the current academyId
  });
  
  return (
    <div className='amoreinfo'>
      <Asidebar />
      <div className='amore'>
        <div className='amor2'>
          <h1>Courses Available!!</h1>
          <div className='add-course'>
            <button className='add-aca' onClick={() => setIsAddModalOpen(true)}>
              <FontAwesomeIcon icon={faPlus} />Add New Course
            </button>
          </div>
          {Array.isArray(filteredCourses) && filteredCourses.length > 0 ? (
            chunkArray(filteredCourses, 3).map((chunk, index) => (
              <div key={index} className='amor-row'>
                {chunk.map((course) => (
                  <div key={course.courseId} className='amor3'>
                    <div className='amor4'>
                      <br />
                      <div className='amor7'>
                        <div className='amor5'>
                          <h2>{course.courseName}</h2>
                          <br />
                          <h3>{course.location}</h3>
                          <br />
                        </div>
                        <div className='amor6'>
                          <h3>Mode: {course.mode}</h3>
                          <br />
                          <h3>Hours: {course.hours}</h3>
                          <br />
                          <button className='amorbut' onClick={() => handleEdit(course)}>
                            Edit
                          </button>
                          <button className='amorbut' onClick={() => handleDelete(course.courseId)}>
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>No courses available</p>
          )}
        </div>

        <Modal isOpen={isEditModalOpen} onRequestClose={() => setIsEditModalOpen(false)}>
          <div className='acedit1'>
            <h2>Edit Course</h2>
            <div className='acedit'>
              <input
                type='text'
                placeholder='Name'
                value={editCourse ? editCourse.courseName : ''}
                onChange={(e) => setEditCourse({ ...editCourse, courseName: e.target.value })}
              />
              <br />
              <input
                type='text'
                placeholder='Location'
                value={editCourse ? editCourse.location : ''}
                onChange={(e) => setEditCourse({ ...editCourse, location: e.target.value })}
              />
              <br />
              <input
                type='text'
                placeholder='Mode'
                value={editCourse ? editCourse.mode : ''}
                onChange={(e) => setEditCourse({ ...editCourse, mode: e.target.value })}
              />
              <br />
              <input
                type='text'
                placeholder='Hours'
                value={editCourse ? editCourse.hours : ''}
                onChange={(e) => setEditCourse({ ...editCourse, hours: e.target.value })}
              />
              <br />
              <button onClick={handleSaveEdit}>Save</button>
              <button onClick={() => setIsEditModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </Modal>

        <Modal isOpen={isAddModalOpen} onRequestClose={() => setIsAddModalOpen(false)}>
          <div className='acedit1'>
            <h2>Add New Course</h2>
            <div className='acedit'>
              <input
                type='text'
                placeholder='Name'
                value={newCourse.courseName}
                onChange={(e) => setNewCourse({ ...newCourse, courseName: e.target.value })}
              />
              <br />
              <input
                type='text'
                placeholder='Location'
                value={newCourse.location}
                onChange={(e) => setNewCourse({ ...newCourse, location: e.target.value })}
              />
              <br />
              <input
                type='text'
                placeholder='Mode'
                value={newCourse.mode}
                onChange={(e) => setNewCourse({ ...newCourse, mode: e.target.value })}
              />
              <br />
              <input
                type='text'
                placeholder='Hours'
                value={newCourse.hours}
                onChange={(e) => setNewCourse({ ...newCourse, hours: e.target.value })}
              />
              <br />
              <button onClick={handleAddCourse}>Add Course</button>
              <button onClick={() => setIsAddModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

