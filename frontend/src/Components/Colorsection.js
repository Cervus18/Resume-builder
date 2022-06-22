import React, {useState} from 'react'
import ColorPalette from './ColorPalette'
import Themes from './Themes'


const Colorsection = () => {
  
  const [current,setCurrent]= useState('theme')
    
  return (
    <div id="color-section" >
        <div className="section-name">Banner theme & color</div>
        <div id="color-theme">
            <span onClick={()=> setCurrent("color")}>Color</span>
            <span onClick={()=> setCurrent("theme")} >Theme</span>
        </div>
        {
            current==="color" ? <ColorPalette/>: current==="theme" && <Themes/>
        }
    </div>
  )
}

export default Colorsection