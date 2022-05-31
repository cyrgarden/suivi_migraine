import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import {motion} from 'framer-motion'
import Modal from '../modal/Modal.jsx';
import { useSelector, useDispatch } from 'react-redux';
import './calendarBox.css';
import Sheet from 'react-modal-sheet';



var list_days=['Mon May 16 2022 00:00:00 GMT+0200 (heure d’été d’Europe centrale)','Tue Apr 26 2022 00:00:00 GMT+0200 (heure d’été d’Europe centrale)','Fri May 06 2022 00:00:00 GMT+0200 (heure d’été d’Europe centrale)',"jsp", "jsp"];

var selectedDay ='';


  

function CalendarBox() {

  const bad_days = useSelector(state => state.BadDaysReducer)
  console.log(bad_days);
  var list_days = bad_days.all_days.map((day)=> day.id.substr(0,15));

  const [isOpen, setOpen] = React.useState(false);
  //const [selectedDay, setSelectedDay]= useState('');

  const [duration, setDuration]=useState(0);
  const [intensity, setIntensity]=useState(0);
  const [cardiac_frequency, setCardiacFrequency]=useState(0);
  const [localisation, setLocalisation]=useState('');
  const [type, setType]=useState('');

  const selectDays = (date) =>{
    if(list_days.includes(date.toString().substr(0,15))){
      console.log(date.toString().substr(0,15));
    }

        return list_days.includes(date.toString().substr(0,15));
    };
  

  function fillInfos(){
    console.log(bad_days);
    bad_days.all_days.map((day)=>{
      if (day.id == selectedDay){
        setDuration(day.migraines.duration);
        setIntensity(day.migraines.intensity);
        //setCardiacFrequency(day.migraines.card);
        setLocalisation(day.migraines.frontal_localisation);
        setType(day.migraines.type);
      }
    })
    

  };

  const handleClose =()=> {
    setOpen(false)
    setDuration(0);
    setIntensity(0);
    setLocalisation('');
    setType('');

  }
  
  const handleClick = (e) =>{
    //console.log(e);
    console.log(selectedDay);
    console.log(e.toString());
    selectedDay= e.toString();

    console.log(list_days[0]);

    console.log(selectedDay.toString().substr(0,15) == list_days[0]);

    fillInfos();
    setOpen(true);
  }


    return (
      <>
      <article className="widget widget-crisis">
         <Calendar id ="calendar" 
         onClickDay={handleClick}
         tileClassName={({date,view}) => selectDays(date) ? "migraine_occured" : null} 
          />
       </article>


      <Sheet isOpen={isOpen} onClose={handleClose}
          snapPoints={[0.]}>
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>
              <h1>Journée du : {selectedDay.toString().substring(0,15)}</h1>
              <div>
                <h2>Durée de la douleur : {Math.round(duration/60)} minutes </h2>
                <h2> Intensité de la douleur {intensity} </h2>
                <h2>Fréquence cardiaque : {cardiac_frequency}</h2>
                <h2>Localisation : {localisation} </h2>
                <h2>Type de douleur : {type}</h2>
              </div>
              </Sheet.Content>
          </Sheet.Container>
  
          <Sheet.Backdrop />
        </Sheet>
        </>
  )};
    
export default CalendarBox;



//var list_days=['Mon May 16 2022 00:00:00 GMT+0200 (heure d’été d’Europe centrale)','Tue Apr 26 2022 00:00:00 GMT+0200 (heure d’été d’Europe centrale)','Fri May 06 2022 00:00:00 GMT+0200 (heure d’été d’Europe centrale)',"jsp", "jsp"];

  //const dispatch = useDispatch();
  /* const bad_days = useSelector(state => state.BadDaysReducer);
  const id_list = bad_days.map(day => day.id);
  console.log(id_list); */

  //const displayModal = useSelector(state => state.ModalReducer.displayModal) ;

  //const [displayModal, setDisplayModal] = useState(false);
    //const [date, setDate] = useState(new Date());
    //onClick={() => (modalOpen ? close() : open())}> 
    
    /* const changeModalState = () => {
      dispatch({
        type:'SET_DISPLAY',
        new_displayMode : !displayModal
      }) */
