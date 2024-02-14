import React, { useState } from "react";
import "../assets/css/Registerpage.css";
import { TextField } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import '../pages/Admin';
import Navbar from "../components/Navbar";

function Aregister() {
//   const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    email: "",
    username: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

//   const handleUserTypeChange = (event) => {
//     setUserType(event.target.value);
//   };

  const validateForm = () => {
    const errors = {};

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Enter a valid email address";
    }

    if (!username.trim()) {
      errors.username = "Username is required";
    }

    if (!mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number is required";
    }


    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

  
    if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }

    setValidationErrors(errors);

    return Object.values(errors).every((error) => !error);
  };


  

  return (
    <>
    <Navbar/>
      <div className="par">
        <div className="re">
          <br></br>
          <center>
            <div className="register">
              <h1 className="regi">Welcome</h1>
            </div>
          </center>

          <div className="reg">
            <center>
                <h2>Admin</h2>
              {/* <Select
                value={userType}
                onChange={handleUserTypeChange}
                displayEmpty
                id="user-type-select"
              >
                <MenuItem value="" disabled>
                  Select admin or user
                </MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>
              </Select>
              <br></br> */}
              <div className="pas">
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!validationErrors.email}
                  helperText={validationErrors.email}
                />
              </div>
              <div className="pas">
                <TextField
                  id="standard-basic"
                  label="Username"
                  variant="standard"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  error={!!validationErrors.username}
                  helperText={validationErrors.username}
                />
              </div>
              <div className="pas">
                <TextField
                  id="standard-basic"
                  label="Mobile number"
                  variant="standard"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  error={!!validationErrors.mobileNumber}
                  helperText={validationErrors.mobileNumber}
                />
              </div>
              <div className="pas">
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!validationErrors.password}
                  helperText={validationErrors.password}
                />
              </div>
              <div className="pas">
                <TextField
                  id="standard-basic"
                  label="Confirm Password"
                  variant="standard"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={!!validationErrors.confirmPassword}
                  helperText={validationErrors.confirmPassword}
                />
              </div>
              <div className="butt">
                <div className="butt1">
                  <Link to="/admin">
                  <button className="butt2" onClick={'/admin'}>
                    Sign up
                  </button>
                  </Link>
                </div>
                <a href="/alog" className="link-but">
                  Already have an account
                </a>
              </div>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aregister;
