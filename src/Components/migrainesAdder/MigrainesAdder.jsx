import React from 'react'
import{useState} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import TimeInfo from './timeInfo/TimeInfo'
import MigraineInfo from './migraineInfo/MigraineInfo'
import Declencheurs from './declencheurs/Declencheurs'
import './migrainesAdder.css'
import CHEVRON from './assets/chevron-left.svg'


function MigrainesAdder() {

    const handleNav = () => {
        
        switch (counter) {
            case 0 : return(<TimeInfo />);
            case 1 : return(<MigraineInfo />);
            case 2 : return(<Declencheurs />)
        }

    }

    function previousButton(){
        if (counter > 0){
            return(<a className='back-button' onClick={()=> setCounter(counter-1)}><img src={CHEVRON}></img></a>)
        }

    }

    function nextButton(){
        if (counter < 2){
            return(
            <a class="btn btn-violet next-button" onClick={() => setCounter(counter+1)}> 
                <img className='inverse' src ={CHEVRON}></img>
            </a>
                )
/*             return(<a className='back-button' onClick={()=> setCounter(counter+1)}><img className='inverse' src={CHEVRON}></img></a>)
 */        }
    }

    const [counter, setCounter] = useState(0);
    const [bodyComponent, setBodyComponent] = useState(<TimeInfo />)
    
    const dispatch = useDispatch();

    const bad_days = useSelector(state => state.BadDaysReducer);
      
  return (
      
      <body className='full-container add-migraine'>
      {previousButton()}
      
      <nav class="steps">
        <div class={counter==0 ? "step-circle active":'step-circle'} ></div>
        <div class="step-separator"></div>
        <div class={counter==1 ? "step-circle active":'step-circle'}></div>
        <div class="step-separator"></div>
        <div class={counter==2 ? "step-circle active":'step-circle'}></div>
       </nav>
      {handleNav()}
      {nextButton()}

      </body>
  )
}

export default MigrainesAdder