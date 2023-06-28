import React from 'react'

export default function TopBar() {
    return (
        <div>
            <div className='w-full bg-slate-200 py-2 flex text-xs font-bold items-center justify-between px-2'>
                <div className='r'>
                    <ul className='flex gap-3  '>
                        <li className='hover:bg-primary-color hover:text-white px-1 py-2 rounded-md cursor-pointer duration-300'><a className='hover:text-inherit' href="">آموزش html</a></li>
                        <li className='hover:bg-primary-color hover:text-white px-1 py-2 rounded-md cursor-pointer duration-300'><a className='hover:text-inherit' href="">آموزش css</a></li>
                        <li className='hover:bg-primary-color hover:text-white px-1 py-2 rounded-md cursor-pointer duration-300'><a className='hover:text-inherit' href="">آموزش جاوا اسکریپت</a></li> 
                        <li className='hover:bg-primary-color hover:text-white px-1 py-2 rounded-md cursor-pointer duration-300'><a className='hover:text-inherit' href="">آموزش بوت استرپ</a></li>
                        <li className='hover:bg-primary-color hover:text-white px-1 py-2 rounded-md cursor-pointer duration-300'><a className='hover:text-inherit' href="">آموزش پایتون</a></li>
                        <li className='hover:bg-primary-color hover:text-white px-1 py-2 rounded-md cursor-pointer duration-300'><a className='hover:text-inherit' href="">آموزش ری اکت</a></li>
                        <li className='hover:bg-primary-color hover:text-white px-1 py-2 rounded-md cursor-pointer duration-300'><a className='hover:text-inherit' href="">20,000 تومان</a></li>
                    </ul>
                </div>
                <div className='l px-2 flex gap-2'>
                    <div className='flex items-center gap-2'>
                        <a href='#'>spd.mohammadreza@gmail.com</a>
                        <i class="text-primary-color fa-solid fa-envelope text-base"></i>
                    </div>
                    <div className='flex items-center gap-2'>
                        <a href='#' className=''>09029974092</a>
                        <i className=" fa-solid fa-phone text-primary-color text-base "></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
