import React from 'react'

function ProgressBar(props) {

  const barStyle ={
    height: '100%',
    width: (props.value*100)/10,
    backgroundColor: "#155F33",
    position: "absolute",
};

  return (
    <div class="progress">
      <span class="progress-bar" style={barStyle}></span>
    </div>
  )
}

export default ProgressBar