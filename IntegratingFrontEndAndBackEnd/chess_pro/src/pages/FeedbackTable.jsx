import React, { useState, useEffect } from "react";
import axios from "axios";
import '../assets/css/Adminprofilepage.css';
import Asidebar from "../components/Asidebar";


function FeedbackTable() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    // Fetch feedback data from backend API
    const fetchFeedbackData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/feedback/all");
        setFeedbackData(response.data); // Assuming the API response contains an array of feedback objects
      } catch (error) {
        console.error("Error fetching feedback data:", error);
      }
    };

    fetchFeedbackData();
  }, []);

  return (


    <div className='student'>
    <Asidebar />
    <div className='stud1'>
      <h2>Feedback</h2>
      <div className='stud'>
        <table className='student-table'>
          <thead>
            <tr>
            <th>ID</th>
             <th>Email</th>
            <th>Name</th>
             <th>Mobile Number</th>
             <th>Message</th>
            </tr>
          </thead>
          <tbody>
        {feedbackData.map((feedback) => ( 
            <tr key={feedback.feedbackId}>
              <td>{feedback.feedbackId}</td>
              <td>{feedback.email}</td>
              <td>{feedback.name}</td>
              <td>{feedback.mobileNumber}</td>
              <td>{feedback.message}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
    // <div>
    //   <h2>Feedback Table</h2>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>ID</th>
    //         <th>Email</th>
    //         <th>Name</th>
    //         <th>Mobile Number</th>
    //         <th>Message</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {feedbackData.map((feedback) => ( */}
    //         <tr key={feedback.feedbackId}>
    //           <td>{feedback.feedbackId}</td>
    //           <td>{feedback.email}</td>
    //           <td>{feedback.name}</td>
    //           <td>{feedback.mobileNumber}</td>
    //           <td>{feedback.message}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table> */}
     // </div> 
  );
}

export default FeedbackTable;
