import React from 'react'
import {useState} from 'react'
import{Navigate} from "react-router-dom"
import Summary from '../summary/Summary'
import Factors from '../factors/Factors'
import HeartWidget from '../heartWidget/HeartWidget'
import CalendarBox  from '../calendar/CalendarBox.jsx'
import Graph from '../graph/Graph'
import {useSelector} from 'react-redux'


function InfoPage() {

  const [toMigrainesAdder, setToMigrainesAdder] =useState(false)
  const person = useSelector(state => state.InfoReducer);

  if (toMigrainesAdder){
    return (<Navigate to="/add" />)
  };  
  
  return (
    <>
    <header className="l-container" >
      <h3 className="text-centered">Bonjour {person.name} ! </h3>
    </header>
    <section className="l-container">
      <section className="widgets">
         <CalendarBox />
         <Summary />
        <Factors />
          <HeartWidget />

{/*            <Graph />  
 */}   

        <section className='l-container'>
            <a className='btn btn-violet' onClick={() => setToMigrainesAdder(true)}>Ajouter une Migraine</a>
        </section>
    </section>
      </section>
    </>
    
  )
}

export default InfoPage