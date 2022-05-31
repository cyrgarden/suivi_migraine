import React from 'react'
import HEART from './assets/heart.svg'



function HeartWidget() {
  return (
    <div>
    <article class="widget widget-heart">
    <h3 class="widget-title">Coeur</h3>
    
          <div class="widget-content">
            <img src={HEART} alt="heart"/>
            <h3>95 <span>bpm</span></h3>   
          </div>

    <div class="widget-footer">
        <a href="#" class="selected">
        </a>
        <a href="#">
        </a>
    </div>
</article>
</div>
  )
}

export default HeartWidget