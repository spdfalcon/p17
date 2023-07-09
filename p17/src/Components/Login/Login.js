import React from 'react'
import TopBar from '../TopBar/TopBar'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

export default function Login() {
    return (
        <div>
            <TopBar></TopBar>
            <NavBar></NavBar>

            <div className='relative'>
                <div className='-z-50 absolute  w-full h-96 bg-primary-color [clip-path:polygon(0%_0%,100%_0%,100%_80%,0%_100%)]'>
                </div>
                <div className='-z-40 top-10 absolute w-full h-96 bg-primary-color/70 [clip-path:polygon(0%_0%,100%_0%,100%_80%,0%_100%)]'></div>
                <div className=' flex justify-center z-50'>
                    <div className='flex flex-col mt-10 bg-white-color rounded-md p-5 border-b-2 border-b-primary-color shadow-lg gap-3'>
                        <div className='font-bold text-xl text-center'><h1>ورود به حساب کاربری</h1></div>
                        <div className='text-center'><h4>خوشحالیم دوباره میبینیمت دوست عزیز</h4></div>
                        <div className='bg-gray-200 flex items-center justify-center text-xs py-2 rounded-md gap-2'>
                            <h4 className=''>کاربر جدید هستید؟</h4>
                            <a className='bg-gray-400 px-2 py-1 text-white-color rounded-md' href="#">ثبت نام</a>
                        </div>
                        <div>
                            <input placeholder='نام کاربری یا آدرس ایمیل' type="text"/>
                            
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}
