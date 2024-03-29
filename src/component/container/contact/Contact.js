import React, { useState } from 'react'
import './contact.scss'
import SendIcon from '@mui/icons-material/Send';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import Loader from '../../common/loader/Loader';

const Contact = () => {

  const [loading,setLoading] = useState(true);
  const [showPopUp,setShowPopUp] = useState(false);
  const [popUpText,setPopUpText] = useState("Email Send Successfully");
  const [popUpClass,setPopUpClass] = useState("success");
  const [chatInfo,setChatInfo] = useState(({
    firstName:"",
    lastName:"",
    email:"",
    subject:"",
    message:""
  }))

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  console.log(process.env)

  const handleChange =(e)=>{
    setChatInfo({...chatInfo,[e.target.name]:e.target.value})
  }
  // service_etjt86j
  // template_zrmtd0q

  const handleSendMail = (e) =>{
    e.preventDefault();
    setLoading(true);
    setShowPopUp(true);
    emailjs
    .sendForm(serviceId, templateId ,e.target , {
      publicKey: publicKey,
    })
    .then(
      () => {
        setChatInfo({
            firstName:"",
            lastName:"",
            email:"",
            subject:"",
            message:""
        })
        setPopUpText("Email Send Successfully");
        setPopUpClass("success");
        setLoading(false);
      },
      (error) => {
        setPopUpText("Error in Sending Email");
        setPopUpClass("failure");
        setLoading(false);
      },
    );
  }
  return (
    <div id='contact' className='app-container'>
      {
        showPopUp  && <Loader popUpText={popUpText} popUpClass={popUpClass} setShowPopUp={setShowPopUp} loading={loading} />
      }
      <motion.div
      whileInView={{ scale: [0, 1] }}
      transition={{ duration: 1, delayChildren: 0.8 }}
      className='contact-wrapper'
      >
      <div className='contact-heading'>
        <h2>Say<span> Hello </span>and <span>Lets have a Chat</span></h2>
      </div>
      <form className='contact-container' onSubmit={handleSendMail}>
        <div className='name-container'>
          <div className='input-container'>
            <input type='text' name='firstName' className='' value={chatInfo.firstName} required onChange={handleChange}/>
            <label>First Name :</label>
          </div>
          <div className='input-container'>
            <input type='text' name='lastName' className='' value={chatInfo.lastName} required onChange={handleChange}/>
            <label>Last Name :</label>
          </div>
        </div>
        <div className='input-container'>
          <input type='text' name='email' className='' value={chatInfo.email} required onChange={handleChange}/>
          <label>Email :</label>
        </div>
        <div className='input-container'>
          <input type='text' name='subject' className='' value={chatInfo.subject} required onChange={handleChange}/>
          <label>Subject :</label>
        </div>
        <div className='summary-container'>
          <label>Summary :</label>
          <textarea type='text-area' name='message' className='' value={chatInfo.message} required onChange={handleChange}/>
        </div>
        <button type='submit' className='button-container'>
          <SendIcon/>
          <p>Send</p>
        </button>
      </form>
      </motion.div>
    </div>
  )
}

export default Contact