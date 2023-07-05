import React from 'react'
import TopBar from '../../Components/TopBar/TopBar'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'

export default function CourseInfo() {
  return (
    <div>
      <div>
        <TopBar></TopBar>
        <NavBar></NavBar>

        <BreadCrumb links={[
          {id:1, title: 'خانه', to:'/'},
          {id:2, title:'آموزش برنامهع نویسی فرانت اند', to:'/category-info/frontend'},
          {id:3, title:'دوره متخصص جاوا اسکریپت', to:'course-info/js-expert'}
        ]}></BreadCrumb>

        <Footer></Footer>
      </div>
    </div>
  )
}
