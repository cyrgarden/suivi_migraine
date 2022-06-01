import React from 'react'
import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import './day-rec.css'
function MyDay() {

    const [event, setEvent]= useState(false);
    const [sport, setSport]=useState(false);
    const [drinks, setDrinks] = useState(0);
    const [coffee, setCoffee]= useState(0);

    const todayInfos = useSelector(state => state.DaysReducer);
    const sleepInfos= useSelector(state =>state.SleepInfosReducer);
    const migraineInfos = useSelector(state => state.MigrainesReducer)
    const person = useSelector(state => state.InfoReducer)
    console.log(migraineInfos);

    const dispatch = useDispatch();

    const handleSubmit = () => {
        var day_template ={
            "id": todayInfos.id,
            "weather": todayInfos.weather,
            "alcohol": drinks,
            "cofee": coffee,
            "sport_duration": 0,
            "sleep": {
                "duration": sleepInfos.average_duration,
                "light_sleep": sleepInfos.light_sleep,
                "deep_sleep": sleepInfos.deep_sleep,
                "rem_phase": sleepInfos.rem_phase
            },
            "cardiac_freq": todayInfos.cardiac_freq,
            "migraines": {
                "type": migraineInfos.type,
                "intensity": migraineInfos.intensity,
                "localisation": {
                    "frontal": migraineInfos.frontal_localisation,
                    "lateral": migraineInfos.lateral_localisation
                },
                "declencheurs": migraineInfos.declencheurs,
                "soulagements": migraineInfos.soulagements,
                "duration": migraineInfos.duration
            }};

            var updated_list = person.all_days;
            updated_list[updated_list.length-1] = day_template;

            axios.patch('https://oajwhgh9.directus.app/users/'+person.id, {"all_days" : updated_list}
            ).then(res =>{
                console.log(res);
            })
    }

    
  return (

    <section class="xl-container my-day">
        <h2>Enregistrer ma journée</h2>
        <div class="day-selector">
            <a href="#" class="prev-day"> </a>
            <p>{todayInfos.id.substr(0,15)}</p>
            <a href="#" class="next-day"> </a>
        </div>
        <div class="green-field">
            <p>Avez-vous eu un évènement stressant ?</p>
            <div class="choices">
                <div class="choice">
                    <label>Oui</label>
                    <input type="radio" name="item-name" onClick={e => setEvent(false)}></input>
                </div>
                <div class="choice">
                    <label>Non</label>
                    <input type="radio" name="item-name" onClick={e => setEvent(false)}></input>
                </div>
            </div>
        </div>
        
        <div class="violet-field">
            <p>Avez vous pratiqué une activité sportive aujourd'hui ? </p>
            <div class="choices">
                <div class="choice">
                    <label>Non</label>
                    <input type="radio" name="item-other" onChange={e => setSport(false)}></input>
                </div>
                <div class="choice">
                    <label>Oui</label>
                    <input type="radio" name="item-other" onChange={e => setSport(true)}></input>
                </div>
            </div>
        </div>
        
        <div class="green-field">
            <p>Combien de verres d'alcool avez-vous bu ?</p>
            <div class="choices">
                <div class="counter">
                    <span class="counter-btn" onClick={() => drinks > 0? setDrinks(drinks -1) : setDrinks(0)}>-</span>
                    <span class="counter-value">{drinks}</span>
                    <span class="counter-btn" onClick={() => setDrinks(drinks + 1)}>+</span>
                </div>
            </div>
        </div>
        
        <div class="violet-field">
            <p>Combien de tasses de café avez-vous bu ?</p>
            <div class="choices">
                <div class="counter">
                    <span class="counter-btn" onClick={() => coffee > 0? setCoffee(coffee -1) : setCoffee(0)} >-</span>
                    <span class="counter-value">{coffee}</span>
                    <span class="counter-btn" onClick={() => setCoffee(coffee + 1)} >+</span>
                </div>
            </div>
        </div>
        
        <a href="#" class="btn btn-green" onClick={handleSubmit}>Enregistrer</a>
        
    </section>
    

  )
}

export default MyDay