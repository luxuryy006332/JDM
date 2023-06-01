import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png'
import s from '../JdmCars/JdmCars.module.scss'


function JdmCars() {
  return (
    <div>
        <div className={s.back}>
        <div className="container">

          <header>
            <div>
              <img src={logo} alt="logo" />
            </div>

            <ul className="nav">
              <li><NavLink to='/home'>Home</NavLink></li>
              <li><NavLink to='/cars' >JDM CARS</NavLink></li>
              <li><NavLink to='/TechInfo' >Tech Info</NavLink></li>
              <li><NavLink to='/homee' >Home</NavLink></li>
            </ul>
          </header>

          <h1>JDM - GUNS: MACHINES TO NEVER FORGET</h1>
        </div>
    </div>
    </div>
  )
}

export default JdmCars