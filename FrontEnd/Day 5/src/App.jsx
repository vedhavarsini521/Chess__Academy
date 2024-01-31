import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Dashboarduser from "./pages/Dashboarduser";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Enrollment from "./pages/Enrollment";
import DashboardNavbar from "./pages/DashboardNavbar";
import Alogin from "./pages/Alogin";
import Aregister from "./pages/Aregister";
import Log from "./pages/log";
import Moreinfo from "./pages/Moreinfo";
import Enroll from "./pages/Enroll";
import { PieChart } from "@mui/icons-material";
import Adminhome from "./pages/Adminhome";
import Adminprofile from "./pages/Adminprofile";
import Adminacademy from "./pages/Adminacademy";
import AdminCourses from "./pages/AdminCourses";
import Asidebar from "./components/Asidebar";
import Usidebar from "./components/Usidebar";
import Adminlearn from "./pages/Adminlearn";
// import Learninggraph from "./pages/Learninggraph";



function App() {
  return (
    <>
    {/* <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboarduser />} /> */}
        {/* Add other routes as needed */}
      {/* </Routes>
    </Router> */}

      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
          <Route path="/dashb" element={<Dashboarduser/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/enroll" element={<Enrollment/>}/>
          <Route path="/dash" element={<DashboardNavbar/>}/>
          <Route path="/alog" element={<Alogin/>}/>
          <Route path="/areg" element={<Aregister/>}/>
          <Route path="/log" element={<Log/>}/>
          <Route path="/more" element={<Moreinfo/>}/>
          <Route path="/enr" element={<Enroll/>}/>
          {/* <Route path="/lear" element={<MyLearnings/>}/> */}
          {/* <Route path="/pie" element={<PieChart/>}/>   */}
          <Route path="/admhome" element={<Adminhome/>}/>
          <Route path="/admprofile" element={<Adminprofile/>}/>
          <Route path="/admacademy" element={<Adminacademy/>}/>
          <Route path="/admcour" element={<AdminCourses/>}/>
          <Route path="aside" element={<Asidebar/>}/>
          <Route path="uside" element={<Usidebar/>}/>
          <Route path="/admlearn" element={<Adminlearn/>}/>
          {/* <Route path="graph" element={<Learninggraph/>}/> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
