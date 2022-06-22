import React from 'react'
import Colorsection from './Colorsection'
import Fontfamilysection from './Fontfamilysection'
import FontStyleSection from './FontStyleSection'

const RSidebar = () => {
  return (
    <div id="r-sidebar">
        <div className="head">
            Customize
        </div>
        <Colorsection/>
        <Fontfamilysection/>
        <FontStyleSection/>
    </div>
  )
}

export default RSidebar