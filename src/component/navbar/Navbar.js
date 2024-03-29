import React, { useEffect, useState } from 'react'
import Logo from '../../logo.png'
import './navbar.scss'

const Navbar = ({activeTab,tabs,handleTabChange}) => {

 

  return (
    <nav className='navbar-container'>
        <div className='navbar-logo'>
            <p className='navbar-logo-text navbar-logo-text1'>Sethu <span className='navbar-logo-text navbar-logo-text2'>Venkatesh</span></p>
        </div>
        <ul className='navbar-links'>
            {
                tabs.map((tab)=>{
                    return(
                        <li className={`navbar-link ${activeTab === tab ? 'active':''}`}>
                            <a href={`#${tab}`} onClick={() => handleTabChange(tab)}>{tab}</a>
                        </li>
                    )
                })
            }
       
        </ul>
    </nav>
  )
}

export default Navbar