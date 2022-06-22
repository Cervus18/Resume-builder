import React from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { changeFontFamily } from '../Redux/actions/styles/font'
import { useSelector } from 'react-redux/es/hooks/useSelector'


const Fontfamilysection = () => {
 
  const dispatch = useDispatch()

  const {fontFamily} = useSelector(state => state.fontState)

  const handleFontChange = (font) => {
    dispatch(changeFontFamily(font))
  }

  return (
    <div id="font-family-section">
        <div className="section-name" value={fontFamily} >Font family</div>
        <select name="font-family" onChange={e =>handleFontChange(e.target.value)}>
            <option value="Arial" >Arial</option>
            <option value="Lato" >Lato</option>  
            <option value="Roboto" >Roboto</option>       
            <option value="Open Sans" >Open Sans</option>       
            <option value="Poppins" >Poppins</option>       
            <option value="Titillium Web" >Titillium Web</option>
            <option value="Roboto Mono" >Roboto Mono</option>

                   

        </select>
    </div>
  )
}

export default Fontfamilysection