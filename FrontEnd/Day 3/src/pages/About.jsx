import aboutimg from '../assets/images/about1.jpg';
import '../assets/css/Aboutpage.css';
import aboutimage from '../assets/images/about2.webp';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function About()
{
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
                    <br></br>chess move to win! With tons of structureless offline/online classes<br></br>
                    available at every nook these days, students who pursue Chess have  often<br></br>
                    been found lost in translation. But 8×8 has taken that barrier off! Learn<br></br>
                    Chess online with the best chess tricks and strategies professionally with
                    <br></br> Chess Inspire.</p><br></br>
                     <p className="text1">
                    We help and groom aspiring grand masters with potential<br></br>
                    to play International Chess Tournaments.We help you to <br></br>
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
                    <h1>Why Chess Inscribe</h1>
                    <h4>We help and groom aspiring grandmasters with the potential to <br>
                    </br>play International Chess Tournaments with the best chess<br>
                    </br> moves to win. Our online sessions will make your child <br>
                    </br>more productive not just at Chess but in school and life.</h4>
                    <ul className='bul'>
                        <li className='bulleted'>Individual Coaching</li>
                        <li className='bulleted'>Worldwide Students</li>
                        <li className='bulleted'>Talented Trainers</li>
                        <li className='bulleted'>Trial Tournaments</li>
                        <li className='bulleted'>Scholarship and Prizes</li>
                        <li className='bulleted'>Affordable Plans</li>
                    </ul>
                </div>
            </div>

        </div>
        <Footer/>

        </>
    )
}
export default About;