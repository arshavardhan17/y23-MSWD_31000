import React from 'react'
import { Cards } from '../Constants/Multiple'

const Holders = () => {
  return (
    <div className=' flex gap-28 '>
      {
        Cards.map((card, index)=>(

            <div className='w-40 h-44   bg-red-500 rounded-md '>{card.hedding}</div>
        )
        )
      }
    </div>
  )
}

export default Holders
