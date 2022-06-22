import React from 'react'
import Languages from './Languages'
import Hobbies from './Hobbies'
import { useSelector } from 'react-redux/es/exports'

const FrameSidebar = () => {
  
    const languages = useSelector(state => state.step3State)
    const hobbies = useSelector(state => state.step4State)


  return (
    <div id="frame-sidebar" >
       {languages.length>0 && <Languages languages={languages}/>}
       {hobbies.length>0 && <Hobbies hobbies={hobbies} />}
    </div>
  )
}

export default FrameSidebar