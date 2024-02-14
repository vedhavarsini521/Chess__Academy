import React from 'react';
import Navbar from "../components/Navbar";
import Select from '@mui/material/Select'; 
import MenuItem from '@mui/material/MenuItem';
import  { useState } from 'react';
import '../assets/css/Logpage.css';

export default function Log() {

    const [userType, setUserType] = useState(""); 

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
      };
  return (
    <>
    <Navbar/>

    <div className="loginfo">
        <div className='loginfo1'>
          <div className='loginfo2'>
          <a href='/alog'><img src='src\assets\images\adminlogo.jpg'></img></a><br></br>
          <h2><span>A</span>dmin</h2>
          </div>
          <div className='loginfo2'>
          <a href='/login'><img src='src\assets\images\userlogo.jpg'></img></a><br></br>
          <h2><span>U</span>ser</h2>
          </div>
            {/* <center>
              <Select className='loginfo2'
                value={userType}
                onChange={handleUserTypeChange}
                displayEmpty
                id="user-type-select"
              >
                <MenuItem value="" disabled>
                  Select admin or user
                </MenuItem>
                <MenuItem className='menu' value="admin"><a href="/alog">Admin</a></MenuItem>
                <MenuItem className='menu' value="user"><a href="/login">User</a></MenuItem>
              </Select>
            </center>
            <center>
            <h2 className='loginfo3'>Select to Login</h2>
            </center> */}
            </div>
    </div>
    </>
  )
}
