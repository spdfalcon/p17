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
import CommentTextArea from '../../Components/CommentTextArea/CommentTextArea'
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
          <div className='r col-span-8 gap-3 shadow-lg p-5' >
            <div>
              <div>
                <h1 className='border-b-2 font-bold py-2'>معرفی بهترین سایت آموزش جاوا اسکریپت [تجربه محور] + آموزش رایگان</h1>
              </div>
              <div className='text-xs mt-2 font-bold flex gap-4'>
                <div className='flex gap-1'>
                  <div>
                    <i className="fa-regular fa-folder"></i>
                  </div>
                  <div>
                    <h4 className=''>جاوا اسکریپت</h4>
                  </div>
                </div>
                <div className='flex gap-1'>
                  <div>
                    <i className="fa-regular fa-user"></i>
                  </div>
                  <div>
                    <h4 className=''>ارسال شده توسط قدیر</h4>
                  </div>
                </div>
                <div className='flex gap-1'>
                  <div>
                    <i className="fa-regular fa-clock"></i>
                  </div>
                  <div>
                    <h4 className=''>ارسال شده توسط قدیر</h4>
                  </div>
                </div>
                <div className='flex gap-1'>
                  <div>
                    <i className="fa-regular fa-eye"></i>
                  </div>
                  <div>
                    <h4 className=''>2,14k بازدید</h4>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img src="/images/blog/1.jpg" alt="" />
              </div>
              <div className='flex gap-5'>
                <div className='flex text-xs'>
                  <div className='text-orange-500'>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className='text-orange-500'>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className='text-orange-500'>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className='text-orange-500'>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className='text-orange-500'>
                    <i className="fa-regular fa-star"></i>
                  </div>
                </div>
                <div className='text-xs font-bold'>
                  <h4>4.2/5 - (5 امتیاز)</h4>
                </div>
              </div>

            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore delectus accusantium autem suscipit soluta similique molestias aperiam quia quisquam libero porro nulla quis itaque, quaerat at, facere veniam eveniet mollitia a maiores quo harum consequuntur iste? Accusantium eaque aliquam amet! Iure, alias nemo incidunt tenetur ab magnam ipsam voluptates nam vitae! Iste eius sit animi corrupti, perferendis sint ut mollitia quo consequatur architecto voluptatibus molestiae, possimus corporis delectus autem nisi minus exercitationem dicta veritatis repudiandae est blanditiis. Temporibus hic perferendis suscipit deleniti nobis! Fugiat quas quasi quam. Ratione iure ut maxime corporis fugiat aliquam nemo rem inventore! Distinctio, numquam nihil!</p>
            </div>
            <div>
              <div className='bg-gray-200 text-sm font-bold p-5 rounded-3xl flex flex-col gap-3 mt-5'>
                <div className=''><h2>آن چه در این مقاله خاهید خواند</h2></div>
                <div className='text-xs text-blue-500'><a href="#">معرفی بهترین سایت های آموزش جاوا اسکریپت</a></div>
                <div className='text-xs text-blue-500'><a href="#">یک راه آسان تر دوره های جاوا اسکریپت آکادمی سبزلرن</a></div>
                <div className='text-xs text-blue-500'><a href="#">ثبت نام دوره های جاوا اسکریپت سبزلرن</a></div>

              </div>
            </div>
            <div>
              <div><img src="/images/blog/2.jpg" alt="" /></div>
            </div>
            <div className='mt-5'>
              <div>
                <div className='text-green-800 font-bold '><h2>معرفی بهترین سایت های آموزش جاوا اسکریپت:</h2></div>
                <div className='mt-3'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo laborum nobis voluptatibus consectetur facere quasi ipsa blanditiis corrupti doloremque, quibusdam incidunt facilis sit eveniet aliquid vero pariatur laudantium vitae voluptate voluptates aliquam unde possimus ducimus in! Architecto necessitatibus corporis dolorem id numquam quibusdam iusto nemo ipsum nobis. Similique, ad!</p></div>
              </div>
            </div>
            <div className='flex justify-center'><img src="/images/blog/4.png" alt="" /></div>
            <div className='flex gap-2'>
              <div><h4>اشتراک گذاری:</h4></div>
              <div><i className="fa-brands fa-telegram"></i></div>
              <div><i className="fa-brands fa-twitter"></i></div>
              <div><i className="fa-brands fa-facebook"></i></div>
            </div>
            {/* start call to action */}
            <div className='shadow-lg p-3 bg-gray-200 mt-5'>
              <div className='flex justify-center gap-10 text-blue-500/60'>
                <div className='r rotate-180'>
                  <h4>قدیمی تر</h4>
                </div>
                <div className='l'>
                  <h4>جدیدتر</h4>
                </div>
              </div>
              <div className='flex text-xs font-bold justify-between mt-2'>
                <div>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
                <div className='w-60 text-center'>
                  <a href='#'>سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ تجربه برنامه نویسان</a>
                </div>
                <div className='w-60 text-center'>
                  <a href='#'>سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ تجربه برنامه نویسان</a>
                </div>
                <div>
                  <i className="fa-solid fa-arrow-left"></i>
                </div>
              </div>
            </div>
            {/* end call to action */}
              <div className='mt-5'>
              <CommentTextArea></CommentTextArea>
              </div>
          </div>
          {/* end about */}







          {/* start sidbar */}
          <div className='l col-span-4 relative '>
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


              <div className='shadow-lg p-5 text-xs flex flex-col gap-4 relative overflow-hidden'>
                <span className='w-10 h-10 absolute bg-primary-color rounded-lg top-2 -right-6 rotate-12'></span>
                <div className='font-bold'><h2>دسترسی سریع</h2></div>
                <div className='flex gap-1 border-b-2 py-1'>
                  <div><i className="fa-solid fa-chevron-left"></i></div>
                  <div><a href="#">صفحه اصلی</a></div>
                </div>
                <div className='flex gap-1 border-b-2 py-1'>
                  <div><i className="fa-solid fa-chevron-left"></i></div>
                  <div><a href="#">فرانت اند</a></div>
                </div>
                <div className='flex gap-1 border-b-2 py-1'>
                  <div><i className="fa-solid fa-chevron-left"></i></div>
                  <div><a href="#">امنیت</a></div>
                </div>
                <div className='flex gap-1 border-b-2 py-1'>
                  <div><i className="fa-solid fa-chevron-left"></i></div>
                  <div><a href="#">پایتون</a></div>
                </div>
                <div className='flex gap-1 border-b-2 py-1'>
                  <div><i className="fa-solid fa-chevron-left"></i></div>
                  <div><a href="#">مهارت های نرم</a></div>
                </div>
              </div>
              <div className='shadow-lg p-5 text-xs flex flex-col gap-4 relative overflow-hidden'>
                <span className='w-10 h-10 absolute bg-primary-color rounded-lg top-2 -right-6 rotate-12'></span>
                <div className='font-bold'><h2>دسترسی سریع</h2></div>
                <div className='flex gap-1 border-b-2 py-1'>
                  <div><a href="#">نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون</a></div>
                </div>
                <div className='flex gap-1 border-b-2 py-1'>
                  <div><a href="#">نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون</a></div>
                </div>
                <div className='flex gap-1 border-b-2 py-1'>
                  <div><a href="#">نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون</a></div>
                </div>
                <div className='flex gap-1 border-b-2 py-1'>
                  <div><a href="#">نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون</a></div>
                </div>
                <div className='flex gap-1 border-b-2 py-1'>
                  <div><a href="#">نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون</a></div>
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
