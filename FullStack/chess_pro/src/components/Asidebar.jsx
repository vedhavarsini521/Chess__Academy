import SideNav,{
    Toggle,
    NavItem,
    NavIcon,
    NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-SideNav.css";
import {useNavigate} from 'react-router-dom';
import '../assets/css/Asidebarpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';


function Asidebar(){
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
                <NavItem eventKey="admprofile">
                    <NavIcon>
                        <i className="fa-solid fa-user" style={{fontSize: "1.5em"}}></i>
                    </NavIcon>
                    <NavText>Profile</NavText>
                </NavItem>
                <NavItem eventKey="Admacademy">
                    <NavIcon>
                        <i class="fa-solid fa-school" style={{fontSize: "1.5em"}}></i>
                    </NavIcon>
                    <NavText>Academy</NavText>
                </NavItem>
                <NavItem eventKey="admlearn">
                    <NavIcon>
                        <i className="fa-solid fa-book-open-reader" style={{fontSize: "1.5em"}}></i>
                    </NavIcon>
                    <NavText>Courses</NavText>
                </NavItem>
                <NavItem eventKey="sitehome">
                    <NavIcon>
                        <i className="fa-solid fa-cogs" style={{fontSize: "1.5em"}}></i>
                    </NavIcon>
                    <NavText>Site setting</NavText>
                </NavItem>
                
                <NavItem eventKey="alog">
                    <NavIcon>
                        <i className="fa-solid fa-arrow-right-from-bracket" style={{fontSize: "1.5em"}}></i>
                    </NavIcon>
                    <NavText>Logout</NavText>
                </NavItem>
                
            </SideNav.Nav>
        </SideNav>
}
export default Asidebar;