import React from 'react'
import Hedder from './components/Hedder'
import Sidebar from './components/Sidebar'
import Holders from './components/Holders'
import Members from './components/Members'
const App = () => {
  return (
    <div className='w-full h-screen grid grid-cols-12 grid-rows-8 overflow-hidden'>
      <div className='w-full h-auto row-span-1 col-span-12 bg-orange-600'>
        <Hedder />
      </div>
      <div className='flex col-span-12 row-span-11 bg-green-400 '>
      <div className='w-[17%] h-auto bg-yellow-500'>
        <Sidebar />
      </div>
      <div > <Members/> </div>
      </div>
     
      
    </div>
  )
}

export default App
