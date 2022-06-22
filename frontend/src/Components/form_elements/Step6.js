import React,{useState} from 'react'
import { addExperience } from '../../Redux/actions/data/step6'
import { deleteExperience } from '../../Redux/actions/data/step6'
import { useDispatch } from 'react-redux/es/exports'
import { useSelector } from 'react-redux/es/exports'
import { v4 as uuid } from 'uuid'

const Step6 = () => {
  
    const experienceValue = useSelector(state => state.step6State)
    const [experience,setExperience] = useState({title:"",detail:""})

    const dispatch = useDispatch()
    
    
    const handleAddExperience = () => {
      if(experience.title && experience.detail){
       dispatch(addExperience({...experience, id: uuid(),}))
       setExperience({title:"",detail:""})
      }
     
    }
  
    const handleDeleteExperience = (id) => {
      dispatch(deleteExperience(id))
    }
    return (
      <div style={{"width":"100%", "padding":"1rem","overflowY":"scroll","height":"100%"}}>
      <div style={{"width":"100%","paddingBottom":"1rem","borderBottom":"1px solid #ccc"}}>
        <p><strong>Add your Experiences</strong></p>
        <input placeholder='Experience title' value={experience.title} onChange={(e)=> setExperience({...experience,title: e.target.value})} type="text" />
        <textarea placeholder='Experience details' value={experience.detail} onChange={(e)=> setExperience({...experience,detail: e.target.value})} />

      <button className='add' onClick={handleAddExperience}><strong>Add Experience</strong></button>
      </div>
      <ul>
        {experienceValue?.map(item=> 
        <li key={item.id}>
            <span style={{"marginRight":".7rem"}}>
            <h4 style={{"marginBottom":".5rem"}}>{item.title}</h4>
            <p>{item.detail}</p>  
            </span>
            <i  onClick={()=>handleDeleteExperience(item.id)}  className="fa-solid fa-circle-xmark"></i>
        </li> )}

       
   
      </ul>
      
    </div>)
}

export default Step6