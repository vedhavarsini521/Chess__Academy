import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faGraduationCap, faSignOutAlt, faEdit, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from "@mui/icons-material/Menu";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import '../assets/css/Profilepage.css';
import Usidebar from '../components/Usidebar';

function Profile() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    loginId: '10001',
    username: 'Varshu',
    email: 'varshu@gmail.com',
    password: '123456',
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Perform save logic (update backend, etc.)
    setIsEditing(false);
    // You might want to send profileInfo to the server here
  };

  const handleCancel = () => {
    // Cancel the edit and revert changes
    setIsEditing(false);
  };

  const handleChange = (e, field) => {
    // Update the profileInfo state when the user makes changes
    setProfileInfo((prevProfileInfo) => ({
      ...prevProfileInfo,
      [field]: e.target.value,
    }));
  };

  return (
    <div className='profile'>
      <Usidebar/>
        <div className='pro1'>
          <div className='pro7'>
            <img src='src\assets\images\dashbg.webp' alt='bg'></img>
          </div>
          <div className='pro5'>
            <br></br>
            <br></br>
            <div className='proimg'>
              <img src='src\assets\images\prof.png' alt='prof'></img>
            </div>
            <div className='pro4'>
              <div className='pro2'>
                <br></br>
                <h3>Login Id</h3>
                <h3>Username </h3>
                <h3>Email </h3>
                <h3>Password</h3>
              </div>
              <div className='pro3'>
                <br></br>
                {isEditing ? (
                  <>
                    <input type="text" value={profileInfo.loginId} onChange={(e) => handleChange(e, 'loginId')} />
                    <input type="text" value={profileInfo.username} onChange={(e) => handleChange(e, 'username')} />
                    <input type="text" value={profileInfo.email} onChange={(e) => handleChange(e, 'email')} />
                    {/* Update the password input type to 'password' */}
                    <input type="password" value={profileInfo.password} onChange={(e) => handleChange(e, 'password')} />
                  </>
                ) : (
                  <>
                    <h3>{profileInfo.loginId}</h3>
                    <h3>{profileInfo.username}</h3>
                    <h3>{profileInfo.email}</h3>
                    <h3>{'*'.repeat(profileInfo.password.length)}</h3>
                  </>
                )}
              </div>
              {isEditing ? (
                <>
                  <FontAwesomeIcon icon={faCheck} className="edit-icon" onClick={handleSave} />
                  <FontAwesomeIcon icon={faTimes} className="edit-icon" onClick={handleCancel} />
                </>
              ) : (
                <FontAwesomeIcon icon={faEdit} className="edit-icon" onClick={handleEdit} />
              )}
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Profile;
