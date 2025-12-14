import React from 'react'

function EducationPreview({resumeInfo}) {
  return (
    <div>
      <div className='my-6'>
        <h2 className='font-bold text-center text-sm mb-2'
        style={{color:resumeInfo?.themeColor}}>
          Education
        </h2>

        <hr style={{borderColor:resumeInfo?.themeColor}}/>
      </div>
      <div>
        {resumeInfo?.education.map((education)=>(
          <div key={education.id} className='my-5'>
            <h2 className='font-bold text-sm'
            style={{color:resumeInfo?.themeColor}}>
              {education?.universityName}
            </h2>
            <div className='flex justify-between text-xs'>
              <p>{education?.degree} in {education?.major}</p>
              <p>{education?.startDate} - {education?.endDate}</p>
            </div>
            <p className='text-xs my-2'>{education?.description}</p>

          </div>

        ))}
      </div>
</div>
  )
}

export default EducationPreview