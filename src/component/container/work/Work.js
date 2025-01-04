import React from 'react'
import images from '../../../constants/images';
import './work.scss'
import GitHubIcon from '@mui/icons-material/GitHub';


const Work = () => {
  const works = [
    {
      title: "IRCTC - Web App",
      description: "For Train Booking",
      imgurl: images.irctc,
      codeLink: "https://github.com/SethuVenkatesh/IRCTC-Main",
    },
    {
      title: "CashBook - Mobile App",
      description: "For Tracking Expenses",
      imgurl: images.cashbook,
      codeLink: "https://github.com/SethuVenkatesh/Cashbook",
    },
    {
      title: "Blood Bank Management",
      description: "For Blood Donors and recipients",
      imgurl: images.bloodbank,
      codeLink: "https://github.com/SethuVenkatesh/BloodBankFinal",
    },
    {
      title: "Billing Application",
      description: "For Invoice Creation and Tracking Sales",
      imgurl: images.billingApp,
      codeLink: "https://github.com/SethuVenkatesh/BillingApp",
    },
    {
      title: "Whatsapp Clone - Web app",
      description: "For end to end communication",
      imgurl: images.whatsapp,
      codeLink: "https://github.com/SethuVenkatesh/Whatsapp_Clone",
    },
    {
      title: "PDF Converter - Web App",
      description: "For image to PDF",
      imgurl: images.pdfconverter,
      codeLink: "https://github.com/SethuVenkatesh/ImageToPdf",
    },
  ];

  return (
    <div id='work' className='app-container'>
      <h2 className='work-heading'>
        My Creative
        <span> Work </span>
        Section
      </h2>
      <div className='work-container'>
        {
          works.map((work)=>{
            return (
              <ProjectCard work={work}/>
            )
          })
        }
      </div>
    </div>
  )
}

const ProjectCard = ({work}) =>{

  return(
    <div className='project-card' >
      <div className='project-img'>
        <img src={work.imgurl} alt='project'/>
        <div className='project-img-hover'>
          <a className='project-link' target='blank' href={work.codeLink}>
            <GitHubIcon/>
          </a>
        </div>
      </div>
      <div className='project-info'>
        <h3>{work.title}</h3>
        <p>{work.description}</p>
      </div>
    </div>
  )
}

export default Work