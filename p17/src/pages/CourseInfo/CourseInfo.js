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
          { id: 1, title: 'خانه', to: '/' },
          { id: 2, title: 'آموزش برنامهع نویسی فرانت اند', to: '/category-info/frontend' },
          { id: 3, title: 'دوره متخصص جاوا اسکریپت', to: 'course-info/js-expert' }
        ]}></BreadCrumb>

        <div className='mt-5 shadow-md py-5'>
          <div className='px-32 flex gap-5'>
            <div className='r flex flex-col gap-3 basis-1/2'>
              <div className='bg-primary-color/40 px-2 py-1 w-fit rounded-md'>
                <h3 className='text-xs'>آموزش برنامه نویسی فرانت اند</h3>
              </div>
              <div>
                <h1 className='text-lg font-bold'>آموزش 20 کتابخانه جاوا اسکریپت برای بازار کار</h1>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia impedit in illo! Placeat deleniti officia commodi. Vitae tempora exercitationem, blanditiis distinctio aliquid optio. Pariatur ea nemo harum quis nihil possimus vel modi nulla, cumque debitis facere natus sit molestiae temporibus?</p>
              </div>
              <div className='flex gap-5 text-gray-500 text-lg'>
                <div className='hover:text-blue-500 duration-300 cursor-pointer'>
                  <i className="fa-brands fa-telegram"></i>
                </div>
                <div className='duration-300 cursor-pointer hover:text-blue-500'>
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className='hover:text-blue-500 duration-300 cursor-pointer'>
                  <i className="fa-brands fa-twitter"></i>
                </div>
              </div>
            </div>
            <div className='l w-full h-full basis-1/2 rounded-xl overflow-hidden'>
              <video 
              className='w-full'
              poster='/images/courses/js_project.png'
              src="">
              controls
              </video>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  )
}
