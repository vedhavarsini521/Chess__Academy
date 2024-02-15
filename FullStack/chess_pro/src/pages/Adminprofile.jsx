
import React, { useState ,useEffect} from 'react';
import Asidebar from '../components/Asidebar';
import '../assets/css/Adminprofilepage.css';
import FeedbackTable from './FeedbackTable';

function Adminprofile() {


  const [users, setUsers] = useState([]);
 


  useEffect(() => {
    fetchUsers();

  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/v1/auth/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error('Failed to fetch users');
      }
    } catch (error) {
      console.error('Error during user fetch:', error);
    }

  };



  return (
    <div className='student'>
      <Asidebar />
      <div className='tafed'>
      <div className='stud1'>
        <h2>Student List</h2>
        <div className='stud'>
          <table className='student-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
            {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobileNumber}</td>
            </tr>
          ))}
            </tbody>
          </table>
          <br></br>
        </div>
        <br></br>
       </div>
        <div className='feta'>
       <FeedbackTable/>
       </div>
       </div>
      
    </div>
  );
}

export default Adminprofile;
