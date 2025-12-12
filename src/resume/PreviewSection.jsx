import React, { useContext } from 'react'
import { ResumeInfoContext } from '../context/ResumeInfoContext'
import PersonalDetailsPreview from './components/preview/PersonalDetailsPreview'

function PreviewSection() {
  
  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
  
  return (
    <div>
        Review Section
        {/* Personal Detail */} 
        <PersonalDetailsPreview resumeInfo = {resumeInfo}/>

        {/* Summery */}

        {/* Professional Experience */}
        
        {/* Education */}
        
        {/* Skills */}
        
    </div>
  )
}

export default PreviewSection