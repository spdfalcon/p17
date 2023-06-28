import React from 'react'

export default function NavBar() {
  return (
    <div>
      <div className='px-2 py-2 items-center flex justify-between text-sm font-bold '>
        <div className='r flex items-center gap-3'>
          <div className='w-20'><img src="/images/logo/Logo.png" alt="logo mohammad" /></div>
          <div>
            <ul className='flex gap-2 '>
              <li className=' hover:bg-primary-color px-2 py-2 rounded-md cursor-pointer'><a className='hover:text-inherit w-full h-full' href="#">صفحه اصلی</a></li>
              <li className='group relative   hover:bg-primary-color px-2 py-2 rounded-md cursor-pointer'><a href="#" className='hover:text-inherit w-full h-full'> فرانت اند</a>
                <i class=" fa-solid fa-circle-chevron-down"></i>
                <ul className='absolute scale-0 duration-200 group-hover:scale-100 py-4 flex flex-col gap-2'>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">mohammad</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">amir</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">ali</a></li>
                </ul>
              </li>
              <li className='group relative   hover:bg-primary-color px-2 py-2 rounded-md cursor-pointer'><a href="#" className='hover:text-inherit w-full h-full'> امنیت</a>
                <i class=" fa-solid fa-circle-chevron-down"></i>
                <ul className='absolute scale-0 duration-200 group-hover:scale-100 py-4 flex flex-col gap-2'>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">mohammad</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">amir</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">ali</a></li>
                </ul>
              </li>
              <li className='group relative   hover:bg-primary-color px-2 py-2 rounded-md cursor-pointer'><a href="#" className='hover:text-inherit w-full h-full'> مقالات</a>
                <i class=" fa-solid fa-circle-chevron-down"></i>
                <ul className='absolute scale-0 duration-200 group-hover:scale-100 py-4 flex flex-col gap-2'>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">mohammad</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">amir</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">ali</a></li>
                </ul>
              </li>
              <li className='group relative   hover:bg-primary-color px-2 py-2 rounded-md cursor-pointer'><a href="#" className='hover:text-inherit w-full h-full'> پایتون</a>
                <i class=" fa-solid fa-circle-chevron-down"></i>
                <ul className='absolute scale-0 duration-200 group-hover:scale-100 py-4 flex flex-col gap-2'>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">mohammad</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">amir</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">ali</a></li>
                </ul>
              </li>
              <li className=' hover:bg-primary-color px-2 py-2 rounded-md cursor-pointer'><a className='hover:text-inherit w-full h-full' href="#">مهارت های نرم</a></li>
            </ul>
          </div>
        </div>
        <div className='l flex gap-2'>
          <div className='flex justify-center items-center w-8 h-8 p-2 rounded-md text-white-color bg-primary-color'>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className='flex justify-center items-center p-2 w-8 h-8 p-2 rounded-md bg-slate-200'>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div className='border-2 border-primary-color h-8 p-2 flex justify-center items-center rounded-md text-primary-color cursor-pointer'>
            <a className='' href="#">محمدرضا گودرزی</a>
          </div>
        </div>
      </div>
    </div>
  )
}
