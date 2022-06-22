import React, {useState} from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { addImage } from '../../Redux/actions/data/step5'
import { deleteImage } from '../../Redux/actions/data/step5'
import { useSelector } from 'react-redux/es/exports'

const Step5 = () => {

  const initialPreview = useSelector(state=> state.step5State)  
  //Image upload
  const [fileInputState,setFileInputState] = useState('')
  const [previewSource,setPreviewSource] = useState(initialPreview)
  
  const dispatch = useDispatch()

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    previewFile(file)
  }

  const previewFile = (file) => {
    const reader = new FileReader()
    //Convert the image to a string 64base-encoded
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
      dispatch(addImage(reader.result))
    }
}
  return (
    <div style={{"width":"100%", "padding":"1rem","overflowY":"scroll","height":"100%"}}>
      <div style={{"width":"100%","display":"flex","justifyContent":"center"}}>
                  
        { previewSource &&  <img  alt="" style={{"width":"200px","margin":"1rem auto"}} src={previewSource} />}
                   
      </div>   
      <label htmlFor='hidden'  style={{"margin":"0"}}>Add image <i className="fas fa-image"></i></label>
      <input value={fileInputState} id="hidden" type="file" style={{"display":"none"}} onChange={(e)=>handleFileInputChange(e)} />
      {previewSource && <label id="delete-img" onClick={()=> dispatch(deleteImage(), setPreviewSource(""))}>Delete image</label>}
                
    </div>
  )
}

export default Step5