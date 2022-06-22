import React, {useState} from 'react'
import { changeBannerColor } from '../Redux/actions/styles/banner'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'

const ColorPalette = () => {
  
  const dispatch = useDispatch()
  const {color} = useSelector(state=> state.bannerState )
  
  const [bannerColor,setBannerColor] = useState(color)

  const handleColorChange =(e)=> {
    setBannerColor(e.target.value)
    dispatch(changeBannerColor(bannerColor)) 
    
  }

  return (
    <div  style={{"marginTop":"1rem"}}>
       <input type="color" value={bannerColor} onChange={e => handleColorChange(e)}/> 
    </div>
    
  )
}

export default ColorPalette