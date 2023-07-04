import React from 'react'

export default function FooterItem({ title, children }) {
    return (
        <div>
            <div className='flex flex-col gap-5 text-xs'>
                <div className='relative z-50'>
                    <h2 className='font-bold'>{title}</h2>
                    <span className='w-7 h-7 bg-primary-color/40 absolute rounded-md -top-1/4 right-2 rotate-45 -z-10'></span>
                </div>
                {children}
            </div>
        </div>
    )
}
