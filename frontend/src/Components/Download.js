import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import axios from 'axios'
import FileDownload from 'js-file-download'

const Download = () => {

    const bannerState = useSelector(state => state.bannerState)
    const fontState = useSelector(state =>state.fontState)
    const {name,phone, about,email} = useSelector(state =>state.step1State)
    const skills = useSelector(state =>state.step2State)
    const languages = useSelector(state =>state.step3State)
    const hobbies = useSelector(state =>state.step4State)
    const image = useSelector(state =>state.step5State)
    const experiences = useSelector(state =>state.step6State)


    const handleDownload = () => {

        axios({
            url:"http://localhost:5000/generateResume",
            method: "POST",
            responseType: "blob",
            data: {
               bannerState,
               fontState,
               name,
               phone,
               about,
               email,
               skills,
               languages,
               hobbies,
               image,
               experiences
              },
        }).then((res)=>{
            FileDownload(res.data,"resume.pdf")
        })
    }


  return (
    <button id="download"  onClick={handleDownload}>Download </button>
  )
}

export default Download