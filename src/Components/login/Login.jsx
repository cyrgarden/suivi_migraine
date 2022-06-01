import React from 'react'
import{useState} from 'react'
import axios from 'axios'
import './login.css'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import {useSelector, useDispatch} from 'react-redux'
import{Navigate} from "react-router-dom"
import {Buffer} from 'buffer-from'


function average(tab){
    return tab.reduce((a, b) => a + b, 0) / tab.length;
};  

var day = {
    id : 0,
    weather : '',
    alcohol : 0,
    cofee:0,
    sport_duration :0,
    sleep : 0,
    cardiac_freq :0,
    migraines :{
    type:'',
    intensity : 0,
    localisation:{
    frontal:'',
    lateral:'',
    },
    declencheurs:[],
    soulagements:[],
    duration:0,
    }
};

function Login() {
    
    const [connected, setConnected]=useState(false);
    
    const [logFields, setLogFieds] = useState({
        email :"",
        password : "",
    });

    var access_token = '';


    const infos = useSelector(state => state.InfoReducer);
    const days= useSelector(state => state.DaysReducer);

    const bad_days = useSelector(state => state.BadDaysReducer);
    const sleep_infos = useSelector(state => state.SleepInfosReducer);
    //console.log(sleep_infos);

    const dispatch = useDispatch();
    
    if (connected){
        return (<Navigate to="suivi_migraine/main" />)
    };

    function handleChange(e) {
        const {value, name} = e.target;
        //console.log("The value is : " + value);

        setLogFieds(prevValue => {
            if (name === 'mail') {
                return {
                    email:value,
                    password: prevValue.password,
                }
            }
            else if(name === 'password') {
                return {
                    email: prevValue.email,
                    password:value               
                 }
            }
        })
  
    }

    function handleSubmit(){
        axios.post('https://oajwhgh9.directus.app/auth/login', {
        "email" : logFields.email,
        "password" : logFields.password,
        }).then(res => {
            access_token = res.data.data.access_token;
            setInfos();
            
        }).catch(error => {
            //console.log(error);
            console.log("nop nop");
            alert('Wrong ID , please try again');

        })


    function getInfos(){
        axios.get('https://oajwhgh9.directus.app/?access_token='+access_token+'items/users'
        ).then(res =>{ 
            //console.log(res)
        }) 
    }}


    function updateUser(){
        axios.patch('https://oajwhgh9.directus.app/users/7bc3f6c2-81b9-4e10-b608-2c4262bf7f6b', {"day_infos" : {"migraines" :['première','deuxième'],"water" : 12}}
        ).then(res =>{
            //console.log(res);
        })
    }

    function setCurrentDay(person){
        var day_template ={
                    "id": "",
					"weather": "",
					"alcohol": 0,
					"cofee": 0,
					"sport_duration": 0,
					"sleep": {
						"duration": 0,
						"light_sleep": 0,
						"deep_sleep": 0,
						"rem_phase": 0
					},
					"cardiac_freq": 0,
					"migraines": {
						"type": "",
						"intensity": 0,
						"localisation": {
							"frontal": "",
							"lateral": ""
						},
						"declencheurs": [],
						"soulagements": [],
						"duration": 0
					}
		};
        var today_date = new Date();
        today_date = today_date.toString();
        day_template.id = today_date.substr(0,15) + " 00:00:00 GMT+0200 (heure d’été d’Europe centrale)";

        if (person.all_days[person.all_days.length -1].id == "" ) {

            dispatch({
                type : "CHANGE_ID",
                new_id : today_date
            });

            axios.patch('https://oajwhgh9.directus.app/users/'+person.id, {"all_days" : [day_template]}
            ).then(res =>{
                console.log(res);
            })
            return
        } 


        if( person.all_days[person.all_days.length-1].id.substr(0,15) != today_date.substr(0,15)){
            console.log("ce jour n'est pas enregistré");
            let tamp_array = [...person.all_days];
            tamp_array.push(day_template);
            console.log(tamp_array);
            
            

            axios.patch('https://oajwhgh9.directus.app/users/'+person.id, {"all_days" : tamp_array}
            ).then(res =>{
                console.log(res);
            })
        }else{console.log('on fait rien dcp! !')
        dispatch({
            type : "CHANGE_ID",
            new_id : person.all_days[person.all_days.length-1].id
        });}
    }


    function setInfos(){

        axios.get('https://oajwhgh9.directus.app/users').then(res=>{
            res.data.data.map((person)=>{
                if (person.email == logFields.email){

                    dispatch({
                        type:'CHANGE_PERSON_ID',
                        new_id: person.id
                    })

                    dispatch({
                        type:'CHANGE_NAME',
                        new_name: person.first_name
                    })

                    dispatch({
                        type:'CHANGE_EMAIL',
                        new_email :person.email
                    })
                    
                    setDayInfos(person);
                    setBadDays(person);
                    console.log("Sleep infos : ")
                    setSleepInfos(person);
                    setCurrentDay(person);
                    setTodaysMigraine(person);
                    setTimeout(() => {setConnected((true))}, 1000);
                    //setConnected(true);

                    dispatch({
                        type:'SET_DAYS',
                        new_days : person.all_days
                    })

                }
            })
        })

        //console.log("User infos : ");
        //console.log(infos);
    }


    function setDayInfos(person){
        dispatch({
            type:'CHANGE_WEATHER',
            new_weather: person.all_days[person.all_days.length-1].weather
        });

        dispatch({
            type:'CHANGE_COFEE',
            new_cofee: person.all_days[person.all_days.length-1].cofee
        });

        dispatch({
            type:'CHANGE_ALCOHOL',
            new_alcohol: person.all_days[person.all_days.length-1].alcohol
        });

        dispatch({
            type:'CHANGE_SPORT',
            new_sport: person.all_days[person.all_days.length-1].sport_duration
        });

        dispatch({
            type:'CHANGE_SLEEP',
            new_sleep: person.all_days[person.all_days.length-1].sleep.duration
        });

        dispatch({
            type:'CHANGE_CARDIAC',
            new_cardiac: person.all_days[person.all_days.length-1].cardiac_freq
        });

        //console.log("Jour actuel");
        //console.log(days);
        
    }

    function setBadDays(person){
        console.log(person.all_days);
        person.all_days.map((day) => {
            if (day.migraines.intensity > 0){
                console.log("let's add the following bad day");
                console.log(day);
                dispatch({
                    type:'ADD_BAD_DAY',
                    new_bad_day :
                        {
                        id: day.id,
                        migraines:{
                            type:day.migraines.type,
                            intensity : day.migraines.intensity,
                            frontal_localisation :day.migraines.localisation.frontal,
                            lateral_localisation:day.migraines.localisation.lateral,	
                            declencheurs:day.migraines.declencheurs,
                            soulagements:day.migraines.soulagements,
                            duration:day.migraines.duration,
                        }
                    }
                })}})};
    

    function setSleepInfos(person){
        let tab_duration =[];
        let tab_light =[];
        let tab_deep=[];
        let tab_rem=[];

        person.all_days.map(day => {
            tab_duration.push(day.sleep.duration);
            tab_light.push(day.sleep.light_sleep);
            tab_deep.push(day.sleep.deep_sleep);
            tab_rem.push(day.sleep.rem_phase);
        });

        const a = average(tab_duration);

        dispatch({
            type:'SET_AVERAGE',
            new_average : average(tab_duration)
        });
        dispatch({
            type:'SET_LIGHT',
            new_light : average(tab_light)
        })
        dispatch({
            type:'SET_DEEP',
            new_deep : average(tab_deep)
        })
        dispatch({
            type:'SET_REM',
            new_rem : average(tab_rem)
        })
        
    };

    function setTodaysMigraine(person){
        console.log(person.all_days);
        dispatch({
            type : "CHANGE_DURATION",
            new_duration : person.all_days[person.all_days.length-1].migraines.duration
        });

        dispatch({
            type : "CHANGE_FRONTAL",
            new_frontal : person.all_days[person.all_days.length-1].migraines.localisation.frontal
        });

        dispatch({
            type : "CHANGE_LATERAL",
            new_lateral : person.all_days[person.all_days.length-1].migraines.localisation.lateral
        });

        dispatch({
        type : "CHANGE_INTENSITY",
        new_intensity : person.all_days[person.all_days.length-1].migraines.intensity
    });

    dispatch({
        type : "CHANGE_TYPE",
        new_type : person.all_days[person.all_days.length-1].migraines.type
    });

    dispatch({
        type :'CHANGE_DECLENCHEURS',
        new_declencheurs : person.all_days[person.all_days.length-1].migraines.declencheurs
      });

      dispatch({
        type: 'CHANGE_SOULAGEMENT',
        new_soulagements : person.all_days[person.all_days.length-1].migraines.soulagements
       });

    };


                /* dispatch({
                    type:'ADD_BAD_DAY',
                    new_bad_day : bad_days.all_days.push(
                        {
                        id: day.id,
                        migraines:{
                            type:day.migraines.type,
                            intensity : day.migraines.intensity,
                            frontal_localisation :day.migraines.localisation.frontal,
                            lateral_localisation:day.migraines.localisation.lateral,	
                            declencheurs:day.migraines.declencheurs,
                            soulagements:day.migraines.soulagements,
                            duration:day.migraines.type.duration,
                        }
                    })
                }); */

    //https://oajwhgh9.directus.app/admin/directus_sessions

    

    return (
        <body>
        <header id='login-header'>
            <a href="#"> <img src="assets/chevron-left.svg" alt=""/> </a> 
            <h1>Se connecter</h1>
        </header>
            <div>	
                <fieldset className='login-fieldset'>
                    <label for="mail" className='login-label'>Adresse e-mail</label>
                    <input type="text" id="mail" name ="mail" className='login-input' onChange={handleChange}/>
                </fieldset>
                <fieldset className='login-fieldset'>
                    <label for="password" className='login-label'>Mot de passe</label>
                    <input type="password" id="password" name ="password" className='login-input' onChange={handleChange}/>
                </fieldset>

                <a href="" class="login-link">Mot de passe oublié ?</a>

                <fieldset className='login-fieldset'>
                    <button class="green" onClick={handleSubmit}>Se connecter</button>
                </fieldset>
            </div>

            <footer id="login-footer">
                <p>Se connecter avec:</p>
                
                    <div className='login-logo'>
                        <FcGoogle className='single' size={70}  />
                        <BsFacebook className='single' size={70}/>
                    </div>

            </footer>

        </body>
        )
    }


export default Login;