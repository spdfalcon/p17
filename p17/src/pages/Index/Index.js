import React from 'react'
import Header from '../../Components/Header/Header'
import LastCoourses from '../../Components/LastCoourses/LastCoourses'
import AboutUs from '../../Components/AboutUs/AboutUs'
import PopularCourses from '../../Components/PopularCourses/PopularCourses'
import PresellCourses from '../../Components/PresellCourses/PresellCourses'
import LastArticles from '../../Components/LastArticles/LastArticles'
import Footer from '../../Components/Footer/Footer'
import LoadingBox from '../../Components/LoadingBox/LoadingBox'

export default function Index() {
  return (
    <div>

      <Header></Header>
      <LastCoourses></LastCoourses>
      <AboutUs></AboutUs>


      <PopularCourses></PopularCourses>


      <PresellCourses></PresellCourses>


      <LastArticles></LastArticles>
      <Footer></Footer>
    </div>
  )
}
