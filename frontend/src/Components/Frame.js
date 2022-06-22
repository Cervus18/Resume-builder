import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import FrameSkills from './FrameSkills'
import FrameSidebar from './FrameSidebar'
import FrameExperiences from './FrameExperiences'


const Frame = () => {

  const {color,theme} = useSelector(state => state.bannerState)
  const {name,email,about,phone} = useSelector(state => state.step1State)
  const experiences = useSelector(state => state.step6State)

  const {fontFamily, fontStyle} = useSelector(state => state.fontState)

  const image = useSelector(state => state.step5State)
  const skills =  useSelector(state=> state.step2State)

  return (
    <div className='frame' style={{"fontFamily": fontFamily, "fontStyle": fontStyle}}>
        <div className="banner" style={color ?{"background":color}:theme && { backgroundImage: `url(${require(`../images/${theme}`)})`}}>
         <img  alt="" style={{"height":"100%"}} src={image} />
        </div>
        <div  >
          <div className='frame-mail-phone'>
            <p style={{"fontSize":".8rem"}}>{email && <><strong>email:</strong> {email}</>} </p>
            <p style={{"fontSize":".8rem"}}> {phone && <><strong>phone:</strong> {phone}</>}</p>
          </div>
        
          
          <div className="frame-body">
            <div>
              <h3 style={{"marginBottom":".3rem"}}>{name}</h3>
              <p style={{"fontSize":".8rem"}}>{about}</p>
              {skills.length>0  &&  <FrameSkills skills={skills}/>}
              {experiences.length>0  &&  <FrameExperiences experiences={experiences}/>}

             
            </div>
            <FrameSidebar/>
            
          </div>
        
        </div>
        <div id="frame-cover"></div>
        
    </div>
  )
}

export default Frame