import React from 'react'
import { Students } from '../Constants/Multiple'
import Attendencebutton from './Attendencebutton'
const Members = () => {
  return (
    <div>
      {
        Students.map((student, index) => (
            <div key={index} className=''>
                <h1>{student.name}</h1>
                <h1>{student.id}</h1>
               <Attendencebutton/>
            </div>
        ))
      }
    </div>
  )
}

export default Members

