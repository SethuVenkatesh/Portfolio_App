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
