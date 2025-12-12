import React, { useContext } from 'react'
import { ResumeInfoContext } from '../context/ResumeInfoContext'
import PersonalDetailsPreview from './components/preview/PersonalDetailsPreview'

function PreviewSection() {
  
  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
  
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{borderColor:resumeInfo?.themeColor
        
    }}>
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