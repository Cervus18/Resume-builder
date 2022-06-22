import React, {useState} from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { useSelector } from 'react-redux/es/exports'
import { v4 as uuid } from 'uuid'
import { addLanguage } from '../../Redux/actions/data/step3'
import { deleteLanguage } from '../../Redux/actions/data/step3'


const Step3 = () => {

  const [text,setText] = useState('')

  const dispatch = useDispatch()
  const languages = useSelector(state => state.step3State)
  
  const handleAddLanguage = () => {
    if(text !==""){
    dispatch(addLanguage({id: uuid(), language: text}))
    setText('')
    }
   
  }

  const handleDeleteLanguage = (id) => {
    dispatch(deleteLanguage(id))
  }
  return (
    <div style={{"width":"100%", "padding":"1rem","overflowY":"scroll","height":"100%"}}>
    <div style={{"width":"100%","paddingBottom":"1rem","borderBottom":"1px solid #ccc"}}>
      <p><strong>Add your languages</strong></p>
      <input value={text} type="text"  onChange={e => setText(e.target.value)} />
    <button className='add' onClick={handleAddLanguage}><strong>Add Language</strong></button>
    </div>
    <ul>
      {languages?.map(item =>  <li key={item.id}> <span>{item.language}</span> <i onClick={()=>handleDeleteLanguage(item.id)} className="fa-solid fa-circle-xmark"></i> </li> )}
 
    </ul>
    
  </div>
  )
}

export default Step3