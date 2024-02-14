

import React, { useState } from 'react';
import '../assets/css/Enrollpage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faGraduationCap, faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from "@mui/icons-material/Menu";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import Usidebar from '../components/Usidebar';
import enrollimage from '../assets/images/enrollform.jpg';


 function Enroll() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    level: '',
    phoneNumber: '',
    alternateNumber: '',
    email: '',
    age: '',
    // address: {
      houseNo: '',
      streetName: '',
      area: '',
      pincode: '',
      nationality: '',
      state: '',
    // },
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
      gender: '',
      level: '',
      phoneNumber: '',
      alternateNumber: '',
    email: '',
    age: '',
    // address: {
      houseNo: '',
      streetName: '',
      area: '',
      pincode: '',
      nationality: '',
      state: '',
    // },
  });
  const [isSidebarOpen1, setIsSidebarOpen1] = useState(false);


  const toggleSidebar1 = () => {
    setIsSidebarOpen1(!isSidebarOpen1);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear errors for the changed field
    }));
  };

  // const handleAddressChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     address: {
  //       ...prevData.address,
  //       [name]: value,
  //     },
  //   }));
  //   setFormErrors((prevErrors) => ({
  //     ...prevErrors,
  //     address: {
  //       ...prevErrors.address,
  //       [name]: '',
  //     },
  //   }));
  // };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      houseNo: '',
      streetName: '',
      area: '',
      pincode: '',
      nationality: '',
      state: '',
    };

    const requiredFields = ['firstName', 'lastName', 'email', 'age', 'houseNo', 'streetName', 'area', 'pincode', 'nationality', 'state'];
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
        isValid = false;
      }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    const ageValue = parseInt(formData.age, 10);
    if (isNaN(ageValue) || ageValue <= 0) {
      newErrors.age = 'Please enter a valid age';
      isValid = false;
    }

    // const addressFields = ['houseNo', 'streetName', 'area', 'pincode', 'nationality', 'state'];
    // addressFields.forEach((field) => {
    //   if (!formData.address[field]) {
    //     newErrors.address[field] = 'This field is required';
    //     isValid = false;
    //   }
    // });

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:8081/api/enrollments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Enrollment successful');
          // Optionally reset the form after successful submission
          // setFormData({ ...initialFormData });
        } else {
          console.error('Enrollment failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  

  return (


    <div className='enrol' >
        <Usidebar/>

<div className='enro'>
  <div className='enrk'>
    <img src={enrollimage} alt='image'></img>
      <div className='enrfor'>
    <center>
    <h1>Enrollment Form</h1></center>
    <form className="enr" onSubmit={handleSubmit}>
        <div className='enr1'>
    <label>
      First Name:
      <br></br>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
    </label>
    <br />

    <label className='enr3'>
      Last Name:
      <br></br>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
    </label>
   
    <br />
    </div>
    <div className='enr1'>

    <label>
      Gender:
      <br></br>
      <input
        type="text"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
      />
    </label>
    <br />

    {/* <label className='enr3'>
      Level:
      <br></br>
      <input
        type="text"
        name="mode"
        value={formData.level}
        onChange={handleChange}
        required
      />
    </label>
    <br /> */}
    </div>

    <div className='enr1'>

    <label>
      Phone Number:
      <br></br>
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
    </label>
    <br />

    <label className='enr3'>
      Alternate Number:
      <br></br>
      <input
        type="text"
        name="alternateNumber"
        value={formData.alternateNumber}
        onChange={handleChange}
        required
      />
    </label>
    <br />
    </div>

    <div className='enr1'>

    <label>
      Email:
      <br></br>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </label>
    <br />

    <label className='enr3'>
      Age:
      <br></br>
      <input
        type="text"
        name="age"
        value={formData.age}
        onChange={handleChange}
        required
      />
    </label>
    <br />
    </div>
    <br></br>

    <div className='enr2'>
        <center>
      <h2>Address Information</h2>
      </center>
      <br></br>
      <div className='enr1'>
      <label>
        House No:
        <br></br>
        <input
          type="text"
          name="houseNo"
          value={formData.houseNo}
          onChange={handleAddressChange}
          required
        />
      </label>
      <br />

      <label className='enr3'>
        Street Name:
        <br></br>
        <input
          type="text"
          name="streetName"
          value={formData.streetName}
          onChange={handleAddressChange}
          required
        />
      </label>
      <br />
      </div>

      <div className='enr1'>
      <label>
        Area:
        <br></br>
        <input
          type="text"
          name="area"
          value={formData.area}
          onChange={handleAddressChange}
          required
        />
      </label>
      <br />

      <label className='enr3'>
        Pincode:
        <br></br>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleAddressChange}
          required
        />
      </label>
      <br />
      </div>

      <div className='enr1'>


      <label>
        State:
        <br></br>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleAddressChange}
          required
        />
      </label>
      <br />

      <label className='enr3'>
        Nationality:
        <br></br>
        <input
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={handleAddressChange}
          required
        />
      </label>
      <br />

     
      </div>
    </div>
    <br></br>
<center>
    <button className="enrbut" type="submit" onClick={handleSubmit}>Submit</button>
    <a href='/more'><button className="enrbut" type="submit">Back</button></a>
    </center>
  </form>
  {/* </div> */}
  </div>
  </div>
  </div>
   </div>
  );
};

export default Enroll;
