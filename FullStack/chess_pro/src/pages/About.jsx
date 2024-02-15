import aboutimg from '../assets/images/about1.jpg';
import '../assets/css/Aboutpage.css';
import aboutimage from '../assets/images/about2.webp';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useState, useEffect} from 'react';


function About()
{
    const [aboutContent, setAboutContent] = useState({
        heading1:'',
        text1: '',
        text2: '',
        p1:'',
        p2:'',
        p3:'',
        p4:'',
        p5:'',
        p6:''
      });
    
      const [isEditing, setIsEditing] = useState(false);
      const [newMission, setNewMission] = useState("");
      const [newTeam, setNewTeam] = useState("");
    
      useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:8081/api/about-content/get/1");
          const data = response.data;
          setAboutContent(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    return(
        <>
        <Navbar/>
        <div className="abou">
            <div className="topclass">
                <div className="cl1">
                    <h1>Who we are</h1>
                    <h2>Never compromise anything when it comes to giving the best opportunity for your child to learn and explore.</h2>
                    <br></br>
                    <br></br>
                    <p className="text1">
                    It’s time to make the right investment for your child’s future with the best 
                    chess move to win! With tons of structureless offline/online classes
                    available at every nook these days, students who pursue Chess have  often
                    been found lost in translation. But 8×8 has taken that barrier off! Learn
                    Chess online with the best chess tricks and strategies professionally with
                     Chess Inspire.</p>
                     <p className="text1">
                    We help and groom aspiring grand masters with potential
                    to play International Chess Tournaments.We help you to 
                    find the best institute for your child's chess training. 
                    </p>
                </div>
                <div className="cl2">
                    <img src={aboutimg} alt="about img" />

                </div>
            </div><br></br>
            <div className='topclass2'>
                <div className='cl3'>
                    <img src={aboutimage} alt="about img"/>
                </div>
                <div className='cl4'>
                    <h1>{aboutContent.heading1}</h1>
                    <h4>{aboutContent.text1}</h4>
                    <br></br>
                    <h4>{aboutContent.text2} </h4>
                    <ul className='bul'>
                        <li className='bulleted'>{aboutContent.p1}</li>
                        <li className='bulleted'>{aboutContent.p2}</li>
                        <li className='bulleted'>{aboutContent.p3}</li>
                        <li className='bulleted'>{aboutContent.p4}</li>
                        <li className='bulleted'>{aboutContent.p5}</li>
                        <li className='bulleted'>{aboutContent.p6}</li>
                    </ul>
                </div>
            </div>

            <div className='topclass3'>
                <div className='cl5'>
                    <h1>Help your child improve their <br></br>Strategic thinking</h1><br></br>
                    <h3>Chess allows children to develop such qualities as independence and determination. Carried away by the game, the child learns to think and concentrate. Gets skills such as calculating all kinds of moves, their consequences, forecasting events and the ability to take correct steps. Not only mental abilities are formed, but also personal qualities of character.</h3>
    
                </div>
                <br></br>
                <div className='cl6'>
                    <div className='cl7'>
                        <img src='src\assets\images\aboutimage1.webp' alt='image'></img>
                    </div>
                    <div className='cl7'>
                        <img src='src\assets\images\about_img2.webp' alt='image'></img>
                    </div>
                </div>
                <div className='cl6'>
                    <div className='cl7'>
                        <h3>It is known that professional chess players have visual memory different from most people. This quality is developed by years of training and remains with the person for the rest of his life.</h3>
                    </div>
                    <div className='cl7'>
                        <h3>Playing chess, the child learns to think not only abstractly, but also logically. Considering the options for moves on the board, he must choose the only correct of the set and predict the course of the opponent’s thought.</h3>
                    </div>
                </div>
            </div>

        </div>
        <div className='foab'>
        <Footer/>
        </div>

        </>
    )
}
export default About;