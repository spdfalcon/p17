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

              </video>
            </div>
          </div>
        </div>


        <div>
          <div className='px-32 grid grid-cols-12 gap-3 mt-5'>
            <div className='r grid col-span-8 grid-cols-3 gap-3 shadow-lg'>
              <CourseDetailBox
                icon={'fa-solid fa-graduation-cap'}
                title={'وضعیت دوره:'}
                text={'به اتمام رسیده'}
              ></CourseDetailBox>
              <CourseDetailBox
                icon={'fa-solid fa-clock'}
                title={'مدت زمان دوره:'}
                text={'19 ساعت'}
              ></CourseDetailBox>
              <CourseDetailBox
                icon={'fa-solid fa-calendar-days'}
                title={'آخرین به روزرسانی:'}
                text={'1401/02/03'}
              ></CourseDetailBox>
              <CourseDetailBox
                icon={'fa-solid fa-user'}
                title={'روش پشتیبانی:'}
                text={'آنلاین'}
              ></CourseDetailBox>
              <CourseDetailBox
                icon={'fa-solid fa-circle-exclamation'}
                title={'پیش نیاز:'}
                text={'HTML CSS'}
              ></CourseDetailBox>
              <CourseDetailBox
                icon={'fa-solid fa-play'}
                title={'نوع مشاهده:'}
                text={'ضبط شده / آنلاین'}
              ></CourseDetailBox>
              <div className='col-span-3 py-3 bg-gray-200 rounded-md shadow-lg px-3'>
                <div className='flex items-center gap-3 '>
                  <div>
                    <i class="fa-solid fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 className='text-xs font-bold'>درصد پیشرفت دوره: 80%</h4>
                  </div>
                </div>
                <div className='w-full h-2 bg-gray-300 rounded-md mt-2'>
                  <div className='w-4/5 h-full bg-primary-color rounded-md'></div>
                </div>
              </div>
              <div className='col-span-3 mt-5 p-5 shadow-lg flex flex-col gap-5'>
                <div className='px-1 mt-5'>
                  <SectionHeader
                    title={'آموزش 20 کتابخانه جاوا اسکریپت برای بازار کار'}
                    bgw={'w-96'}
                    desc={'20 کتابخانه'}
                  ></SectionHeader>
                </div>
                <div>
                  <img src="/images/info/1.gif" alt="" />
                </div>
                <div>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex obcaecati porro explicabo qui ipsa, sapiente pariatur molestias mollitia. Dolore nostrum hic eius, totam dolorum impedit ipsum maiores expedita enim a praesentium officia sint! Nam debitis autem hic eaque laboriosam eos velit, doloremque similique aspernatur sapiente, non molestias nemo rem facere.</p>
                </div>
                <div className='mt-5'>
                  <SectionHeader
                    title={'هدف از این دوره چیست؟(تنها راه ورود به بازار کار و کسب درآمد)'}
                    desc={'هدف دوره'}
                  ></SectionHeader>
                </div>
                <div className=''>
                  <img src="/images/info/2.jpg" alt="" />
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur eligendi ullam voluptates necessitatibus veritatis doloribus, mollitia, ex rem cumque nesciunt ad aut minus natus quia aperiam quis earum velit a at atque, exercitationem maxime incidunt? Omnis ad laudantium harum autem voluptatem? Nulla similique nobis provident quos quae rem, nemo quasi inventore laudantium molestias quam temporibus dolorem magni! Labore reiciendis omnis sapiente earum! Corrupti in error unde perspiciatis, voluptas consectetur minima nam iste? Eveniet architecto minima molestiae perferendis facere, laborum at atque cumque repudiandae voluptates harum obcaecati eaque aliquam officia quas. Laudantium cumque porro autem culpa quam maiores sequi aperiam!</p>
                </div>
                <div className='flex gap-3 text-xs font-bold'>
                  <div className='border-2 border-primary-color h-8 p-2 flex justify-center items-center rounded-md text-primary-color cursor-pointer hover:text-white-color hover:bg-primary-color duration-300'>
                    <a className='' href="#">دانلود همگانی ویدیوو ها</a>
                  </div>
                  <div className='border-2 border-primary-color h-8 p-2 flex justify-center items-center rounded-md text-primary-color cursor-pointer hover:text-white-color hover:bg-primary-color duration-300'>
                    <a className='' href="#">دانلود همگانی پیوست ها</a>
                  </div>
                </div>
                <div>
                  <div>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography><h4 className='text-blue-800 font-bold'>معرفی دوره</h4></Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div className='flex justify-between'>
                            <div className='r flex font-bold gap-3'>
                              <div className='text-gray-600 text-2xl'>
                                <TbRosetteNumber1></TbRosetteNumber1>
                              </div>
                              <div>
                                <i class="fa-brands fa-youtube"></i>
                              </div>
                              <div>
                                <h3>معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟</h3>
                              </div>
                            </div>
                            <div className='l'>
                              <h4>18:34</h4>
                            </div>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography><h4 className='text-blue-800 font-bold'>معرفی دوره</h4></Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div className='flex justify-between'>
                            <div className='r flex font-bold gap-3'>
                              <div className='text-gray-600 text-2xl'>
                                <TbRosetteNumber1></TbRosetteNumber1>
                              </div>
                              <div>
                                <i class="fa-brands fa-youtube"></i>
                              </div>
                              <div>
                                <h3>معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟</h3>
                              </div>
                            </div>
                            <div className='l'>
                              <h4>18:34</h4>
                            </div>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                      >
                        <Typography><h4 className='text-blue-800 font-bold'>معرفی دوره</h4></Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div className='flex justify-between'>
                            <div className='r flex font-bold gap-3'>
                              <div className='text-gray-600 text-2xl'>
                                <TbRosetteNumber1></TbRosetteNumber1>
                              </div>
                              <div>
                                <i class="fa-brands fa-youtube"></i>
                              </div>
                              <div>
                                <h3>معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟</h3>
                              </div>
                            </div>
                            <div className='l'>
                              <h4>18:34</h4>
                            </div>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </div>

            </div>








            <div className='l col-span-4 relative'>
              <div className='sticky top-0 p-5'>
                <div className='bg-primary-color '>
                  m
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}
