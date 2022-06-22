import React from 'react'
import { useDispatch } from 'react-redux'
import { changeFontStyle } from '../Redux/actions/styles/font'

const FontStyleSection = () => {
  
  const dispatch = useDispatch()

  const handleChange = (fontStyle) => {
    dispatch(changeFontStyle(fontStyle))
  }

  return (
    <div id="font-style-section" onChange={e=>handleChange(e.target.value)}>
        <div className="section-name">Font style</div>
        <select name="font-style">
            <option value="" >Regular</option>
            <option value="italic" >Italic</option>       
        </select>
    </div>
  )
}

export default FontStyleSection