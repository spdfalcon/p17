import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import AboutUsBox from '../AboutUsBox/AboutUsBox'

export default function AboutUs() {
  return (
    <div className='py-5'>
      <div className='px-32'>
      <SectionHeader
        title={'ما چه کمکی بهتون میکنیم؟'}
        desc={'از اونجایی که آکادمی سبزلرن یک آکادمی خصوصی هست'}
        bgw={'w-full'}
        >
      </SectionHeader>
      </div>
      <div className='grid grid-cols-2 gap-x-2 gap-y-6 w-full px-32 mt-5'>
        <AboutUsBox icon={'fa-regular fa-copyright'} title={'دوره های اختصاصی'} desc={'با پشتیبانی و کیفیت بالا ارائه میده'}></AboutUsBox>
        <AboutUsBox icon={'fa-solid fa-leaf'} title={'اجازه تدریس'} desc={'به هر مدرس رو نمیده چون کیفیت براش مهمه !'}></AboutUsBox>
        <AboutUsBox icon={'fa-solid fa-gem'} title={'دوره پولی و رایگان'} desc={'براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده'}></AboutUsBox>
        <AboutUsBox icon={'fa-solid fa-crown'} title={'اهمیت به کاربر'} desc={'اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست'}></AboutUsBox>
      </div>
    </div>
  )
}
