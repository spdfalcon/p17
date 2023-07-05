import React from 'react'
import TopBar from '../../Components/TopBar/TopBar'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import CoursBox from '../../Components/CourseBox/CoursBox'
import Pagination from '../../Components/Pagination/Pagination'

export default function Category() {
  return (
    <div>
      <div>
        <TopBar></TopBar>
        <NavBar></NavBar>
        <div className='px-32 mt-10'>
          <div className='topBar flex justify-between p-5 shadow-md border-2 rounded-md'>
            <div className='r flex gap-2'>
              <div className='border p-4 w-7 h-7 flex justify-center items-center rounded-md bg-blue-500 text-white'>
                <i class="fa-regular fa-calendar-days"></i>
              </div>
              <div className='border p-4 w-7 h-7 flex justify-center items-center rounded-md'>
                <i class="fa-solid fa-bars-staggered"></i>
              </div>
              <div className='text-xs font-bold'>
                <select className='border px-3 py-2 rounded-md focus:outline-none'>
                  <option className='p-5' value="">مرتب سازی پیش فرض</option>
                  <option className='p-5' value="">مرتب سازی پیش فرض</option>
                  <option className='p-5' value="">مرتب سازی پیش فرض</option>
                  <option className='p-5' value="">مرتب سازی پیش فرض</option>
                  <option className='p-5' value="">مرتب سازی پیش فرض</option>
                  <option className='p-5' value="">مرتب سازی پیش فرض</option>
                </select>
              </div>
            </div>
            <div className='l border px-2 text-xs rounded-md flex justify-center items-center'>
              <input placeholder='جستجوی دوره...' className=' w-full h-full px-4 py-2 focus:outline-none' type="search" />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
        <div className='px-32 mt-10 grid grid-cols-3 gap-5'>
          <CoursBox></CoursBox>
          <CoursBox></CoursBox>
          <CoursBox></CoursBox>
        </div>
        <Pagination></Pagination>
        <Footer></Footer>
      </div>
    </div>
  )
}
