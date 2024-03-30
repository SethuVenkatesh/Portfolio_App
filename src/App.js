import './app.scss'
import React, { useEffect, useState } from 'react'
import About from './component/container/about/About';
import Contact from './component/container/contact/Contact';
import Home from './component/container/home/Home';
import Work from './component/container/work/Work';
import Navbar from './component/navbar/Navbar';
import NavigationDot from './component/navigationDot/NavigationDot';


function App() {

 const [activeTab,setActiveTab] = useState("home");
 const [tabs,setTabs] = useState(["home","about","work","contact"]);
 const handleTabChange = (tabName) =>{
  setActiveTab(tabName)
}

  useEffect(()=>{

    const handleScroll = () =>{
      const scrollPosition = window.scrollY;
      const homeSection = document.getElementById("home").offsetTop;
      const aboutSection = document.getElementById("about").offsetTop;
      const workSection = document.getElementById("work").offsetTop;
      const contactSection = document.getElementById("contact").offsetTop;
      if(scrollPosition < aboutSection){
        setActiveTab("home");
      }
      else if(scrollPosition >= aboutSection && scrollPosition <=workSection){
        setActiveTab("about");
      }
      else if(scrollPosition >= workSection && scrollPosition <=contactSection){
        setActiveTab("work");
      }else{
        setActiveTab("contact")
      }
    }
    window.addEventListener("scroll",handleScroll);
    return () =>{
      window.removeEventListener("scroll",handleScroll);
    }

  },[])

  return (
    <div className="app">
      <Navbar tabs={tabs} activeTab={activeTab} handleTabChange={handleTabChange}/>
      <NavigationDot tabs={tabs} activeTab={activeTab} handleTabChange={handleTabChange}/>
      <div className='app-wrapper'>
        <Home/>
        <About/>
        <Work/>
        <Contact/>
      </div>
    </div>
  )
}

export default App;
