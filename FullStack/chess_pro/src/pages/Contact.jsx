// import contactimg from '../assets/images/contact1.png';
import '../assets/css/Contactpage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TextField } from "@mui/material";
import axios from 'axios';
import { useState} from 'react';


function Contact(){


  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8081/api/feedback/add', {
        email,
        name,
        mobileNumber,
        message,
      });
      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('An error occurred while submitting feedback. Please try again.');
    }
  };


    return(
        <>
        <Navbar/>
        <div className="conct">
            <div className="contclass">  
                
                <div className="cls1">
                <h1>Get in</h1> 
                <h2><span>T</span>ouch with us</h2>
                    <h4>Looking for an Indian chess academy with
                    international standards? You are just a 
                    phone call away! Contact us today, we’re
                    here to help.</h4>
                    </div>
                <div className="cls2">
                <img src='src\assets\images\top.jpg' alt="contact img" />
                </div>
            </div>
            {/* <center> */}
            <br></br>
            </div>

            <div className='contmap'>
            
      <iframe
        title="Google Map"
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15697.786344944958!2d76.9583!3d10.9379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AYour_Marker_Name!2sYour_Marker_Name!5e0!3m2!1sen!2sus!4v1643923772840!5m2!1sen!2sus"
        width="100%"
        height="350"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
  
            </div>

            <div className='cls8'>

              <div className='cls9'>
              <h2>Don't Hesitate To <br></br>Contact Us</h2><br></br>
            <p>We are here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.</p>
              </div>
                {/* <div className='cls9'>
                    <img src='src\assets\images\feedbg.jpg'></img>
                </div> */}
            <div className='cls7'>
             <center>  
            <div className='cls3'>
                <h1>For Queries</h1>
            <div className="cls4">
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  value={email}
              onChange={(e) => setEmail(e.target.value)}
                //   value={email}
                 
                />
              </div>
              <div className="cls4">
                <TextField
                  id="standard-basic"
                  label="name"
                  variant="standard"
                  value={name}
              onChange={(e) => setName(e.target.value)}
                //   value={username}
                  
                />
              </div>
              <div className="cls4">
                <TextField
                  id="standard-basic"
                  label="Mobile number"
                  variant="standard"
                  value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
                //   type="password"
                //   value={password}
                  
                />
              </div>
              <div className="cls4">
                <TextField
                  id="standard-basic"
                  label="Message"
                  variant="standard"
                  value={message}
              onChange={(e) => setMessage(e.target.value)}
                //   type="password"
                //   value={confirmPassword}
                 
                />
              </div>

              <div className="cls5">
                  <button className="cls6" onClick={handleSubmit}>
                    Send
                  </button>
                </div>


            </div>
            </center> 
            </div>
            {/* </center> */}

            </div>

        {/* </div> */}
        <Footer/>
        </>
    )
}
export default Contact;