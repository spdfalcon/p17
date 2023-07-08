import React from 'react'

export default function CommentTextArea() {
  return (
    <div>
      <div className='text-xs flex flex-col gap-3 font-bold'>
        <div>
            <h4>دیدگاهتان را بنویسید</h4>
        </div>
        <div>
            <h4>با عنوان محمدرضا گودرزی وارد شده اید</h4>
        </div>
        <div>
            <label htmlFor="texarea">دیدگاه</label>
            <textarea className='border focus:outline-none w-full h-44 p-3 mt-3' id="texarea"></textarea>
        </div>
        <div>
            <button onClick={()=>console.log('کامنت ثبت شد')} className='bg-primary-color px-4 py-2 rounded-md text-white-color '>فرستادن دیدگاه</button>
        </div>
      </div>
    </div>
  )
}
