import React from 'react'
import {Link} from 'react-router-dom'
export default function SectionHeader({title , desc , btnTitle , bgw , btnHref}) {
    return (
        <div>
            <div className='w-full flex justify-between gap-5 items-center'>
                <div className='r relative w-full'>
                    <div className={`up relative bg-primary-color/25 h-4  ${bgw}`}>
                        <h2 className='absolute -top-2'>{title}</h2>
                    </div>
                    <div className='down'>
                        <h3 className='text-xs'>{desc}</h3>
                    </div>
                    <span className='absolute w-1 h-10 bg-primary-color bottom-1 -right-2 rotate-6'></span>
                </div>

                {
                    btnTitle ? (
                <div className='l w-32'>
                    <button className='text-xs bg-primary-color p-2 rounded-md text-white-color'>
                        <Link className='flex gap-1 items-center' to={btnHref}>{btnTitle}
                        <i class="fa-solid fa-arrow-left"></i>
                        </Link>
                    </button>
                </div>
                    ) : null
                }
            </div>
        </div>
    )
}
