import "../assets/css/Homepage.css";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';



function Home(){


    const texts = [
        "Help your child to think in a better way",
        "Show your child the best path to grow",

      ];
    
      const [displayText, setDisplayText] = useState(texts[0]);
    
      useEffect(() => {

        const updateText = () => {
          let currentIndex = texts.indexOf(displayText);
          currentIndex = (currentIndex + 1) % texts.length;
          setDisplayText(texts[currentIndex]);
        };
    
        const intervalId = setInterval(updateText, 3000);

        return () => clearInterval(intervalId);
      }, [displayText, texts]);

  
  

    return (
      <>
      <Navbar/>
        <div className='home'>
            <div className="text-section">
            <br></br>
            <h1>{displayText}</h1>
            <br></br>
            <br></br>
            <h3>Groom your child to the best level of intelligence,<br></br>enhance reasoning shills and decision making power <br></br>boost the confidence and analytic skills.</h3>
        </div>
      </div>
      <Footer/>

      </>
    )
}

export default Home;