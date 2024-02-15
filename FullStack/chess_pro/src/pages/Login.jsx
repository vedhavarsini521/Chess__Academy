import React, { useState } from "react";
import "../assets/css/Loginpage.css";
import { TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import axios from 'axios';

function Login() {
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

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/v1/auth/authenticate', {
        email,
        password
      });

      const { token ,id} = response.data.authenticationResponse;
      console.log("User ID:", id);

    localStorage.setItem('userId', id);
      localStorage.setItem('token', token); // Store token in local storage
      // console.log(response.data.message);
      console.log(response.data.authenticationResponse);


      navigate('/profile');
    } catch (error) {
      if (error.response && error.response.data) {
        console.error(error.response.data);
        setErrorMessage(error.response.data.message || "An error occurred");
      } else if (error.request) {
        console.error(error.request);
        setErrorMessage("Request error");
      } else {
        console.error('Error', error.message);
        setErrorMessage("Unknown error occurred");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="parent">
        <div className="sign">
          <center>
            <div className="login">
              <h1 className="lo">Welcome</h1>
            </div>
            <br></br>
            <h2>User</h2>
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
                  <button className="but2" type="submit" onClick={handleSubmit}>
                    Sign in
                  </button>
                </div>
                <a href="/register" className="link-button">
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

export default Login;











// import React, { useState } from "react";
// import "../assets/css/Loginpage.css";
// import { TextField } from "@mui/material";
// import { useNavigate } from 'react-router-dom';
// import Navbar from "../components/Navbar";
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//     setErrorMessage(""); 
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//     setErrorMessage(""); 
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:8081/api/v1/auth/authenticate', {
//         email,
//         password
//       });

//       console.log(response.data.message);
//       navigate('/profile');
//     } catch (error) {
//       if (error.response && error.response.data) {
//         console.error(error.response.data);
//         setErrorMessage(error.response.data.message || "An error occurred");
//       } else if (error.request) {
//         console.error(error.request);
//         setErrorMessage("Request error");
//       } else {
//         console.error('Error', error.message);
//         setErrorMessage("Unknown error occurred");
//       }
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="parent">
//         <div className="sign">
//           <center>
//             <div className="login">
//               <h1 className="lo">Welcome</h1>
//             </div>
//             <br></br>
//             <h2>User</h2>
//           </center>
//           {errorMessage && (
//             <div style={{ color: "red", textAlign: "center", marginBottom: "10px" }}>
//               {errorMessage}
//             </div>
//           )}
//           <div className="fo">
//             <center>
//               <TextField
//                 id="standard-basic"
//                 label="Email"
//                 variant="standard"
//                 value={email}
//                 onChange={handleEmailChange}
//                 error={!!errorMessage} 
//               />
//               <br></br>
//               <div className="pass">
//                 <TextField
//                   id="standard-basic"
//                   label="Password"
//                   variant="standard"
//                   type="password"
//                   value={password}
//                   onChange={handlePasswordChange}
//                   error={!!errorMessage} 
//                 />
//               </div>
//               <div className="but">
//                 <div className="but1">
//                   <button className="but2" type="submit" onClick={handleSubmit}>
//                     Sign in
//                   </button>
//                 </div>
//                 <a href="/register" className="link-button">
//                   Create a new Account
//                 </a>
//               </div>
//             </center>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;
