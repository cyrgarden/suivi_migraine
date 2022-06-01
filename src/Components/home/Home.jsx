import React from 'react'
import './sign.css'
import MDI from './assets/mdi_head.svg'
import {Link} from 'react-router-dom'




function Home() {
  return (
    <>
    <header id="home-header">
        <img src={MDI} alt=""/>
        <h1>Mon suivi Migraine</h1>
    </header>

    <section id="home-section">
        <Link to='suivi_migraine/signup' className='home-link'><button className="home-button">S'inscrire</button></Link>
    </section>

    <footer id="home-footer">
        <p className="home-p">Vous avez déjà un compte ?</p>
         <Link to='/suivi_migraine/login' className='home-link'> <button className="home-button">S'identifier</button></Link>
  </footer>
    
    </>
  )
}

export default Home