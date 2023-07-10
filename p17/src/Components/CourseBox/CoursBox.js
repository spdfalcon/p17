import React, { useState } from 'react'
import LoadingBox from '../LoadingBox/LoadingBox'
export default function CoursBox() {
    const [isImgShow , setIsImgShow ] = useState(false)
    const onImageLoaded = ()=>{
        setIsImgShow(true)
    }
    return (
        
        <>
            <div className='shadow-lg rounded-lg overflow-hidden  hover:-translate-y-3 duration-300'>
            {
                !isImgShow && (
                    <LoadingBox></LoadingBox>
                )
            }
                <div className='up'>
                    <img 
                    src="/images/courses/fareelancer.png"
                    onLoad={onImageLoaded}
                    />
                </div>
                <div className='mid p-2 flex flex-col gap-3 border-b-2'>
                    <div className=''>
                        <h4>دوره پروژه محور متخصص جنگو</h4>
                    </div>
                    <div className='flex justify-between'>
                        <div className='r flex items-center gap-2'>
                            <i className="fa-solid fa-chalkboard-user"></i>
                            <h4>رضا دولتی</h4>
                        </div>
                        <div className='l'>
                            <i className="text-orange-400 fa-regular fa-star"></i>
                            <i className="text-orange-400 fa-solid fa-star"></i>
                            <i className="text-orange-400 fa-solid fa-star"></i>
                            <i className="text-orange-400 fa-solid fa-star"></i>
                            <i className="text-orange-400 fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <i className="fa-solid fa-users"></i>
                            <h4>5000</h4>
                        </div>
                        <div>
                            <h4>1,000,000</h4>
                        </div>
                    </div>
                </div>
                <div className='down flex justify-center text-primary-color'>
                    <button className='w-full h-full hover:text-white-color hover:bg-primary-color p-2 rounded-md duration-300'>مشاهده اطلاعات
                        <i className="ms-2 fa-solid fa-arrow-left"></i>
                    </button>
                </div>
            </div>
        </>
    )
}
