import React from 'react'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import{Navigate} from "react-router-dom"


import PLUS from './assets/plus.svg'
import CHEVRON from './assets/chevron-left.svg'
import CLOSE from './assets/close.svg'

import ALCOOL from './assets/alcool.png';
import AUTRE from './assets/autre.png';
import BRUIT from './assets/bruit.png';
import CAFEINE from './assets/cafeine.png';
import EAU from './assets/deshydratation.png';
import SPORT from './assets/effort_physique.png';
import LUMINOSITE from './assets/luminosite.png';
import SOMMEIL from './assets/manque_de_sommeil.png';
import STRESS from './assets/stress.png';

import AUCUN from './assets/aucun.png';
import BOIRE from './assets/boire_eau.png';
import FROID from './assets/froid.png';
import MEDICAMENT from './assets/medicament.png';
import SOMBRE from './assets/piece_sombre.png';
import RELAXATION from './assets/relaxation.png';
import DORMIR from './assets/sommeil.png';
 



const list_declencheurs = [{id : "stress", name :'Stress', img : STRESS},{id : "sleep", name :'Sommeil', img : SOMMEIL}, {id : "sport",name :'Effort physique', img : SPORT},
{id : "cofee", name :'Caféine', img :CAFEINE}, {id : "alcohol",name :'Alcool', img : ALCOOL}, {id : "water",name :'Déshydratation', img : EAU},
{id : "luminosité", name :'Luminosité', img : LUMINOSITE}, {id : "bruit",name :'Bruit', img :BRUIT}, {id : "other",name :'Autre', img :AUTRE} ];

const list_soulagement = [{name :'Aucun', img :AUCUN},{name :'Sommeil', img :DORMIR}, {name :'Relaxation', img :RELAXATION},
{name :'Froid', img :FROID}, {name :"Boire de l'eau", img :BOIRE}, {name :'Médicament', img :MEDICAMENT},
{name :'Pièce sombre', img :SOMBRE}, {name :'Autre', img :AUTRE} ];





function Declencheurs() {
  

    const dispatch = useDispatch();
    const [finish, setFinish]=useState(false);
    const migraine_infos= useSelector(state => state.MigrainesReducer);
    const [modalDeclencheurs, setModalDeclencheurs] = useState(false);
    const [modalSoulagement, setModalSoulagement] = useState(false);

    const [listDeclencheurs, setListDeclencheurs] = useState([]);
    const [listSoulagements, setListSoulagements] = useState([]);

    const todayInfos = useSelector(state => state.DaysReducer);
    const sleepInfos= useSelector(state =>state.SleepInfosReducer);
    const person = useSelector(state => state.InfoReducer)

    if (finish){
      return (<Navigate to="/main" />)
  };



  const toggleModalDeclencheurs = () => {
    setModalDeclencheurs(!modalDeclencheurs);
  };

  const toggleModalSoulagement = () => {
    setModalSoulagement(!modalSoulagement);
  };

  if(modalDeclencheurs || modalSoulagement) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


    const handleSubmit = () => {
      console.log(listDeclencheurs);
      console.log(listSoulagements);
      console.log(migraine_infos);

       dispatch({
        type :'CHANGE_DECLENCHEURS',
        new_declencheurs : [...listDeclencheurs]
      });

      dispatch({
        type: 'CHANGE_SOULAGEMENT',
        new_soulagements : [...listSoulagements]
       });

       console.log(todayInfos);

       var day_template ={
        "id": todayInfos.id,
        "weather": todayInfos.weather,
        "alcohol": todayInfos.alcohol,
        "cofee": todayInfos.cofee,
        "sport_duration": todayInfos.sport_duration,
        "sleep": {
            "duration": sleepInfos.average_duration,
            "light_sleep": sleepInfos.light_sleep,
            "deep_sleep": sleepInfos.deep_sleep,
            "rem_phase": sleepInfos.rem_phase
        },
        "cardiac_freq": todayInfos.cardiac_freq,
        "migraines": {
            "type": migraine_infos.type,
            "intensity": migraine_infos.intensity,
            "localisation": {
                "frontal": migraine_infos.frontal_localisation,
                "lateral": migraine_infos.lateral_localisation
            },
            "declencheurs": listDeclencheurs,
            "soulagements": listSoulagements,
            "duration": migraine_infos.duration
        }};

        console.log(day_template);
        console.log(todayInfos);
        
        var updated_list = person.all_days;
        console.log(typeof(updated_list));

        updated_list[updated_list.length-1 ] = day_template;

        console.log(updated_list);
        console.log(person.id);

        axios.patch('https://oajwhgh9.directus.app/users/'+person.id, {"all_days" : updated_list}
        ).then(res =>{
            console.log(res);
        })
        setFinish(true);

    };

    function selectDeclencheurs(declencheur){
      let tamp_array = [...listDeclencheurs];
      console.log(tamp_array);
      
      if(tamp_array.includes(declencheur.name)){
        tamp_array = tamp_array.filter(el => el !== declencheur.name);
      }
      else if(!tamp_array.includes(declencheur.name)){
        tamp_array.push(declencheur.name);
      };
      console.log(tamp_array);
      setListDeclencheurs(tamp_array);

      }

      function selectSoulagements(soulagement){
        let tamp_array = [...listSoulagements];
        console.log(tamp_array);
        
        if(tamp_array.includes(soulagement.name)){
          tamp_array = tamp_array.filter(el => el !== soulagement.name);
        }
        else if(!tamp_array.includes(soulagement.name)){
          tamp_array.push(soulagement.name);
        };
  
        console.log(tamp_array);
        setListSoulagements(tamp_array);
  
        }

  return (
      <>
      <div class="migraine-complement" id="migraine-factors">
        <h1>Avez-vous identifié des déclencheurs ?</h1>
        
        <a onClick={toggleModalDeclencheurs}><img  src={PLUS}></img></a>
      </div>

      <div class="migraine-complement" id="migraine-factors">
        <h1>Qu’avez-vous fait pour apaiser la douleur ?</h1>
        <a onClick={toggleModalSoulagement}> <img  src={PLUS}></img> </a>
      </div>

      <section>

        {modalDeclencheurs && (
        <div className="modal">
          <div onClick={toggleModalDeclencheurs} className="overlay"></div>

          <div className="modal-content">

              {list_declencheurs.map(declencheur => {
                  return(
                      <a className={listDeclencheurs.includes(declencheur.name)? 'facteur selected':'facteur'} onClick={() => selectDeclencheurs(declencheur)}>
                          <img src ={declencheur.img}></img> 
                          {declencheur.name}
                      </a>
                  )
              })}


            <a className="close-modal" id='close' onClick={toggleModalDeclencheurs}> <img src={CLOSE}></img></a>

          </div>
        </div>
      )}
      </section>

    <section>
    {modalSoulagement && (
        <div className="modal">
          <div onClick={toggleModalSoulagement} className="overlay"></div>
          <div className="modal-content">
          {list_soulagement.map(soulagement => {
                  return(

                    <a className={listSoulagements.includes(soulagement.name)? 'facteur selected':'facteur'} onClick={() => selectSoulagements(soulagement)}>
                          <img src ={soulagement.img}></img> 
                          {soulagement.name}
                      </a>
                  )
              })}
            <a className="close-modal" id='close' onClick={toggleModalSoulagement}> <img src={CLOSE}></img></a>
          </div>
        </div>
      )}
      </section>


              
      <a class="btn btn-violet next-button" onClick={handleSubmit}> 
        <img className='inverse' src ={CHEVRON}></img>
      </a>

        </>
  )
}

export default Declencheurs