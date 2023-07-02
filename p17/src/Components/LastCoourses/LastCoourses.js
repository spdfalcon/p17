import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import CoursBox from '../CourseBox/CoursBox'

export default function LastCoourses() {


  

  return (
    <div className='mt-5'>
      <SectionHeader
        title={'جدید ترین دوره ها'}
        desc={'سکوی پرتاب شما به سمت موفقیت'}
        btnTitle={'تمام دوره ها'}
        bgw={'w-40'}
        >
      </SectionHeader>
      <div className='mt-10 w-full px-20 text-xs grid grid-cols-3 gap-32 font-bold py-10'>
        <CoursBox></CoursBox>
        <CoursBox></CoursBox>
        <CoursBox></CoursBox>
        <CoursBox></CoursBox>
        <CoursBox></CoursBox>
        <CoursBox></CoursBox>
      </div>
    </div>
  )
}
