import React from 'react'
import theme1 from '../images/theme1.jfif'
import theme2 from '../images/theme2.jpg'
import theme3 from '../images/theme3.jpg'
import theme4 from '../images/theme4.jpg'
import theme5 from '../images/theme5.jpg'
import theme6 from '../images/theme6.jpg'
import theme7 from '../images/theme7.jpg'
import theme8 from '../images/theme8.jpg'
import theme9 from '../images/theme9.jpg'
import theme10 from '../images/theme10.jpg'
import theme11 from '../images/theme11.jpg'
import theme12 from '../images/theme12.jpg'






import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { changeBannerTheme } from '../Redux/actions/styles/banner'






const Themes = () => {

  const dispatch = useDispatch()


  const handleThemeChange = (theme) => {
    dispatch(changeBannerTheme(theme))
  }

  return (
    <div style={{"marginTop":"1rem"}} id="themes">
        <div className="theme-item" onClick={()=> handleThemeChange('theme1.jfif')}>
            <img className='theme-img' src={theme1} alt="" onClick={()=> handleThemeChange('theme1.jfif')}/>
        </div>
        <div className="theme-item">
            <img className='theme-img' src={theme2} alt="" onClick={()=> handleThemeChange('theme2.jpg')}/>
        </div>
        <div className="theme-item">
            <img className='theme-img' src={theme3} alt="" onClick={()=> handleThemeChange('theme3.jpg')}/>
        </div>
        <div className="theme-item">
            <img className='theme-img' src={theme4} alt="" onClick={()=> handleThemeChange('theme4.jpg')}/>
        </div>
        <div className="theme-item">
            <img className='theme-img' src={theme5} alt="" onClick={()=> handleThemeChange('theme5.jpg')}/>
        </div>
        <div className="theme-item">
            <img className='theme-img' src={theme6} alt="" onClick={()=> handleThemeChange('theme6.jpg')}/>
        </div>
        <div className="theme-item">
            <img className='theme-img' src={theme7} alt="" onClick={()=> handleThemeChange('theme7.jpg')}/>
        </div>
        <div className="theme-item">
            <img className='theme-img' src={theme8} alt="" onClick={()=> handleThemeChange('theme8.jpg')}/>
        </div>
        <div className="theme-item">
            <img className='theme-img' src={theme9} alt="" onClick={()=> handleThemeChange('theme9.jpg')}/>
        </div>
        <div className="theme-item">
            <img className='theme-img' src={theme10} alt="" onClick={()=> handleThemeChange('theme10.jpg')}/>
        </div>
        <div className="theme-item">
            <img className='theme-img' src={theme11} alt="" onClick={()=> handleThemeChange('theme11.jpg')}/>
        </div>
        <div className="theme-item">
            <img className='theme-img' src={theme12} alt="" onClick={()=> handleThemeChange('theme12.jpg')}/>
        </div>
  

    </div>
  )
}

export default Themes