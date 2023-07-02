import React from 'react'

export default function AboutUsBox({icon , title , desc}) {
    return (
        <div>
            <div className='flex gap-4 items-center border-2 p-3  rounded-md shadow-md'>
                <div className='r text-5xl'>
                    <i className={icon}></i>
                </div>
                <div className='l text-xs font-bold'>
                    <h3 className='text-sm'>{title}</h3>
                    <h4>{desc}</h4>
                </div>
            </div>
        </div>
    )
}
