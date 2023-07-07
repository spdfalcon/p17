import React from 'react'
import TopBar from '../../Components/TopBar/TopBar'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import CourseDetailBox from '../../Components/CourseDetailBox/CourseDetailBox'
import SectionHeader from '../../Components/SectionHeader/SectionHeader'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TbRosetteNumber1 } from 'react-icons/tb'
export default function ArticleInfo() {
  return (
    <div>
      <TopBar></TopBar>
      <NavBar></NavBar>


      <BreadCrumb links={[
        { id: 1, title: 'خانه', to: '/' },
        { id: 2, title: 'مقاله ها', to: '/category-info/frontend' },
        { id: 3, title: 'ویو vs ریاکت', to: 'course-info/js-expert' }
      ]}></BreadCrumb>


<div>
          <div className='px-32 grid grid-cols-12 gap-3 mt-5'>
            {/* start about */}
            <div className='r grid col-span-8 grid-cols-3 gap-3 shadow-lg'>
              
            </div>
            {/* end about */}







            {/* start sidbar */}
            <div className='l col-span-4 relative'>
              <div className='sticky top-0 p-5 flex flex-col gap-7'>
                
                <div className='shadow-lg p-5 text-xs flex flex-col gap-4 relative overflow-hidden'>
              <span className='w-10 h-10 absolute bg-primary-color rounded-lg top-2 -right-6 rotate-12'></span>
                  <div className='font-bold'><h2>دوره های مرتبط</h2></div>
                  <div className='flex gap-1 items-center'>
                    <div className='r w-14 rounded-md overflow-hidden'>
                      <img src="/images/courses/js_project.png" />
                    </div>
                    <div className='l'><h4>پروژه های تخصصی با جاوا اسکریپت</h4></div>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <div className='r w-14 rounded-md overflow-hidden'>
                      <img src="/images/courses/fareelancer.png" />
                    </div>
                    <div className='l'><h4>تعیین قیمت پروژه های فری لنسری</h4></div>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <div className='r w-14 rounded-md overflow-hidden'>
                      <img src="/images/courses/nodejs.png" />
                    </div>
                    <div className='l'><h4>دوره ی Api نویسی</h4></div>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <div className='r w-14 rounded-md overflow-hidden'>
                      <img src="/images/courses/jango.png" />
                    </div>
                    <div className='l'><h4>متخصص جنگو</h4></div>
                  </div>
                </div>

              </div>
            </div>
            {/* end sidbar */}
          </div>
        </div>


      <Footer></Footer>
    </div>
  )
}
