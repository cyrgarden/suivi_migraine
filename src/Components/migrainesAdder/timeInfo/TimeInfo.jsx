import React from 'react'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import MigrainesReducer from '../../../Reducers/MigrainesReducer';

function toSecond(value){
  value = value.split(':');
  console.log(value);
  let hours = parseInt(value[0])*60*60;
  let minutes = parseInt(value[1])*60;
  return hours + minutes;
};

function TimeInfo() {

    const migrainesInfo = useSelector(state => state.MigrainesReducer)
    const dispatch = useDispatch();

    var startHour ='';
    var endHour ='';

    const [saveStart, setSaveStart] = useState('');
    const [saveEnd, setSaveEnd] =useState(''); 

    const handleChange = (e) => {
      console.log(e.target.name);
      if (e.target.name == 'beginning'){
        //setStartHour(e.target.value);
        startHour = e.target.value;
        setSaveStart(startHour);
        endHour = saveEnd;
      }
      else if (e.target.name == 'end'){
        //setEndHour(e.target.value);
        endHour = e.target.value;
        setSaveEnd(endHour);    
        startHour = saveStart;  
      };

      let start = toSecond(startHour);
      let end = toSecond(endHour);
      
      dispatch({
        type : "CHANGE_DURATION",
        new_duration : end - start
    });

    console.log(migrainesInfo.duration);

    };


  return (
    <section class="xl-container migraine-informations">
      
    <div class="migraine-info" id="migraine-start">
        <label for="fname">Heure de début</label><br></br>
        <input type="time" id="fname" name="beginning" onChange={handleChange} ></input><br></br><br></br>
    </div>
    <div class="migraine-info" id="migraine-start">
        <label for="fname" >Heure de fin</label><br></br>
        <input type="time" id="fname" name="end" onChange= {handleChange}></input><br></br><br></br>
    </div>
    </section>

  )
}

export default TimeInfo