import React, { useState } from 'react';
import '../assets/css/Aboutpage.css';
import aboutimage from '../assets/images/about2.webp';
import aboutimg from '../assets/images/about1.jpg';

function Sitehome() {
  const [editMode, setEditMode] = useState(false);

  // State variables for editable content
  const [whoWeAreContent, setWhoWeAreContent] = useState({
    title: 'Who we are',
    subTitle: 'Never compromise anything when it comes to giving the best opportunity for your child to learn and explore.',
    text1: "It’s time to make the right investment for your child’s future with the best chess move to win! With tons of structureless offline/online classes available at every nook these days, students who pursue Chess have often been found lost in translation. But 8×8 has taken that barrier off! Learn Chess online with the best chess tricks and strategies professionally with Chess Inspire.",
    text2: "We help and groom aspiring grandmasters with potential to play International Chess Tournaments. We help you to find the best institute for your child's chess training.",
  });

  const [whyChessInscribeContent, setWhyChessInscribeContent] = useState({
    title: 'Why Chess Inscribe',
    subTitle: 'We help and groom aspiring grandmasters with the potential to play International Chess Tournaments with the best chess moves to win. Our online sessions will make your child more productive not just at Chess but in school and life.',
    bulletPoints: [
      'Individual Coaching',
      'Worldwide Students',
      'Talented Trainers',
      'Trial Tournaments',
      'Scholarship and Prizes',
      'Affordable Plans',
    ],
  });

  const [strategicThinkingContent, setStrategicThinkingContent] = useState({
    title: 'Help your child improve their Strategic thinking',
    subTitle: 'Chess allows children to develop such qualities as independence and determination. Carried away by the game, the child learns to think and concentrate. Gets skills such as calculating all kinds of moves, their consequences, forecasting events and the ability to take correct steps. Not only mental abilities are formed, but also personal qualities of character.',
    imgSrc1: 'src/assets/images/aboutimage1.webp',
    imgSrc2: 'src/assets/images/about_img2.webp',
    img1Text: 'It is known that professional chess players have visual memory different from most people. This quality is developed by years of training and remains with the person for the rest of his life.',
    img2Text: 'Playing chess, the child learns to think not only abstractly but also logically. Considering the options for moves on the board, he must choose the only correct of the set and predict the course of the opponent’s thought.',
  });

  // Function to handle content editing
  const handleEditContent = (contentSetter, key, value) => {
    contentSetter((prevContent) => ({
      ...prevContent,
      [key]: value,
    }));
  };

  // Function to toggle between view and edit modes
  const toggleEditMode = () => {
    setEditMode((prevMode) => !prevMode);
  };

  return (
    <>
      <div className="edit-mode-btn">
        <button onClick={toggleEditMode}>{editMode ? 'Save Changes' : 'Edit'}</button>
      </div>
      <br></br>
      <div className="abou">
        <div className="topclass">
          <div className="cl1">
            <h1 contentEditable={editMode} onBlur={(e) => handleEditContent(setWhoWeAreContent, 'title', e.target.innerText)}>
              {whoWeAreContent.title}
            </h1>
            <h2 contentEditable={editMode} onBlur={(e) => handleEditContent(setWhoWeAreContent, 'subTitle', e.target.innerText)}>
              {whoWeAreContent.subTitle}
            </h2>
            <br></br>
            <br></br>
            <p className="text1" contentEditable={editMode} onBlur={(e) => handleEditContent(setWhoWeAreContent, 'text1', e.target.innerText)}>
              {whoWeAreContent.text1}
            </p>
            <p className="text1" contentEditable={editMode} onBlur={(e) => handleEditContent(setWhoWeAreContent, 'text2', e.target.innerText)}>
              {whoWeAreContent.text2}
            </p>
          </div>
          <div className="cl2">
            <img src={aboutimg} alt="about img" />
          </div>
        </div>
        <br></br>
        <div className='topclass2'>
          <div className='cl3'>
            <img src={aboutimage} alt="about img"/>
          </div>
          <div className='cl4'>
            <h1 contentEditable={editMode} onBlur={(e) => handleEditContent(setWhyChessInscribeContent, 'title', e.target.innerText)}>
              {whyChessInscribeContent.title}
            </h1>
            <h4 contentEditable={editMode} onBlur={(e) => handleEditContent(setWhyChessInscribeContent, 'subTitle', e.target.innerText)}>
              {whyChessInscribeContent.subTitle}
            </h4>
            <ul>
              {whyChessInscribeContent.bulletPoints.map((point, index) => (
                <li key={index} contentEditable={editMode} onBlur={(e) => handleEditContent(setWhyChessInscribeContent, `bulletPoints[${index}]`, e.target.innerText)}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='topclass3'>
          <div className='cl5'>
            <h1 contentEditable={editMode} onBlur={(e) => handleEditContent(setStrategicThinkingContent, 'title', e.target.innerText)}>
              {strategicThinkingContent.title}
            </h1>
            <br></br>
            <h3 contentEditable={editMode} onBlur={(e) => handleEditContent(setStrategicThinkingContent, 'subTitle', e.target.innerText)}>
              {strategicThinkingContent.subTitle}
            </h3>
          </div>
          <br></br>
          <div className='cl6'>
            <div className='cl7'>
              <img src={strategicThinkingContent.imgSrc1} alt='image'></img>
              <p contentEditable={editMode} onBlur={(e) => handleEditContent(setStrategicThinkingContent, 'img1Text', e.target.innerText)}>
                {strategicThinkingContent.img1Text}
              </p>
            </div>
            <div className='cl7'>
              <img src={strategicThinkingContent.imgSrc2} alt='image'></img>
              <p contentEditable={editMode} onBlur={(e) => handleEditContent(setStrategicThinkingContent, 'img2Text', e.target.innerText)}>
                {strategicThinkingContent.img2Text}
              </p>
            </div>
          </div>
          <div className='cl6'>
            <div className='cl7'>
              <h3 contentEditable={editMode} onBlur={(e) => handleEditContent(setStrategicThinkingContent, 'img1Text', e.target.innerText)}>
                {strategicThinkingContent.img1Text}
              </h3>
            </div>
            <div className='cl7'>
              <h3 contentEditable={editMode} onBlur={(e) => handleEditContent(setStrategicThinkingContent, 'img2Text', e.target.innerText)}>
                {strategicThinkingContent.img2Text}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sitehome;
