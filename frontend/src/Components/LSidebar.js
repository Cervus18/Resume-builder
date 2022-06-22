import React, { useState } from 'react'
import LBody from './LBody'
import Navigation from './Navigation'

const LSidebar = () => {
  
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div id="l-sidebar">
        <div className="head">
            Step {currentStep}
        </div>
        <LBody currentStep={currentStep}/>
        <Navigation currentStep={currentStep} setCurrentStep={setCurrentStep}/>
    </div>
  )
}

export default LSidebar