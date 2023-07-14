import React, { useContext } from 'react'
import AuthContext from '../../context/authContext'
import { Link } from 'react-router-dom';
export default function NavBar() {
  const authContext = useContext(AuthContext)
  return (
    <div>
      <div className='px-2 py-2 items-center flex justify-between text-sm font-bold '>
        <div className='r flex items-center gap-3'>
          <div className='w-20'><img src="/images/logo/Logo.png" alt="logo mohammad" /></div>
          <div>
            <ul className='flex gap-2 '>
              <li className=' hover:bg-primary-color px-2 py-2 rounded-md cursor-pointer'><a className='hover:text-inherit w-full h-full' href="#">صفحه اصلی</a></li>
              <li className='group relative   hover:bg-primary-color px-2 py-2 rounded-md cursor-pointer'><a href="#" className='hover:text-inherit w-full h-full'> فرانت اند</a>
                <i className=" fa-solid fa-circle-chevron-down"></i>
                <ul className='absolute scale-0 duration-200 group-hover:scale-100 py-4 flex flex-col gap-2 w-44 bg-white top-9 border-b-2 border-primary-color text-xs'>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">آموزش HTML</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">آموزش css</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">آموزش جاوا اسکریپت</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">آموزش flexBox</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">آموزش جامع ری اکت</a></li>
                </ul>
              </li>
              <li className='group relative   hover:bg-primary-color px-2 py-2 rounded-md cursor-pointer'><a href="#" className='hover:text-inherit w-full h-full me-1'> امنیت</a>
                <i className=" fa-solid fa-circle-chevron-down"></i>
                <ul className='absolute scale-0 duration-200 group-hover:scale-100 py-4 flex flex-col gap-2 w-44 bg-white top-9 border-b-2 border-primary-color text-xs '>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">آموزش کالی لینوکس</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">آموزش پایتون سیاه</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">آموزش جاوا اسکریپت سیاه</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">آموزش شبکه</a></li>
                </ul>
              </li>
              <li className='group relative   hover:bg-primary-color px-2 py-2 rounded-md cursor-pointer'><a href="#" className='hover:text-inherit w-full h-full me-1'> مقالات</a>
                <i className=" fa-solid fa-circle-chevron-down"></i>
                <ul className='absolute scale-0 duration-200 group-hover:scale-100 py-4 flex flex-col gap-2 w-44 bg-white top-9 border-b-2 border-primary-color text-xs'>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">توسعه وب</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">جاوا اسکریپت</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">فرانت اند</a></li>
                </ul>
              </li>
              <li className='group relative   hover:bg-primary-color px-2 py-2 rounded-md cursor-pointer'><a href="#" className='hover:text-inherit w-full h-full me-1'> پایتون</a>
                <i className=" fa-solid fa-circle-chevron-down"></i>
                <ul className='absolute scale-0 duration-200 group-hover:scale-100 py-4 flex flex-col gap-2 w-44 bg-white top-9 border-b-2 border-primary-color text-xs'>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">دوره متخصص پایتون</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">دوره هوش مصنوعی با پایتون</a></li>
                  <li className='hover:bg-primary-color px-1 py-1 rounded-md '><a className='w-full h-full' href="#">دوره متخصص جنگو</a></li>
                </ul>
              </li>
              <li className=' hover:bg-primary-color px-2 py-2 rounded-md cursor-pointer'><a className='hover:text-inherit w-full h-full' href="#">مهارت های نرم</a></li>
            </ul>
          </div>
        </div>
        <div className='l flex gap-2'>
          <div className='flex justify-center items-center w-8 h-8 p-2 rounded-md text-white-color bg-primary-color cursor-pointer'>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className='flex justify-center cursor-pointer items-center p-2 w-8 h-8 p-2 rounded-md bg-slate-200'>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className='border-2 border-primary-color h-8 p-2 flex justify-center items-center rounded-md text-primary-color cursor-pointer'>
            {
              authContext.isLogIn ? (
                <Link className='' to="">{authContext.userInfos.name}</Link>
                ) : (
                  <Link className='' to="/login">ورود / ثبت نام</Link>
                  
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
