import React from 'react'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './migraine-info.css'


import BACK from './assets/arriere.png'
import FRONT from './assets/avant.png'
import MIDDLE from './assets/milieu.png'
import EVERYWHERE from './assets/partout.png'


import BILATERAL from './assets/bilateral.svg'
import RIGHT from './assets/droite.svg'
import LEFT from './assets/gauche.svg'

import BRULANT from './assets/brulant.svg'
import SERRE from './assets/ca_serre.svg'
import ELECTRIQUE from './assets/decharge_electrique.svg'
import PULSATILE from './assets/pulsatile.svg'
import AUTRE from './assets/autre.svg'



const list_frontalView =[{id:'back', img :BACK }, {id:'front', img :FRONT }, {id:'middle', img :MIDDLE }, {id:'everywhere', img :EVERYWHERE }];
const list_lateralView =[{id:'bilateral', img :BILATERAL },{id:'right', img :RIGHT },{id:'left', img :LEFT}];
const list_type =[{id:'brulant',img:BRULANT },{id:'serre',img:SERRE},{id:'electrique',img:ELECTRIQUE },{id:'pulsatile',img:PULSATILE},{id:'autre',img:AUTRE}]


function MigraineInfo() {

    const dispatch = useDispatch();
    const migraineInfo = useSelector(state => state.MigrainesReducer);
 
    const [frontal, setFrontal] = useState('');
    const [lateral, setLateral] = useState('');
    const [typeMigraine, setTypeMigraine] = useState('');
    const [dispIntensity, setDispIntensity]= useState(0);

    var intensity = 0;
    
    const handleChange = (e) =>{
        intensity = e.target.value;
        setDispIntensity(e.target.value);
        console.log(intensity);
        console.log(frontal);
        console.log(lateral);

        dispatch({
            type : "CHANGE_FRONTAL",
            new_frontal : frontal
        });

        dispatch({
            type : "CHANGE_LATERAL",
            new_lateral : lateral
        });

        dispatch({
        type : "CHANGE_INTENSITY",
        new_intensity : intensity

    });

    dispatch({
        type : "CHANGE_TYPE",
        new_type : typeMigraine
    });

    console.log(migraineInfo);


    }
  return (
    <div>
        <header>
            <h2>Type de douleur</h2>
        </header>

        <section className='full-container pain-types'>
            {list_type.map(type =>{
                return(
                    <a className={typeMigraine == type.id? 'pain selected': 'pain'}> <img src={type.img}  onClick={()=>setTypeMigraine(type.id)}></img>{type.id} </a>)
            })}
            
        </section>

        <header>
            <h2>Localisation latérale de la douleur :</h2>
        </header>
        
        <section class="full-container pain-lateral">
            {list_frontalView.map(view => {
                return(
                <a onClick={()=>setFrontal(view.id)} ><img src={view.img} id="pain" className={frontal == view.id ? 'pain selected':'pain'} ></img></a>)
            })}

        </section>
        
        <header>
            <h2>Localisation frontale de la douleur</h2>
        </header>
        <section class="full-container pain-localization">
            {list_lateralView.map(view => {
                    return(
                    <a className={lateral ==view.id? 'head-position selected' :'head-position'} >
                        <img src={view.img}   onClick={()=>setLateral(view.id)}></img></a>)
                })}
        </section>

        <header>
            <h2><label for="fname">À quel point ça vous a fait mal ? </label><br></br></h2>
        </header>
        <section class="full-container pain-types">
            <label id="intensity-value">Intensité : <span>{dispIntensity}</span></label>
        <input type="range" min="0" max ="10" id="input" name="fname" onChange={handleChange}></input><br></br><br></br>
        </section>
    
    </div>

  )
}

export default MigraineInfo