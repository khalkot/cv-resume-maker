import { useEffect, useState } from 'react'
import './styles/App.css'

import FormSection from './resume/FormSection';
import PreviewSection from './resume/PreviewSection';
import Dummy from './data/Dummy';
import { ResumeInfoContext } from './context/ResumeInfoContext';

export default function App() {
  const [resumeInfo,setResumeInfo]=useState();

  useEffect(() => {
    setResumeInfo(Dummy);
  },[])

  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
      

      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>

        {/*   < Resume Section>   */}
        <PreviewSection/>

        {/*   < Form Section>   */}
        <FormSection/>

      </div>

    </ResumeInfoContext.Provider>
  );
}