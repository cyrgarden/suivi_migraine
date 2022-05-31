import React from 'react'
import './nav.css'
import TRIANGLE from './assets/triangle.svg'

function Nav() {
  return (
     <nav className="top">
        <a href="#" className="nav-active"/>
            <span>Menu</span>
            <img className="nav-active-img"src={TRIANGLE} alt=""/>
        <a href="#">
            <span>Ma journée</span>
            <img className="nav-img" src={TRIANGLE} alt=""/>
        </a>
        <a href="#">
            <span>Profil</span>
            <img className="nav-img"  src={TRIANGLE} alt=""/>
        </a>
        <a href="#">
            <span>Appareil</span>
            <img className="nav-img" src={TRIANGLE} alt=""/>
        </a>
    </nav>

    )
}

export default Nav