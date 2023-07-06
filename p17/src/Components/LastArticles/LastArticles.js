import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import ArticleBox from '../ArticleBox/ArticleBox'

export default function LastArticles() {
    return (
        <div>
            <div className='py-5 px-32'>
                <SectionHeader
                    title={'جدید ترین دوره ها'}
                    desc={'پیش به سوی ارتقای دانش'}
                    btnTitle={'تمامی مقاله ها'}
                    bgw={'w-40'}
                ></SectionHeader>
            </div>

        <div className='grid grid-cols-3 px-32 gap-4 py-5'>
            <ArticleBox title={'نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه در پایتون'} desc={'برای نصب کتابخانه ها در پایتون ابتدا باید npm رو نصب کنی ...'} cover={'/images/blog/3.jpg'}></ArticleBox>
            <ArticleBox title={'نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه در پایتون'} desc={'برای نصب کتابخانه ها در پایتون ابتدا باید npm رو نصب کنی ...'} cover={'/images/blog/3.jpg'}></ArticleBox>
            <ArticleBox title={'نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه در پایتون'} desc={'برای نصب کتابخانه ها در پایتون ابتدا باید npm رو نصب کنی ...'} cover={'/images/blog/3.jpg'}></ArticleBox>
        </div>
        </div>
    )
}
