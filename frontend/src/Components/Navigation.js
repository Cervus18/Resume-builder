import React from 'react'
import Download from './Download'

const Navigation = ({currentStep, setCurrentStep}) => {
 
  const increment = () => {
    if(currentStep<6){
      setCurrentStep(prev => prev + 1)
    }
    
  }

  const decrement = () => {
    if(currentStep>1){
      setCurrentStep(prev => prev -1)
    }
  }

  return (
    <div className='nav' >
       <button style={currentStep===1 ? {"visibility":'hidden'}:{}} disabled={currentStep===1 } id="back" onClick={decrement}>Go back</button>
       { currentStep<6 ? <button id="next" onClick={increment}>Next</button> : <Download/>  }
    </div>
  )
}

export default Navigation