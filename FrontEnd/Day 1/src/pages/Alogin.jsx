import React, { useState } from "react";
import "../assets/css/Loginpage.css";
import { TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";

function Alogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage(""); 
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrorMessage(""); 
  };

  const handleSubmit = () => {
    if (email.trim() === "" || password.trim() === "") {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    if (email === 'admin@gmail.com' && password === '123456') {
      navigate('/admhome');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    setErrorMessage("");
  };
  return (
    <>
    <Navbar/>
      <div className="parent">
        <div className="sign">
          <center>
            <div className="login">
              <h1 className="lo">Welcome</h1>
            </div>
            <br></br>
          <h2>Admin</h2>
          </center>
          

          {errorMessage && (
            <div style={{ color: "red", textAlign: "center", marginBottom: "10px" }}>
              {errorMessage}
            </div>
          )}
          <div className="fo">
            <center>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                value={email}
                onChange={handleEmailChange}
                error={!!errorMessage} 
              />
              <br></br>
              <div className="pass">
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  error={!!errorMessage} 
                />
              </div>
              <div className="but">
                <div className="but1">
                  {/* <Link to='/dashb'> */}
                  <button className="but2" type="submit" onClick={handleSubmit}>
                  {/* <button type="submit">Login</button><break></break> */}
                    Sign in

                  </button>
                  {/* </Link> */}
                </div>
                <a href="/areg" className="link-button">
                  Create a new Account
                </a>
              </div>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default Alogin;
