import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal'; // Import the modal library
import '../assets/css/Admincourse.css';
import Asidebar from '../components/Asidebar';

Modal.setAppElement('#root'); // Set the root element for the modal

export default function Moreinfo() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'Course for beginners',
      location: 'Chennai',
      phone: '9876543210',
      mode: 'online',
      hours: '6-8 hours per week',
    },
    {
      id: 2,
      name: 'Course for beginners',
      location: 'Chennai',
      phone: '9876543210',
      mode: 'online',
      hours: '6-8 hours per week',
    },
    {
      id: 3,
      name: 'Course for beginners',
      location: 'Chennai',
      phone: '9876543210',
      mode: 'online',
      hours: '6-8 hours per week',
    },
    {
      id: 4,
      name: 'Course for beginners',
      location: 'Chennai',
      phone: '9876543210',
      mode: 'online',
      hours: '6-8 hours per week',
    },
    {
      id: 5,
      name: 'Course for beginners',
      location: 'Chennai',
      phone: '9876543210',
      mode: 'online',
      hours: '6-8 hours per week',
    },
    // Add more course objects as needed
  ]);

  const [newCourse, setNewCourse] = useState({
    name: '',
    location: '',
    phone: '',
    mode: '',
    hours: '',
  });

  const [editCourse, setEditCourse] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEdit = (id) => {
    const courseToEdit = courses.find((course) => course.id === id);
    setEditCourse(courseToEdit);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    setCourses((prevCourses) => {
      return prevCourses.map((course) => (course.id === editCourse.id ? editCourse : course));
    });
    setEditCourse(null);
    setIsEditModalOpen(false);
  };

  const handleCancelEdit = () => {
    setEditCourse(null);
    setIsEditModalOpen(false);
  };

  const handleAddCourse = () => {
    const newCourseId = courses.length + 1;
    setCourses((prevCourses) => [
      ...prevCourses,
      {
        id: newCourseId,
        ...newCourse,
      },
    ]);
    setNewCourse({
      name: '',
      location: '',
      phone: '',
      mode: '',
      hours: '',
    });
  };

  const handleDelete = (id) => {
    setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
  };

  return (
    <div className='amoreinfo'>
      <Asidebar />
      <div className='amore'>
        <div className='amor2'>
          {/* Display existing courses in pairs */}
          {courses.reduce((pairs, course, index) => {
            if (index % 2 === 0) {
              pairs.push([course]);
            } else {
              pairs[pairs.length - 1].push(course);
            }
            return pairs;
          }, []).map((pair, pairIndex) => (
            <div key={pairIndex} className='amor-row'>
              {pair.map((course) => (
                <div key={course.id} className='amor3'>
                  <div className='amor4'>
                    <br></br>
                    <div className='amor7'>
                      <div className='amor5'>
                        <h3>{course.location}</h3>
                        <br></br>
                        <h3>{course.name}</h3>
                        <br></br>
                        <h3>
                          <FontAwesomeIcon icon={faPhone} /> {course.phone}
                        </h3>
                      </div>
                      <div className='amor6'>
                        <h3>Online Mode: {course.mode}</h3>
                        <br></br>
                        <h3>Offline Mode: {course.hours}</h3>
                        <br></br>
                        {editCourse && editCourse.id === course.id ? (
                          <>
                            <button className='amorbut' onClick={handleSaveEdit}>
                              Save
                            </button>
                            <button className='amorbut' onClick={handleCancelEdit}>
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button className='amorbut' onClick={() => handleEdit(course.id)}>
                              Edit
                            </button>
                            <button className='amorbut' onClick={() => handleDelete(course.id)}>
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Add a new course */}
          <center>
        <div className='amor3'>
          <h2>Add New Course</h2>
          <div className='amor4'>
            <br></br>
            <div className='amor7'>
              <div className='amor5'>
                <input
                  type='text'
                  placeholder='Name'
                  value={newCourse.name}
                  onChange={(e) => setNewCourse((prev) => ({ ...prev, name: e.target.value }))}
                />
                <br></br>
                <input
                  type='text'
                  placeholder='Location'
                  value={newCourse.location}
                  onChange={(e) => setNewCourse((prev) => ({ ...prev, location: e.target.value }))}
                />
                <br></br>
                <input
                  type='text'
                  placeholder='Phone'
                  value={newCourse.phone}
                  onChange={(e) => setNewCourse((prev) => ({ ...prev, phone: e.target.value }))}
                />
              </div>
              <div className='amor6'>
                <input
                  type='text'
                  placeholder='Mode'
                  value={newCourse.mode}
                  onChange={(e) => setNewCourse((prev) => ({ ...prev, mode: e.target.value }))}
                />
                <br></br>
                <input
                  type='text'
                  placeholder='Hours'
                  value={newCourse.hours}
                  onChange={(e) => setNewCourse((prev) => ({ ...prev, hours: e.target.value }))}
                />
                <br></br>
                <button className='amorbut' onClick={handleAddCourse}>
                  Add Course
                </button>
              </div>
            </div>
          </div>
        </div>
          </center>

        {/* Edit Course Modal */}
        <Modal isOpen={isEditModalOpen} onRequestClose={handleCancelEdit}>
          <div className='acedit1'>
            <h2>Edit Course</h2>
            <div className='acedit'>
              <input
                type='text'
                placeholder='Name'
                value={editCourse?.name || ''}
                onChange={(e) => setEditCourse((prev) => ({ ...prev, name: e.target.value }))}
              />
              <br />
              <input
                type='text'
                placeholder='Location'
                value={editCourse?.location || ''}
                onChange={(e) => setEditCourse((prev) => ({ ...prev, location: e.target.value }))}
              />
              <br />
              <input
                type='text'
                placeholder='Phone'
                value={editCourse?.phone || ''}
                onChange={(e) => setEditCourse((prev) => ({ ...prev, phone: e.target.value }))}
              />
              <br />
              <input
                type='text'
                placeholder='Mode'
                value={editCourse?.mode || ''}
                onChange={(e) => setEditCourse((prev) => ({ ...prev, mode: e.target.value }))}
              />
              <br />
              <input
                type='text'
                placeholder='hours'
                value={editCourse?.hours || ''}
                onChange={(e) => setEditCourse((prev) => ({ ...prev, hours: e.target.value }))}
              />
              <br />
              <button onClick={handleSaveEdit}>Save</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
