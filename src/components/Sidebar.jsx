import React from 'react'
 import { Elements } from '../Constants/Multiple'
const Sidebar = () => {
    return (
    <div className='w-full h-screen bg-yellow '>
 {
    Elements.map((elements, index) =>(
        
            <h1 className='w-full h-12 bg-black border-2 border-white-400 text-white flex justify-center items-center rounded-sm'>{elements.name}</h1>
      )
    )
 }
    </div>
  )
}

export default Sidebar
