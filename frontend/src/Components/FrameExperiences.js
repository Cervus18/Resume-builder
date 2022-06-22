import React from 'react'

const FrameExperiences = ({experiences}) => {
  return (
    <div>
        <h4 style={{"borderTop":"1px solid #ccc","marginTop":".7rem","paddingTop":".7rem","marginBottom":'.3rem'}}>Experiences</h4>
        <div className="frame-experiences">
          {experiences?.map(item => <div  key={item.id}>
            <h5 style={{"marginBottom":'.3rem'}} >{item.title}</h5>
            <p style={{"fontSize":".8rem"}}>{item.detail}</p>
          </div> )}
        </div>

    </div>
  )
}

export default FrameExperiences