import React from 'react'
import './my-device.css'
import WATCH from './assets/x-redmi-watch-2-lite.png'
import BATTERY from './assets/battery.svg'
import CHEVRON from './assets/chevron-left.svg'
import DOTS from './assets/dots.svg'



function MyDevice() {
  return (
    <>
    <section class="xl-container">
        <div class="btn-add-watch">
            <div class="btn-add-watch-text">
                <b>Ajouter un nouvel appareil</b><em>Plusieurs appareils sont gérables simultanéments</em>
            </div>
            <div class="btn-add-watch-icon">
                <img src={CHEVRON}></img>s
            </div>
        </div>
    </section>

    <section class="xl-container">
        <article class="watch">
            <div class="watch-heading">
                <div class="watch-heading-titles">
                    <h1>Xiaomi</h1>
                    <h2>Redmi Watch 2 Lite</h2>
                </div>
                <div class="watch-heading-options">
                    <img src={DOTS}></img>
                </div>
            </div>

            <div class="watch-image">
                <img src={WATCH}></img>
            </div>

            <div class="watch-status">
                <div class="watch-connection-status">
                    Connecté
                </div>
                <div class="watch-battery-status">
                    <img src={BATTERY}></img>
                    87%
                </div>
            </div>

        </article>
    </section>
    
    <div class="overlay">
        <div class="alert-popup">
            <div class="popup-heading">
                Dissocier l’appareil
            </div>
            <div class="popup-description">
                Après dissociation Mon Appli Migraine ne pourra plus avoir accès aux données de votre appareil. Voulez-vous continuer ?
            </div>
            <div class="popup-links">
                <a href="#">Annuler</a>
                <a href="#">Dissocier</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default MyDevice