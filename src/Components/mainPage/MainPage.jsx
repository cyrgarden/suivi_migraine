import React from 'react'
import { useState } from 'react'
import Nav from '../nav/Nav'
import InfoPage from '../infoPage/InfoPage'
import { useSelector } from 'react-redux'
import './buttons.css'
import './container.css'
import './mainpage.css'
import'./texts-styles.css'
import './widgets.css'
import InfoReducer from '../../Reducers/InfoReducer'
import './nav.css'
import TRIANGLE from './assets/triangle.svg'
import Profil from '../profile/Profil'
import MyDay from '../myDay/MyDay'
import MyDevice from '../myDevice/MyDevice'
import{Navigate} from "react-router-dom"


var list_days=['Mon May 16 2022 00:00:00 GMT+0200 (heure d’été d’Europe centrale)','Tue Apr 26 2022 00:00:00 GMT+0200 (heure d’été d’Europe centrale)','Fri May 06 2022 00:00:00 GMT+0200 (heure d’été d’Europe centrale)',"jsp", "jsp"];




function MainPage() {
  const userName = useSelector(state=>state.InfoReducer.name);
  const [bodyComponent, setBodyComponent] = useState(<InfoPage/>)
  const [isActive, setActive]= useState('Menu')

  const handleNav = (e) =>{
    if (e.target.innerHTML =='Menu'){
      setBodyComponent(<InfoPage/>)
      setActive('Menu')
    }
    else if (e.target.innerHTML == 'Profil') {
      setBodyComponent(<Profil />)
      setActive('Profil')
    }
    else if (e.target.innerHTML == 'Ma journée') {
      setBodyComponent(<MyDay />)
      setActive('Ma journée')
    }
    else if (e.target.innerHTML == 'Appareil') {
      setBodyComponent(<MyDevice />)
      setActive('Appareil')
    }

    
  }

  console.log(bodyComponent)

  return (
    <body>
    <nav className="top">
        <a href="#" className={isActive == 'Menu' ? 'nav-active' : ''}>
            <span onClick={handleNav}>Menu</span>
            <img src={TRIANGLE} alt=""/>
        </a>

        <a href="#" onClick={handleNav} className={isActive == 'Ma journée'? 'nav-active' : ''}>
            <span>Ma journée</span>
            <img className="nav-img" src={TRIANGLE} alt=""/>
        </a>

        <a href="#" onClick={handleNav} className={isActive == 'Profil'? 'nav-active' : ''} >
            <span>Profil</span>
            <img src={TRIANGLE} alt=""/>
        </a>
        <a href="#" onClick={handleNav} className={isActive == 'Appareil'? 'nav-active' : ''} >
            <span>Appareil</span>
            <img className="nav-img" src={TRIANGLE} alt=""/>
        </a>
    </nav>

    {bodyComponent}

    </body>
  )
}

export default MainPage