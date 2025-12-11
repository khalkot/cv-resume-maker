import React from 'react'
import {Button} from '../ui/button'

function Header() {
  return (
    <div className='p-3 px-5 flex justify-between shadow-md'> 
        <img src="/logo.svg" alt="logo placeholder" width={50} height={50}/>
        
        <Button> Get started</Button>
        </div>
  )
}

export default Header