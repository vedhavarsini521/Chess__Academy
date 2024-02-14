
import "../assets/css/Homepage.css";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import videoSrc from '../assets/videos/chessgame.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
// import Slider from 'react-slick'; 



function Home(){

  const faqs = [
    {
      id: 1,
      question: 'What is your chess academy about?',
      answer: 'Our chess academy is dedicated to providing high-quality chess training with international standards. We focus on developing skills and strategies to help our students excel in the game of chess.',
    },
    {
      id: 2,
      question: 'How can I enroll in your chess classes?',
      answer: 'To enroll in our chess classes, you can visit our registration page on our website or contact us directly through the provided contact information. We offer various programs suitable for different skill levels.',
    },
    {
      id: 3,
      question: 'Do you provide online chess coaching?',
      answer: 'Yes, we offer online chess coaching for individuals who prefer remote learning. Our online programs are designed to provide the same level of quality and expertise as our in-person classes.',
    },
    {
      id: 4,
      question: 'What age groups do you cater to?',
      answer: 'Our chess academy caters to individuals of all age groups. We have specialized programs for children, teenagers, and adults. Our training is tailored to meet the unique needs and skill levels of each age group.',
    },
    {
      id: 5,
      question: 'Is there any prerequisite to join your advanced chess program?',
      answer: 'For our advanced chess program, we recommend that participants have a strong understanding of basic chess rules and strategies. Prior experience in competitive chess or completion of our intermediate program may also be beneficial.',
    },
  ];

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (faqId) => {
    setOpenQuestion(openQuestion === faqId ? null : faqId);
  };


    return (
      <>
      <Navbar/>
      
        <div className='home'>
          <div className="text-section">
            <div className="texts">
              <div className="th">
            <h1><span>C</span>hess</h1>
            <h2><span>I</span>nscribe</h2>
            </div><br></br>
            <h4>Starting chess is easy! Leave your application and we’ll contact you as soon as possible!</h4>
            </div>
            <div className="tsimage">
              <img className="i1" src="src\assets\images\home5.jpg" alt="img"></img>
            </div>   
        </div>

        <div className="text-section2">
          <div className="texts1">
          <h2>Building champions: in the classroom and the community</h2>
          </div>
          <div className="texts2">
            <div className="th1">
              <img src="src\assets\images\knight1.jpg" alt="img"></img>
              <img src="src\assets\images\bishop.jpg" alt="img"></img>
              <img src="src\assets\images\queen3.jpg" alt="img"></img>
            </div>
            <div className="texts3">
              <div className="th2">
                <h2>Accomplished coaches</h2>
                <h4>Our chess school will be a springboard for your child in the world of high achievements.</h4>
              </div>
              <div className="th2">
                <h2>Accomplished coaches</h2>
                <h4>Our chess school will be a springboard for your child in the world of high achievements.</h4>
              </div>
              <div className="th2">
                <h2>Accomplished coaches</h2>
                <h4>Our chess school will be a springboard for your child in the world of high achievements.</h4>
              </div>
            </div>
          </div>
          </div>

          <div className="video-container">
        <video autoPlay muted loop width="100%" height="auto">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <br></br>
      <ul>
        {faqs.map((faq) => (
          <li key={faq.id}>
            <div
              className={`question ${openQuestion === faq.id ? 'open' : ''}`}
              onClick={() => toggleQuestion(faq.id)}
            >
              {faq.question} 
        
            </div>
            {openQuestion === faq.id && <div className="answer"><br></br>{faq.answer}</div>}
          </li>
        ))}
      </ul>
    </div>

      <div className="texts4">
        <div className="th4">
        <h1>Chess championship: in the classroom and the community</h1>
        <h4>Chess tournament is a small holiday. You come, around, in addition to you, many children, parents, the child can immediately find new friends – after all, it is much easier to meet and make friends with a person if you know in advance that you have a common interest – chess.</h4>
        </div>
        <div className="th5">
          <img src="src\assets\images\board.jpg" alt="image"></img>
        </div>
      </div>

      
    

      </div>
      <Footer/>

      </>
    )
}

export default Home;