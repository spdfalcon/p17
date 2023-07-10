import React, { useState } from 'react'
import LoadingBox from '../LoadingBox/LoadingBox'

export default function ArticleBox({title , desc , cover}) {
    const [isImgShow , setIsImgShow] = useState(false)
    const onImgLoad = ()=>{
        setIsImgShow(true)
    }
    return (
        <div>
            <div className='shadow-lg p-5 text-xs flex flex-col gap-3 hover:-translate-y-3 duration-300'>
                {
                    !isImgShow && (
                        <LoadingBox></LoadingBox>
                    )
                }
                <div className='up'>
                    <img
                    onLoad={onImgLoad}
                    src={cover} alt="" />
                </div>
                <div className='mid'>
                    <h3 className='font-bold'>{title}</h3>
                    <h4>{desc}</h4>
                </div>
                <div className='btn'>
                    <button className='border-2 border-primary-color px-2 py-1 rounded-md text-primary-color font-bold hover:text-white-color hover:bg-primary-color duration-300'>بیشتر بخانید</button>
                </div>
            </div>
        </div>
    )
}
