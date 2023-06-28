import React from 'react'

export default function Landing() {
    return (
        <div className='h-96 bg-center bg-cover' style={{ backgroundImage: `url(/images/landing.jpg)` }}>
            <div className='w-full text-white-color flex flex-col items-center py-14'>
                <div>
                    <h2 className='text-3xl'>ما به هر قیمتی دوره آموزشی تولید نمیکنیم</h2>
                </div>
                <div className='mt-4'>
                    <h4 className=''>با آکادمی سبزلرن برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن</h4>
                </div>
                <div>
                    <div className='bg-white-color p-1 rounded-md flex mt-5'>
                        <input placeholder='جه چیزی دوست داری یاد بگیری...' className='w-80 text-sm text-black px-2 focus:outline-none' type="text" />
                        <i className="cursor-pointer bg-primary-color p-2 rounded-md fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className='flex justify-evenly w-full mt-10'>
                    <div className='flex flex-col items-center gap-1'>
                        <i className="text-6xl fa-solid fa-graduation-cap"></i>
                        <p>31,071</p>
                        <p>کاربر توی سبزلرن ثبت نام کردن</p>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <i className="text-6xl fa-solid fa-book"></i>
                        <p>40</p>
                        <p>دوره آموزشی داریم</p>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <i className="text-6xl fa-regular fa-clock"></i>
                        <p>31,320</p>
                        <p>دقیقه آموزش تولید کردیم</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
