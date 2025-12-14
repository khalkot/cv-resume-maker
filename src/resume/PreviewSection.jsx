import React, { useContext } from 'react'
import { ResumeInfoContext } from '../context/ResumeInfoContext'
import PersonalDetailsPreview from './components/preview/PersonalDetailsPreview'
import SummeryPreview from './components/preview/SummeryPreview'
import ExperiencePreview from './components/preview/ExperiencePreview'
import EducationPreview from './components/preview/EducationPreview'
import SkillsPreview from './components/preview/SkillsPreview'

function PreviewSection() {
  
  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
  
  return (
    <div className='shadow-lg h-full p-14 border-t-20'
    style={{borderColor:resumeInfo?.themeColor
        
    }}>
        {/* Personal Detail */} 
        <PersonalDetailsPreview resumeInfo = {resumeInfo}/>

        {/* Summery */}
        <SummeryPreview resumeInfo = {resumeInfo}/>

        {/* Professional Experience */}
        <ExperiencePreview resumeInfo = {resumeInfo}/>

        {/* Education */}
        <EducationPreview resumeInfo = {resumeInfo}/>
        
        {/* Skills */}
        <SkillsPreview resumeInfo = {resumeInfo}/>
        
    </div>
  )
}

export default PreviewSection