import React, { useState } from "react";
import "../assets/css/Registerpage.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // API call to register user
      const response = await axios.post('http://localhost:8081/api/v1/auth/register', {
        name,
        email,
        mobileNumber,
        password
      });

      // Handle success
      if (response.status === 200) {
        alert("Registration Successful!!");
        // Optionally, you can redirect the user to the login page after successful registration
        // window.location.href = "/login";
      }
    } catch (error) {
      // Handle errors
      console.error('Error registering user:', error);
      setError("An error occurred while registering. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="par">
        <div className="re">
          <br></br>
          <center>
            <div className="register">
              <h1 className="regi">Welcome</h1>
            </div>
            <br></br>
            <h2>User</h2>
          </center>

          <div className="reg">
            <center>
              <div className="pas">
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="pas">
                <TextField
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="pas">
                <TextField
                  id="standard-basic"
                  label="Mobile Number"
                  variant="standard"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
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
                />
              </div>
              {error && <div style={{ color: "red" }}>{error}</div>}
              <div className="butt">
                <div className="butt1">
                  <button className="butt2" onClick={handleSubmit}>
                    Sign up
                  </button>
                </div>
                <Link to="/login" className="link-but">
                  Already have an account
                </Link>
              </div>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
