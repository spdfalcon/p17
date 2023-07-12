import React from 'react'
import TopBar from '../TopBar/TopBar'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter'
import Input from '../Form/Input'
import Button from '../Form/Button'
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
                    <div className='flex flex-col mt-10 bg-white-color rounded-md p-3 border-b-4 border-b-primary-color shadow-lg gap-5 py-16'>
                        <div className='font-bold text-xl text-center'><h1>ورود به حساب کاربری</h1></div>
                        <div className='text-center mb-16'><h4>خوشحالیم دوباره میبینیمت دوست عزیز</h4></div>
                        <div className='bg-gray-200 flex items-center justify-center text-xs py-2 rounded-md gap-2'>
                            <h4 className=''>کاربر جدید هستید؟</h4>
                            <Link className='bg-gray-500 px-2 py-1 text-white-color rounded-md' to="/register">ثبت نام</Link>
                        </div>
                        <div className='border px-2 py-2 text-xs flex justify-between items-center'>
                            <Input
                                className=' w-full outline-none'
                                type='text'
                                placeholder='نام کاربری یا آدرس ایمیل'
                                element='input'
                            ></Input>
                            <i className="text-gray-400 fa-regular fa-star"></i>
                        </div>
                        <div className='border px-2 py-2 text-xs flex justify-between items-center'>
                            <Input
                                className=' w-full outline-none'
                                type='password'
                                placeholder='کلمه ی عبور'
                                element='input'
                            ></Input>
                            <i className="text-gray-400 fa-regular fa-star"></i>
                        </div>
                        <div className='flex bg-primary-color items-center text-white p-2'>
                            <div className=''>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <div className='flex-1 text-center cursor-pointer'>
                                <Button
                                    onclick={''}
                                    className={''}
                                    disabled={true}
                                >ورود</Button>
                            </div>
                        </div>
                        <div className='flex justify-evenly'>
                            <div className='text-xs flex items-center gap-1 '>
                                <input type="checkbox" name="" id="check" />
                                <label className='' htmlFor="check">مرا به خاطر داشته باشید</label>
                            </div>
                            <div className='text-xs'>
                                <a href="#">رمز عبور را فراموش کرده اید؟</a>
                            </div>
                        </div>
                        <div className='text-xs flex flex-col gap-2'>
                            <h4 className='font-bold'>سلام کاربر محترم</h4>
                            <ul className='mr-7 list-disc leading-5'>
                                <li>لطفا از مرورگر های مطمعن و به روز مانند گوگل کروم و فایر فاکس استفاده کنید</li>
                                <li>ما هرگز اطلاعات محرمانه ی شما را از طریق ایمیل درخاست نمیکنیم</li>
                                <li>لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
            {/* <Counter></Counter> */}
        </div>
    )
}
