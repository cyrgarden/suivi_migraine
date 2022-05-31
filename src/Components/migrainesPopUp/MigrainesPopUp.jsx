import React from 'react'
import './MigrainesPopUp.css'
import {useSelector} from 'react-redux'


function MigrainesPopUp() {
    const migraines_infos =useSelector(state=>BadDaysReducer);

  return (
    <div>
        {migraines_infos.all_days.id}
    </div>
  )
}

export default MigrainesPopUp