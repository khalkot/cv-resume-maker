import React, { useContext, useState } from 'react'
import { ResumeInfoContext } from '../../../context/ResumeInfoContext'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import { toast } from 'sonner'


function PersonalDetailsForm() {

    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
    
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setResumeInfo({
            ...resumeInfo,
            [name]:value
        })
    }

    const onSave=(e)=>{

        e.preventDefault();
        toast("Details Saved!")
    }
    return (
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Personal Details</h2>
            <p>Get started with the basic information</p>

            <form onSubmit={onSave}>
                <div className='grid grid-cols-2 mt-5 gap-3'>
                    <div>
                    <label className='text-xs'>First Name</label>
                    <Input name="firstName" defaultValue={resumeInfo?.firstName} required onChange={handleInputChange}/> 
                    </div>

                    <div>
                    <label className='text-xs'>Last Name</label>
                    <Input name="lastName" required defaultValue={resumeInfo?.lastName} onChange={handleInputChange}/> 
                    </div>
                    
                    <div className='col-span-2'>
                    <label className='text-xs'>Job Title</label>
                    <Input name="jobTitle" required defaultValue={resumeInfo?.jobTitle} onChange={handleInputChange}/> 
                    </div>
                    
                    <div className='col-span-2'>
                    <label className='text-xs'>Address</label>
                    <Input name="address" required defaultValue={resumeInfo?.address} onChange={handleInputChange}/> 
                    </div>
                    
                    <div>
                    <label className='text-xs'>Phone</label>
                    <Input name="phone" required defaultValue={resumeInfo?.phone} onChange={handleInputChange}/> 
                    </div>
                    
                    <div>
                    <label className='text-xs'>E-mail</label>
                    <Input name="email" required defaultValue={resumeInfo?.email} onChange={handleInputChange}/> 
                    </div>
                </div>

                <div className='mt-3 flex justify-end'>
                    <Button type="submit"> Save </Button>
                </div>
            </form>
            
        </div>
    )
}

export default PersonalDetailsForm