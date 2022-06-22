import React, {useState} from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { useSelector } from 'react-redux/es/exports'
import { addSkill } from '../../Redux/actions/data/step2'
import { v4 as uuid } from 'uuid'
import { deleteSkill } from '../../Redux/actions/data/step2'

const Step2 = () => {

  const [text,setText] = useState('')

  const dispatch = useDispatch()
  const skills = useSelector(state => state.step2State)
  
  const handleAddSkill = () => {
    if(text !==""){
    dispatch(addSkill({id: uuid(), skill: text}))
    setText('')
    }
   
  }

  const handleDeleteSkill = (id) => {
    dispatch(deleteSkill(id))
  }

  return (
    <div style={{"width":"100%", "padding":"1rem","overflowY":"scroll","height":"100%"}}>
      <div style={{"width":"100%","paddingBottom":"1rem","borderBottom":"1px solid #ccc"}}>
        <p><strong>Add your skills</strong></p>
        <input value={text} type="text"  onChange={e => setText(e.target.value)} />
      <button className='add' onClick={handleAddSkill}><strong>Add Skill</strong></button>
      </div>
      <ul>
        {skills?.map(item =>  <li key={item.id}> <span>{item.skill}</span> <i onClick={()=>handleDeleteSkill(item.id)} className="fa-solid fa-circle-xmark"></i> </li> )}
   
      </ul>
      
    </div>
  )
}

export default Step2