import React, { useState } from 'react';
import Asidebar from '../components/Asidebar';
import '../assets/css/Adminprofilepage.css';

function Adminprofile() {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', age: 20, email: 'abc@gmail.com', mobile: '9876543210' },
    { id: 2, name: 'Jane Doe', age: 22, email: 'xyz@gmail.com', mobile: '9876543210' },
    { id: 3, name: 'Varshu', age: 21, email: 'sdg@gmail.com', mobile: '9876543210' },
    // Add more initial student records
  ]);

  const [newStudent, setNewStudent] = useState({
    name: '',
    age: '',
    email: '',
    mobile: '',
  });

  const [editingStudent, setEditingStudent] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const handleAddStudent = () => {
    setStudents((prevStudents) => [
      ...prevStudents,
      {
        id: prevStudents.length + 1,
        name: newStudent.name,
        age: newStudent.age,
        email: newStudent.email,
        mobile: newStudent.mobile,
      },
    ]);

    // Clear the form after adding a student
    setNewStudent({
      name: '',
      age: '',
      email: '',
      mobile: '',
    });
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setNewStudent({
      name: student.name,
      age: student.age,
      email: student.email,
      mobile: student.mobile,
    });
  };

  const handleUpdate = () => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === editingStudent.id
          ? { ...student, name: newStudent.name, age: newStudent.age, email: newStudent.email, mobile: newStudent.mobile }
          : student
      )
    );

    // Clear the form and editing state
    setNewStudent({
      name: '',
      age: '',
      email: '',
      mobile: '',
    });
    setEditingStudent(null);
  };

  const handleDelete = (id) => {
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
  };

  return (
    <div className='student'>
      <Asidebar />
      <div className='stud1'>
        <h2>Student List</h2>
        <div className='stud'>
          <table className='student-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.email}</td>
                  <td>{student.mobile}</td>
                  <td>
                    <button className='studbut' onClick={() => handleEdit(student)}>Edit</button>
                    <button className='studbut'onClick={() => handleDelete(student.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <form className='stud2'>
            <br></br>
          <label className='stud3'>
            Name:<br></br>
            <input type="text" name="name" value={newStudent.name} onChange={handleInputChange} />
          </label>
          <br></br>
          <label className='stud3'>
            Age:<br></br>
            <input type="text" name="age" value={newStudent.age} onChange={handleInputChange} />
          </label>
          <br></br>
          <label className='stud3'>
            Email:<br></br>
            <input type="text" name="email" value={newStudent.email} onChange={handleInputChange} />
          </label>
          <br></br>
          <label className='stud3'>
            Mobile:<br></br>
            <input type="text" name="mobile" value={newStudent.mobile} onChange={handleInputChange} />
          </label>
          <br></br>

          {editingStudent ? (
            <button className='stbut' type="button" onClick={handleUpdate}>
              Update
            </button>
          ) : (
            <button className='stbut' type="button" onClick={handleAddStudent}>
              Add Student
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Adminprofile;
