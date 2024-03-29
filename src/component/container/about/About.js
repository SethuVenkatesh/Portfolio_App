import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import images from '../../../constants/images';
import './about.scss'

import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const About = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };

  return (
    <div id='about' className='app-container'>
      <div className="about-text">
        <center>
          <h2 className="skill-text">Skills</h2>
        </center>
        <div className='skills-carousel'>
        <Carousel
          autoPlay={true}
          infinite={true}
          arrows={false}
          responsive={responsive}
          autoPlaySpeed={1000}
          transitionDuration={1000}
          style={{ innerWidth: "95vw" }}
        >
          <div className="card">
            <img src={images.html} alt="html" />
          </div>
          <div className="card">
            <img src={images.css} alt="html" />
          </div>
          <div className="card">
            <img src={images.javascript} alt="html" />
          </div>
          <div className="card">
            <img src={images.react} alt="html" />
          </div>
          <div className="card">
            <img src={images.angular} alt="html" />
          </div>

          <div className="card">
            <img src={images.mongodb} alt="html" />
          </div>
          <div className="card">
            <img src={images.springboot} alt="html" />
          </div>
          <div className="card">
            <img src={images.nodejs} alt="html" />
          </div>
          <div className="card">
            <img src={images.firebase} alt="html" />
          </div>
          <div className="card">
            <img src={images.java} alt="html" />
          </div>
        </Carousel>
        </div>
        <center>
          <h2 className="education-text">Education and Experience</h2>
        </center>
        <EducationComponent/>
      </div>
    </div>
  )
}

const EducationComponent = () =>{

  const educationDetails = [
    {
      educationRole:"education",
      icon:<SchoolIcon/>,
      title:"TamilNadu State Board (SSLC)",
      universityName:"Cheran Vidhyalaya Matric Higher Secondary School",
      batch:"2016-2017",
      percentage:"96.4"
    },
    {
      educationRole:"education",
      icon:<SchoolIcon/>,
      title:"TamilNadu State Board (HSC)",
      universityName:"Cheran Vidhyalaya Matric Higher Secondary School",
      batch:"2018-2019",
      percentage:"87.3"
    },
    {
      educationRole:"education",
      icon:<SchoolIcon/>,
      title:"Bachelor of Engineering (ECE)",
      universityName:"Sri Krishna College of Engineering and Technology",
      batch:"2019-2023",
      percentage:"91.4"
    },
    {
      educationRole:"work",
      icon:<WorkIcon/>,
      companyName:"Zoho",
      role:"Summer Internship",
      timePeriod:"April 2022 - May 2022",
    },
    {
      educationRole:"work",
      icon:<WorkIcon/>,
      companyName:"Hippo Video",
      role:"Techincal Member Support",
      timePeriod:"August 2022 - April 2023",
    },
    {
      educationRole:"work",
      icon:<WorkIcon/>,
      companyName:"Bank Of New York",
      role:"Per App Processing Tech",
      timePeriod:"July 2023 - Present",
    }
  ]
  return (
    <div className='education-container'>   
      {
        educationDetails.map((detail,index)=>{
          console.log(index)
          return(
            <EducationCard detail={detail} detailIndex={index}/>
          )
        })
      }
    </div>
  )
}

// https://themewagon.github.io/profile/
const EducationCard = ({detail,detailIndex}) => {
  return(
    <div className='education-card'>
      <div className='education-card-badge'>
        {
          detail.icon
        }
      </div>
        <div className={` education-card-timeline ${detailIndex%2 == 1 ? "timeline-inverted":""}`}>
          {
            detail.educationRole == 'education' ? (
              <>
              <div className='timeline-heading'>
                <h3>{detail.title}</h3>
                <p>{detail.universityName} - ({detail.batch})</p>
              </div>
              <div className='timeline-content'>
                <p>Percentage : {detail.percentage} %</p>
              </div>
              </>
            ):
            (
              <>
              <div className='timeline-heading'>
                <h3>{detail.companyName}</h3>
                <p>{detail.role}</p>
              </div>
              <div className='timeline-content'>
                <p>{detail.timePeriod}</p>
              </div>
              </>
            )
          }
        </div>
       
      </div>
  )
}

export default About