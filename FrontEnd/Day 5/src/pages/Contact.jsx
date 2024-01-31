import contactimg from '../assets/images/contact1.png';
import '../assets/css/Contactpage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TextField } from "@mui/material";



function Contact(){
    return(
        <>
        <Navbar/>
        <div className="conct">
            <div className="contclass">
                <div className="cls1">
                    <h1>Get in touch with us</h1>
                    <h4>Looking for an Indian chess academy with <br></br>
                    international standards? You are just a<br></br> 
                    phone call away! Contact us today, we’re <br></br>
                    here to help.</h4>
                </div>
                <div className="cls2">
                <img src={contactimg} alt="contact img" />
                </div>
            </div>
            {/* <center> */}
            <br></br>

            <div className='cls8'>
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
                //   value={email}
                 
                />
              </div>
              <div className="cls4">
                <TextField
                  id="standard-basic"
                  label="Firstname"
                  variant="standard"
                //   value={username}
                  
                />
              </div>
              <div className="cls4">
                <TextField
                  id="standard-basic"
                  label="Lastname"
                  variant="standard"
                //   value={mobileNumber}
                 
                />
              </div>
              <div className="cls4">
                <TextField
                  id="standard-basic"
                  label="Mobile number"
                  variant="standard"
                //   type="password"
                //   value={password}
                  
                />
              </div>
              <div className="cls4">
                <TextField
                  id="standard-basic"
                  label="Message"
                  variant="standard"
                //   type="password"
                //   value={confirmPassword}
                 
                />
              </div>

              <div className="cls5">
                  <button className="cls6" >
                    Send
                  </button>
                </div>


            </div>
            </center> 
            </div>
            {/* </center> */}

            </div>

        </div>
        <Footer/>
        </>
    )
}
export default Contact;