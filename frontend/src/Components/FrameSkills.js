import React from 'react'
import { useSelector } from 'react-redux/es/exports'

const FrameSkills = ({skills}) => {



  return (
    <> 
        <h4 style={{"borderTop":"1px solid #ccc","marginTop":".7rem","paddingTop":".7rem"}}>Skills</h4>
        <div className='frame-skills'>
       
       
        {skills?.map(item=> <span className='skill-item' key={item.id}>{item.skill}</span> )}
      

    </div>
    </>

  )
}

export default FrameSkills