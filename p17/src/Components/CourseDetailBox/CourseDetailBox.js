import React from 'react'

export default function CourseDetailBox({icon, title, text}) {
  return (
    <div>
      <div className='flex gap-3 items-center font-bold shadow-lg p-5'>
        <div className='r text-2xl text-primary-color'>
          <i class={icon}></i>
        </div>
        <div className='l text-xs flex flex-col gap-1'>
          <h4>{title}</h4>
          <h4>{text}</h4>
        </div>
      </div>
    </div>
  )
}
