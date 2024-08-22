import React from 'react'
import { useState } from 'react';
const FeedBackForm = () => {
  const [formdata,setformdata]=useState([])
  return (
    <div className='' >
      <form className='flex flex-col justify-center items-center' onSubmit={(e)=>{
        e.preventDefault();
      }} action="">
      <label htmlFor="">Faculty Name </label>
      <input id='fname' className='border-2' placeholder='Faculty Name'  type="text" />
      <label htmlFor="">Coures Name  </label>
      <input id='cname'className='border-2'  placeholder='Course Name' type="text" />
      <label htmlFor="">Communication Skills </label>
      <input  id='cskill'className='border-2' placeholder='CSkill' type="text" />
      <input  className='bg-blue-400 rounded-sm mt-3'  onClick={()=>{
        const fName =document.getElementById('fname').value;
        const cName =document.getElementById('cname').value;
        const cskill =document.getElementById('cskill').value;
        setformdata([...formdata,{fName,cName,cskill}])
      }} type="submit" />
      </form>
      {
        formdata.map((data,index)=>(
          <div key={index}>
            <p>Faculty Name: {data.fName}</p>
            <p>Course Name: {data.cName}</p>
            <p>Communication Skills: {data.cskill}</p>
          </div>
        ))
      }
      
    </div>
  )
}

export default FeedBackForm
