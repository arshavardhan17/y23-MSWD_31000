import React from 'react'
import Hedder from './components/Hedder'
import Sidebar from './components/Sidebar'
import Holders from './components/Holders'
const App = () => {
  return (
    <div className='w-full h-screen grid grid-cols-12 grid-rows-8 '>
      <div className='w-full h-auto row-span-1 col-span-12 bg-orange-600'>
        <Hedder />
      </div>
      <div className='flex col-span-12 row-span-11 bg-green-400 '>
      <div className='w-[17%] h-auto bg-yellow-500'>
        <Sidebar />
      </div>
      <div className='w-full h-auto  flex items-center justify-center bg-green-400 '> <Holders/> </div>
      </div>
     
      
    </div>
  )
}

export default App
