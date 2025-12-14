import React from 'react'

function ExperiencePreview({resumeInfo}) {
  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-sm mb-2'
        style={{color:resumeInfo?.themeColor}}>Professional Experience
        </h2>
        <hr style={{borderColor:resumeInfo?.themeColor}}/>

        <div>
          {resumeInfo?.experience.map((experience)=>(
            <div key={experience.id} className='my-5'>
              <h2 className='text-sm font-bold'
                style={{color:resumeInfo?.themeColor}}>
                {experience?.title}
              </h2>
              
              <h2 className='text-xs flex justify-between'>
                {experience?.companyName},  
                {experience?.city},
                {experience?.state}
              <span>{experience?.startDate}{experience?.currentlyWorking?' - Present':' - '+experience.endDate}</span>
              </h2>
              <ul className='text-xs my-2 list-disc'>
                {experience?.workSummery.map((workSummery,summeryIndex)=>(
                  <li key={summeryIndex}>{workSummery}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ExperiencePreview 