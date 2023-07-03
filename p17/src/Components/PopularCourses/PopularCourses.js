import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'

export default function PopularCourses() {
    return (
        <div>
            <div className='py-5'>
                <SectionHeader
                    title={'محبوبترین دوره ها'}
                    desc={'دوره های محبوب بر اساس امتیاز کاربران'}
                    bgw={'w-40'}
                ></SectionHeader>
            </div>
        </div>
    )
}
