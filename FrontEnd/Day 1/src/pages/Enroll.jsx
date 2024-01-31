

import React, { useState } from 'react';
import '../assets/css/Enrollpage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faGraduationCap, faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from "@mui/icons-material/Menu";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import Usidebar from '../components/Usidebar';


 function Enroll() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    motherName: '',
    phoneNumber: '',
    alternateNumber: '',
    email: '',
    age: '',
    address: {
      houseNo: '',
      streetName: '',
      area: '',
      pincode: '',
      nationality: '',
      state: '',
    },
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    address: {
      houseNo: '',
      streetName: '',
      area: '',
      pincode: '',
      nationality: '',
      state: '',
    },
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
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
    // Clear the specific field error when the user starts typing
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      address: {
        ...prevErrors.address,
        [name]: '',
      },
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      address: {
        houseNo: '',
        streetName: '',
        area: '',
        pincode: '',
        nationality: '',
        state: '',
      },
    };

    const requiredFields = ['firstName', 'lastName', 'email', 'age'];
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

    const addressFields = ['houseNo', 'streetName', 'area', 'pincode', 'nationality', 'state'];
    addressFields.forEach((field) => {
      if (!formData.address[field]) {
        newErrors.address[field] = 'This field is required';
        isValid = false;
      }
    });

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  return (


    <div className='enrol' >
        <Usidebar/>

<div className='enro'>
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
      Father Name:
      <br></br>
      <input
        type="text"
        name="fatherName"
        value={formData.fatherName}
        onChange={handleChange}
        required
      />
    </label>
    <br />

    <label className='enr3'>
      Mother Name:
      <br></br>
      <input
        type="text"
        name="motherName"
        value={formData.motherName}
        onChange={handleChange}
        required
      />
    </label>
    <br />
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
          value={formData.address.houseNo}
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
          value={formData.address.streetName}
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
          value={formData.address.area}
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
          value={formData.address.pincode}
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
          value={formData.address.state}
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
          value={formData.address.nationality}
          onChange={handleAddressChange}
          required
        />
      </label>
      <br />

     
      </div>
    </div>
    <br></br>
<center>
    <button className="enrbut" type="submit">Submit</button></center>
  </form>
  </div>
  </div>
  // </div>
  );
};

export default Enroll;
