import SideNav,{
    Toggle,
    NavItem,
    NavIcon,
    NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-SideNav.css";
import {useNavigate} from 'react-router-dom';
import '../assets/css/Asidebarpage.css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function Usidebar(){
    const navigate=useNavigate();
    return <SideNav
        onSelect={selected=>{
            console.log(selected);
            navigate('/'+selected)
        }}
        className='mysidenav' style={{"background-color":'rgb(1, 1, 42)'}}
        >
            <SideNav.Toggle/>
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="profile">
                    <NavIcon>
                        <i className="fa-solid fa-user" style={{fontSize: "1.5em"}}></i>
                    </NavIcon>
                    <NavText>Profile</NavText>
                </NavItem>
                <NavItem eventKey="courses">
                    <NavIcon>
                        <i class="fa-solid fa-school" style={{fontSize: "1.5em"}}></i>
                    </NavIcon>
                    <NavText>Academy</NavText>
                </NavItem>
                <NavItem eventKey="enroll">
                    <NavIcon>
                        <i className="fa-solid fa-book-open-reader" style={{fontSize: "1.5em"}}></i>
                    </NavIcon>
                    <NavText>Enrolled Courses</NavText>
                </NavItem>
                <NavItem eventKey="login">
                    <NavIcon>
                        <i className="fa-solid fa-arrow-right-from-bracket" style={{fontSize: "1.5em"}}></i>
                    </NavIcon>
                    <NavText>Logout</NavText>
                </NavItem>
                {/* <NavItem eventKey="dash">
                    <NavIcon>
                    <FontAwesomeIcon icon={faArrowLeft} style={{fontSize:"1.5em"}}/> */}
                        {/* <i className="fa-solid fa-arrow-right-from-bracket" style={{fontSize: "1.5em"}}></i> */}
                    {/* </NavIcon> */}
                    {/* <NavText>Logout</NavText> */}
                {/* </NavItem> */}
            </SideNav.Nav>
        </SideNav>
}
export default Usidebar;