import React from 'react'

function PersonalDetailsPreview({resumeInfo}) {
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{borderColor:resumeInfo?.themeColor
        
    }}>
        <h2>{resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
    </div>
  )
}

export default PersonalDetailsPreview