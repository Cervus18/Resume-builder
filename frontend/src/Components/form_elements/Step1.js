import React from 'react'
import { useDispatch } from 'react-redux'
import { changeName } from '../../Redux/actions/data/step1'
import { changeEmail } from '../../Redux/actions/data/step1'
import { changeAbout } from '../../Redux/actions/data/step1'
import { changePhone } from '../../Redux/actions/data/step1'
import { useSelector } from 'react-redux/es/exports'


const Step1 = () => {
  
   const dispatch = useDispatch()
   const {name,about,phone,email} = useSelector(state => state.step1State)
   

  return (
    

    <div style={{"width":"100%", "padding":"1rem","overflowY":"scroll","height":"100%"}}>
        <div>
            <p><strong>Full name</strong></p>
            <input value={name} type="text" onChange={(e)=> dispatch(changeName(e.target.value))}/>
        </div>
        <div >
          <p><strong>About you</strong></p>
          <textarea value={about} onChange={(e)=> dispatch(changeAbout(e.target.value))}/> 
        </div>
        <div>
          <p><strong>Email</strong></p>
          <input value={email} type="email" onChange={(e)=> dispatch(changeEmail(e.target.value))}/>
        </div>
        <div>
          <p><strong>Phone number</strong></p>
          <input value={phone} type="number" onChange={(e)=> dispatch(changePhone(e.target.value))}/>
        </div>
 
        
    </div>
  )
}

export default Step1