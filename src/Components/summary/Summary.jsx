import { duration } from '@mui/material';
import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import ProgressBar from '../ProgressBar/ProgressBar.jsx';

function average(tab){
    console.log(average_intensity(tab));
    /* console.log(tab);
    console.log(tab.reduce((a, b) => a + b, 0) / tab.length); */
    return tab.reduce((a, b) => parseInt(a) + parseInt(b), 0) / tab.length;
};  

function average_intensity(tab){
    console.log(tab);
    let tamp =0;
    for (let i =0; i < tab.length;i++){
        tamp = tamp+tab[i];
    }
    return tamp/tab.length;
}

function toHours(totalMinutes) {
    const minutes = Math.round((totalMinutes%3600)*120/7200);
    const hours = Math.round(totalMinutes/3600);
  
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
  }

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }


function Summary() {

    const bad_days = useSelector(state => state.BadDaysReducer);
    console.log(bad_days);
    var tab_duration=[];
    var tab_intensity=[];
    var limit =30;

    bad_days.all_days.map(day =>{
        if (limit>0){
            tab_duration.push(day.migraines.duration);
            tab_intensity.push(day.migraines.intensity);
            limit--;
        }
    });






  return (
    <article class="widget widget-sumup">
                <h3 class="widget-title">Résumé dernier mois</h3>
                <div class="widget-content">
                    <div class="widget-line" id="crisis-number">
                        <h4>Nombre de crises:</h4>
                        <span>{bad_days.all_days.length}</span>
                    </div>
                    <div class="widget-stacked">
                        <h4>Durée moyenne des crises:</h4>
                        <span>{toHours(average(tab_duration))} minutes </span>
                    </div>
					
                    <div class="widget-stacked">
                        <h4>Intensité de la douleur:</h4>
                        <span>{Math.round(average(tab_intensity))}/10</span>
                        <ProgressBar value ={Math.round(average(tab_intensity))}/>
                        <div class="progress-scale">
                            <span>0</span>
                            <span>1</span><span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                        </div>
                    </div>
                </div>
            </article>
    
  )
}

export default Summary