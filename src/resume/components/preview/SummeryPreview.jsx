import React from 'react'

function SummeryPreview({resumeInfo}) {
  return (
    <div>
    <p className='font-light text-sm'>
        {resumeInfo?.summery}</p>
    </div>
  )
}

export default SummeryPreview