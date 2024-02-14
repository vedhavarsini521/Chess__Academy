import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../pages/features/userSlice';
import Usidebar from '../components/Usidebar';
import '../assets/css/Profilepage.css';
import Asidebar from '../components/Asidebar';

function Aprofile() {

  const [profileInfo, setProfileInfo] = useState({
    loginId: '',
    username: '',
    email: '',
    password: '',
  });

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // Ensure user is not undefined before updating the local state
    if (user) {
      setProfileInfo(user);
    }
  }, [user]);

  return (
    <div className='profile'>
      <Asidebar />
      <div className='pro1'>
        <div className='prored'> {/* Added onClick to handle email click */}
          <br></br>
          {/* <a href='proedit'> */}
            <h3>{profileInfo.email}</h3>
            {/* </a> */}
        </div>
        <div className='protext'>
        <h1><b>Chess Inscribe</b></h1>
        <h2>Welcome to Your Dashboard!</h2>
        </div>
      </div>
    </div>
  );
}

export default Aprofile;
