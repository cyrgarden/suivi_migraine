import React from 'react'
import {useSelector} from 'react-redux'
import Circle from '../circle/Circle.jsx'

import ANXIETY from './assets/anxiety.png'
import ALCOHOL from './assets/alcohol.png'
import COFEE from './assets/coffee.png'
import SPORT from './assets/effort_physique.png'
import LUMIERE from './assets/lumiere.png'
import OTHER from './assets/other.png'
import SLEEP from './assets/sleep.png'
import NOISE from './assets/bruit.png'
import WATER from './assets/water.png'
import WEATHER from './assets/weather.png'






function selectImg(factor_name){
    switch(factor_name){
        case "Stress": return ANXIETY;
        case "luminosité": return LUMIERE;
        case "bruit":return NOISE;
        case "Déshydratation": return WATER;
        case "Sommeil": return SLEEP;
        case "Alcool": return ALCOHOL;
        case "Effort_physique": return SPORT;
        case "Caféine": return COFEE;
        case "Autre": return OTHER;
        case "Météo": return WEATHER;




        default:return null;
    }
    
}

function sortFactors(all_factors){
    return Object.entries(all_factors).sort((a, b)=> b[1]-a[1]).slice(0,3);
}

function Factors() {

    var score ={
        Stress:0,
        Caféine:0,
        Luminosité:0,
        Alcool : 0,
        Bruit:0,
        Sommeil:0,
        Déshydratation:0
    };
    console.log(Object.keys(score));

    const bad_days = useSelector(state => state.BadDaysReducer);
    console.log(bad_days);

    bad_days.all_days.map(day =>{
        day.migraines.declencheurs.map(declencheur =>{
            Object.keys(score).map(score_el =>{
                if (declencheur == score_el){
                    score[score_el] ++;
                }
            })
        })
    });

    const mainFactors = sortFactors(score); 
    console.log(mainFactors);

  return (
    <article class="widget widget-factors">
    <h3 class="widget-title">Facteurs principaux</h3>
    <div class="widget-content">
        {mainFactors.map(factor =>{
            return (
                <article>
                    <div class="left-progress">
                        <Circle value={(factor[1]/bad_days.all_days.length)*100} />
                    </div>

                    <div class="right-details">
                        <h4>{factor[0]}</h4>
                        <img src={selectImg(factor[0])} alt=""/>
                    </div>
                </article>
                )
                
        })}
    </div>
</article>

    )
}

export default Factors