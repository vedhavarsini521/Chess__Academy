

import React from "react";
import "../assets/css/Footerpage.css"; 
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";



function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: info@chessinscribe.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
        <div className="footer-section">
          <h2>Address</h2>
          <p>123 Chess Street</p>
          <p>Cityville, State 12345</p>
        </div>
        <div className="footer-section">
        
          <h2>Follow Us</h2>
          <br></br>
          <div className="social-icons">
          <BsTwitter className="icon"/>
          <SiLinkedin className="icon"/>
          <BsYoutube className="icon"/>
          <FaFacebookF className="icon"/>

          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2022 Chess Institute. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;







// function Footer()
// {
//     return(
//         <div className="footer">
//             <div className="sb_footer section_padding">
//                 <div className="sb_footer-links">
//                     <div className="sb_footer-links-div">
//                         <h4>for Business</h4>
//                         <a href="/employeer"><p>Employeer</p></a>
//                         <a href="/healthplan"><p>Health plan</p></a>
//                         <a href="/individual"><p>Individual</p></a>
//                     </div>
//                     <div className="sb_footer-links_div">
//                         <h4>Resources</h4></div>    
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer;