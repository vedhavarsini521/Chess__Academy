import '../assets/css/Sitehomepage.css';
import aboutimage from '../assets/images/about2.webp';
import { useState, useEffect } from 'react';
import axios from "axios";
import Asidebar from '../components/Asidebar';

function About() {
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
  const [editedField, setEditedField] = useState("");

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

  const handleEdit = (field) => {
    setEditedField(field);
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await axios.put("http://localhost:8081/api/about-content/update/1", aboutContent);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating data:', error);
      // Handle error cases here
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setAboutContent({ ...aboutContent, [editedField]: e.target.value });
  };

  return(
    <>
      <div className='siteedit'>
        <Asidebar/>
        <div className='stopclass2'>
          <div className='scl3'>
            <img src={aboutimage} alt="about img"/>
          </div>
          <div className='scl4'>
            <h1 onClick={() => handleEdit('heading1')} style={{ border: editedField === 'heading1' ? '1px solid #000' : 'none' }}>
              {isEditing && editedField === 'heading1' ? (
                <input
                  type="text"
                  value={aboutContent.heading1}
                  onChange={handleInputChange}
                />
              ) : (
                aboutContent.heading1
              )}
            </h1>
            <h4 onClick={() => handleEdit('text1')} style={{ border: editedField === 'text1' ? '1px solid #000' : 'none' }}>
              {isEditing && editedField === 'text1' ? (
                <input
                  type="text"
                  value={aboutContent.text1}
                  onChange={handleInputChange}
                />
              ) : (
                aboutContent.text1
              )}
            </h4>
            <br></br>
            <h4 onClick={() => handleEdit('text2')} style={{ border: editedField === 'text2' ? '1px solid #000' : 'none' }}>
              {isEditing && editedField === 'text2' ? (
                <input
                  type="text"
                  value={aboutContent.text2}
                  onChange={handleInputChange}
                />
              ) : (
                aboutContent.text2
              )}
            </h4>
            <ul className='sbul'>
              <li onClick={() => handleEdit('p1')} style={{ border: editedField === 'p1' ? '1px solid #000' : 'none' }} className='sbulleted'>
                {isEditing && editedField === 'p1' ? (
                  <input
                    type="text"
                    value={aboutContent.p1}
                    onChange={handleInputChange}
                  />
                ) : (
                  aboutContent.p1
                )}
              </li>
              <li onClick={() => handleEdit('p2')} style={{ border: editedField === 'p2' ? '1px solid #000' : 'none' }} className='sbulleted'>
                {isEditing && editedField === 'p2' ? (
                  <input
                    type="text"
                    value={aboutContent.p2}
                    onChange={handleInputChange}
                  />
                ) : (
                  aboutContent.p2
                )}
              </li>
              <li onClick={() => handleEdit('p3')} style={{ border: editedField === 'p3' ? '1px solid #000' : 'none' }} className='sbulleted'>
                {isEditing && editedField === 'p3' ? (
                  <input
                    type="text"
                    value={aboutContent.p3}
                    onChange={handleInputChange}
                  />
                ) : (
                  aboutContent.p3
                )}
              </li>
              <li onClick={() => handleEdit('p4')} style={{ border: editedField === 'p4' ? '1px solid #000' : 'none' }} className='sbulleted'>
                {isEditing && editedField === 'p4' ? (
                  <input
                    type="text"
                    value={aboutContent.p4}
                    onChange={handleInputChange}
                  />
                ) : (
                  aboutContent.p4
                )}
              </li>
              <li onClick={() => handleEdit('p5')} style={{ border: editedField === 'p5' ? '1px solid #000' : 'none' }} className='sbulleted'>
                {isEditing && editedField === 'p5' ? (
                  <input
                    type="text"
                    value={aboutContent.p5}
                    onChange={handleInputChange}
                  />
                ) : (
                  aboutContent.p5
                )}
              </li>
              <li onClick={() => handleEdit('p6')} style={{ border: editedField === 'p6' ? '1px solid #000' : 'none' }} className='sbulleted'>
                {isEditing && editedField === 'p6' ? (
                  <input
                    type="text"
                    value={aboutContent.p6}
                    onChange={handleInputChange}
                  />
                ) : (
                  aboutContent.p6
                )}
              </li>
            </ul>
          </div>
        </div>
        {isEditing && (
          <div className="admin-edit">
            <button onClick={handleSave}>
              Save
            </button>
            <button onClick={handleCancel}>
              Cancel
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default About;
