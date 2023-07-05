import React from 'react'
import FooterItem from '../FooterItem/FooterItem'

export default function Footer() {
    return (
        <>
        <div className='px-32 my-10 relative'>
            <div className='grid grid-cols-3 gap-5 bg-gray-200 p-5 rounded-lg'>
                <FooterItem title={'درباره ما'}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore fugiat, porro consectetur voluptatum et accusamus aperiam doloribus ipsa dicta facere id a eum nulla dignissimos iure voluptate deleniti obcaecati! Quisquam reiciendis, recusandae voluptate voluptates deserunt facere tenetur ducimus maiores odio nisi sit, illum architecto aperiam vel? Dolores odit, ipsum quo repellendus veritatis vel molestiae atque quaerat sed doloremque at corrupti eum porro facilis iste quidem alias, excepturi mollitia aut beatae natus eveniet? Accusamus iusto odio, quas eaque nobis illo voluptatum? Vitae ipsum ad corporis veritatis quae sit rerum natus mollitia nulla nostrum iure ex aspernatur similique, distinctio consequatur id quas.</p>
                </FooterItem>
                <FooterItem
                title={'آخرین مطالب'}
                >
                    <a className='font-bold' href="#">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, laborum eum sequi ab asperiores eaque.</a>
                    <a className='font-bold' href="#">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, laborum eum sequi ab asperiores eaque.</a>
                    <a className='font-bold' href="#">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, laborum eum sequi ab asperiores eaque.</a>
                    <a className='font-bold' href="#">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, laborum eum sequi ab asperiores eaque.</a>
                    <a className='font-bold' href="#">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, laborum eum sequi ab asperiores eaque.</a>
                </FooterItem>

                <FooterItem
                title={'دسترسی سریع'}
                >
                    <div className='grid grid-cols-2 gap-3 font-bold'>
                        <a href="#">آموزش HTML</a>
                        <a href="#">آموزش CSS</a>
                        <a href="#">آموزش جاوا اسکریپت</a>
                        <a href="#">آموزش بوت استرپ</a>
                        <a href="#">آموزش ری اکت</a>
                        <a href="#">آموزش پایتون</a>
                    </div>
                </FooterItem>
            </div>
            <div className='flex justify-center'>
            <span className='w-96 h-10 bg-primary-color inline-block -translate-y-7 -z-10 rounded-xl'></span>
            </div>
        </div>
            <div className='w-full py-5 bg-gray-200 flex justify-center font-bold text-xs'>
                <p >تمامی حقوق این سایت برای محمدرضا میباشد</p>
            </div>
        </>
    )
}
