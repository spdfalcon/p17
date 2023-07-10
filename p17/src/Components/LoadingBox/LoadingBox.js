import React from 'react'

export default function LoadingBox() {
    return (
        <div className=''>
            <div className='shadow-lg rounded-lg overflow-hidden  hover:-translate-y-3 duration-300 animate-pulse'>
                <div className='up w-96 h-48 bg-slate-200 rounded-lg'>
                    
                </div>
                <div className='mid p-2 flex flex-col gap-3 border-b-2'>
                    <div className=''>
                        <h4 className='py-3 bg-slate-200 rounded-md'></h4>
                    </div>
                    <div className='flex justify-between rounded-md bg-slate-200 '>
                        <div className='r flex items-center gap-2 py-3'>
                            <i className="fa-solid fa-chalkboard-user text-slate-200"></i>
                            <h4></h4>
                        </div>
                        <div className='l'>
                        </div>
                    </div>
                    <div className='flex justify-between rounded-md bg-slate-200 py-3  '>
                        <div className='flex gap-2 '>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className='down rounded-md  py-2 flex justify-center bg-slate-200'>

                </div>
            </div>
        </div>
    )
}
