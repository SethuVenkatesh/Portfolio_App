import React, { useEffect, useState } from 'react'
import './navigationDot.scss'

const NavigationDot = ({activeTab,tabs,handleTabChange}) => {

  return (
    <div className='nav-dot-container'>
        {
            tabs.map((tab)=>{
                return (
                    <a href={`#${tab}`} className={`nav-dot-element ${activeTab === tab ? 'active':''}`} onClick={()=>handleTabChange(tab)}></a>
                )
            })
        }
    </div>
  )
}

export default NavigationDot