import React from 'react'
import TopBar from '../../Components/TopBar/TopBar'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import CourseDetailBox from '../../Components/CourseDetailBox/CourseDetailBox'
import CoursBox from '../../Components/CourseBox/CoursBox'
import Pagination from '../../Components/Pagination/Pagination'

export default function Courses() {
  return (
    <div>
      <div>
        <TopBar></TopBar>
        <NavBar></NavBar>
        <BreadCrumb links={[
          { id: 1, title: 'خانه', to: '/' },
          { id: 2, title: 'تمامی دوره ها', to: '/courses' },
        ]}></BreadCrumb>

        {/* course section */}

        <div className='mt-10 w-full px-32 text-xs grid grid-cols-3 gap-20 font-bold py-10'>
          <CoursBox></CoursBox>
          <CoursBox></CoursBox>
          <CoursBox></CoursBox>
          <CoursBox></CoursBox>
          <CoursBox></CoursBox>
          <CoursBox></CoursBox>
        </div>

        {/* course section */}

        <Pagination></Pagination>
        <Footer></Footer>
      </div>
    </div>
  )
}
