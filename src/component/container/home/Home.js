import React from 'react'
import ProfileImage from '../../../assets/ProfileImage1.png'
import ProfileOverlay from '../../../assets/ProfileOverlay.jpg'
import './home.scss'
import { motion } from 'framer-motion'
import Resume from '../../../assets/resume.pdf'

import Instagram from '../../../assets/instagram.png'
import LinkedIn from '../../../assets/linkedin.png'
import Codepen from '../../../assets/codepen.png'
import Email from '../../../assets/email.png'
import GitHub from '../../../assets/github.png'
import BackHandIcon from '@mui/icons-material/BackHand';
import FileDownloadIcon from '@mui/icons-material/FileDownload';


const Home = () => {
  return (
    <div id='home' className='app-container'>
      <motion.div
        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
      >
      <div className='app-header-wrapper'> 
        <div className='app-header-info'>
          <TypeWriting/>
          <BasicInfo/>
          <SocialMedia/>
        </div>
        <div className='app-header-image'>
          <img className='profile-img' src={ProfileImage} alt='profile'/>
          <img className='profile-overlay' src={ProfileOverlay} alt='profile'/>
        </div>
      </div>
      </motion.div>
    </div>
  )
}

const TypeWriting = () =>{
  return (
    <div className='type-writing-container'>
      <p className='type-writing-heading'>Hello I am Sethu Venkatesh</p>
      <div className='type-writing-wrapper'>
        <p className='type-writing-text'>Full Stack Developer.</p>
      </div>
    </div>
  )
}

const BasicInfo = () =>{


  const handleResumeDownload = () => {
        const pdfUrl = Resume;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Sethu_Venkatesh_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  }

  return (
    <div className='basic-info-container'>
        <p className='basic-info-text'>Practice like you never won perform like you never lose!</p>
        <div className='basic-info-buttons'>
          <div className='basic-info-button'>
            <BackHandIcon/>
            <p className='basic-info-button-text'>Hire Me</p>
          </div>
          <div className='basic-info-button' onClick={()=>handleResumeDownload()}>
            <FileDownloadIcon/>
            <p className='basic-info-button-text'>Resume</p>
            
          </div>
        </div>
    </div>
  )

}

const SocialMedia = () =>{
  return (
    <div className='social-media-container'>
        <a 
          className='social-media-icon instagram' 
          href='https://www.instagram.com/_sethu.14_?utm_source=qr&igsh=MTQ2djRudjk3eHBpYw%3D%3D'
          target='blank'
        >
          <img src={Instagram} alt='not-found'/>
        </a>
        <a 
          className='social-media-icon github'
          href='https://github.com/SethuVenkatesh'
          target='blank'
        >
          <img src={GitHub} alt='not-found'/>
        </a>
        <a 
          className='social-media-icon linkedin'
          href='https://www.linkedin.com/in/sethu-venkatesh-m-b9b71a216/'
          target='blank'
        >
          <img src={LinkedIn} alt='not-found'/>
        </a>
        <a 
          className='social-media-icon email'
          href='mailto:sethuvenkateshvk@gmail.com'
        >
         <img src={Email} alt='not-found'/>
        </a>
        <a
          className='social-media-icon codepen'
          href='https://codepen.io/Sethu18'
          target='blank'
        >
          <img src={Codepen} alt='not-found'/>
        </a>
    </div>
  )
}

export default Home