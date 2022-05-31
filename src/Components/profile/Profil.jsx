import React from 'react'
import {useSelector} from 'react-redux'
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './autorisation.css'
import './buttons.css'
import './container.css'
import './menus.css'
import './container.css'
import './profile.css'
import './texts-styles.css'


function Profil() {
    const infos = useSelector(state => state.InfoReducer)

  return (
      <>
         <section class="xl-container personnal-datas">
        <h2>Informations personnelles</h2>
        <fieldset>
            <label for="name">Prénom</label>
            <input type="text" name="name" id="name" placeholder={infos.name}></input>
        </fieldset>
        <fieldset>
            <label for="mail">E-mail</label>
            <input type="text" name="mail" id="mail" placeholder={infos.email}></input>
        </fieldset>
        <fieldset>
            <label for="password">Mot de passe</label>
            <input type="password" name="password" id="password" placeholder='***********'></input>
        </fieldset>
    </section>

    <section class="l-container personnal-datas">
        <h2>Gestion des autorisations</h2>
    <p>L’autorisation d’accès à vos données personnelles permet à Mon suivi Migraine de vous proposer une expérience optimale dans le suivi et la prévision de déclenchements de vos crises.</p>
    
        <fieldset class="header-field">
            <label>Tout autoriser</label>
            <label class="switch">
                <input type="checkbox"></input>
                <span class="slider"></span>
              </label>
        </fieldset>
        <fieldset class="switches">
            <label>Sommeil</label>
            <label class="switch">
                <input type="checkbox"></input>
                <span class="slider"></span>
              </label>
        </fieldset>

        <fieldset class="switches">
            <label>Localisation</label>
            <label class="switch">
                <input type="checkbox"></input>
                <span class="slider"></span>
              </label>
        </fieldset>
        <fieldset class="switches">
            <label>Fréquence cardiaque</label>
            <label class="switch">
                <input type="checkbox"></input>
                <span class="slider"></span>
              </label>
        </fieldset>
        </section>
        
    </> 
  )  
}

export default Profil