import React from 'react'
import Step1 from './form_elements/Step1'
import Step2 from './form_elements/Step2'
import Step3 from './form_elements/Step3'
import Step4 from './form_elements/Step4'
import Step5 from './form_elements/Step5'
import Step6 from './form_elements/Step6'


const LBody = ({currentStep}) => {
  return (
    <div id="l-body">
      {(() => {
        switch (currentStep) {
          case 1:
            return <Step1/>
          case 2:
            return <Step2 />
        case 3:
            return <Step3/>
        case 4:
            return <Step4/>
        case 6:
          return <Step5/>
        case 5:
            return <Step6/>
        default:
            return null
        }
      })()}
    </div>
  )
}

export default LBody