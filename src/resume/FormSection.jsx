import React, { useState } from 'react'
import { useContext } from 'react'
import { ResumeInfoContext } from '../context/ResumeInfoContext'
import PersonalDetailsForm from './components/form/PersonalDetailsForm'
import SummeryFrom from './components/form/SummeryFrom'
import ExperienceForm from './components/form/ExperienceForm'
import EducationForm from './components/form/EducationForm'
import SkillsForm from './components/form/SkillsForm'

import { LayoutGrid,ArrowRight, ArrowLeft} from 'lucide-react'
import { Button } from '../components/ui/button'

function FormSection() {
    
  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
  const [currentFormIndex,setCurrentFormIndex]=useState(0);

  return (

    <div>    
      
      <div className='flex justify-between items-center'>
        
        <Button variant="outline" size="sm" className="flex gap-2"> <LayoutGrid/>
          Theme 
        </Button>

        <div className='flex'>
          
          {(currentFormIndex > 0) && 
          <Button size="sm" 
          onClick={()=>setCurrentFormIndex(currentFormIndex-1)}
          > <ArrowLeft/> </Button>}    
          
          <Button className="flex gap-2" size="sm" onClick={currentFormIndex<=3 ? ()=>setCurrentFormIndex(currentFormIndex+1) : null}
          > Next <ArrowRight/> </Button>
        
        </div>

      </div>
      
      <div>        
        Form section
        {/* Personal Detail */}
        
        {currentFormIndex==0? < PersonalDetailsForm setResumeInfo = {setResumeInfo}/>:null}

        {/* Summery */}

        {currentFormIndex==1 ? <SummeryFrom setResumeInfo = {setResumeInfo}/>:null}

        {/* Professional Experience */}

        {currentFormIndex==2 ? <ExperienceForm setResumeInfo = {setResumeInfo}/>:null}

        {/* Education */}

        {currentFormIndex==3 ? <EducationForm setResumeInfo = {setResumeInfo}/>:null}

        {/* Skills */}

        {currentFormIndex==4 ? <SkillsForm setResumeInfo = {setResumeInfo}/>:null}

      </div>
    </div>

  )
}

export default FormSection