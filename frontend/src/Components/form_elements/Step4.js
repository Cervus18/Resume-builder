import React, {useState} from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { useSelector } from 'react-redux/es/exports'
import { v4 as uuid } from 'uuid'
import { addHobby } from '../../Redux/actions/data/step4'
import { deleteHobby } from '../../Redux/actions/data/step4'



const Step4 = () => {

  const [text,setText] = useState('')

  const dispatch = useDispatch()
  const hobbies = useSelector(state => state.step4State)
  
  const handleAddHobby = () => {
    if(text !==""){
    dispatch(addHobby({id: uuid(), hobby: text}))
    setText('')
    }
   
  }

  const handleDeleteHobby = (id) => {
    dispatch(deleteHobby(id))
  }
  return (
    <div style={{"width":"100%", "padding":"1rem","overflowY":"scroll","height":"100%"}}>
    <div style={{"width":"100%","paddingBottom":"1rem","borderBottom":"1px solid #ccc"}}>
      <p><strong>Add your hobbies</strong></p>
      <input value={text} type="text"  onChange={e => setText(e.target.value)} />
    <button className='add' onClick={handleAddHobby}><strong>Add Hobbie</strong></button>
    </div>
    <ul>
      {hobbies?.map(item =>  <li key={item.id}> <span>{item.hobby}</span> <i onClick={()=>handleDeleteHobby(item.id)} className="fa-solid fa-circle-xmark"></i> </li> )}
 
    </ul>
    
  </div>
  )
}

export default Step4