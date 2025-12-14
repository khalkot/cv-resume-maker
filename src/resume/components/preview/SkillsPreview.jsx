import React from 'react'

function SkillsPreview({resumeInfo}) {
  return (
    <div>
      <div className='my-6'>
        <h2 className='font-bold text-center text-sm mb-2'
        style={{color:resumeInfo?.themeColor}}>
          Skills
        </h2>

        <hr style={{borderColor:resumeInfo?.themeColor}}/>
        </div>
      <div className='grid grid-cols-2 gap-3 my-4'>
      {resumeInfo?.skills.map((skills)=>(
        <div key={skills.id} >
          <p className='text-xs'>{skills?.name}</p>
          <div className='h-2 bg-gray-400 w-[120px]'>
            <div className='h-2 ' style={{backgroundColor:resumeInfo?.themeColor, width:skills?.rating+'%'}}>

            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default SkillsPreview