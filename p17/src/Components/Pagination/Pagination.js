import React from 'react'

export default function Pagination() {
    return (
        <div className='px-32 flex justify-center mt-10'>
            <div className='flex justify-center items-center gap-2'>
                <div className='bg-gray-200 w-7 h-7 p-4 flex justify-center items-center rounded-md hover:bg-primary-color hover:text-white-color duration-300 cursor-pointer'>
                    <i class="fa-solid fa-arrow-right-long"></i>
                </div>
                <div className='bg-gray-200 w-7 h-7 p-4 flex justify-center items-center rounded-md hover:bg-primary-color hover:text-white-color duration-300 cursor-pointer bg-primary-color text-white-color'>
                    <button>1</button>
                </div>
                <div className='bg-gray-200 w-7 h-7 p-4 flex justify-center items-center rounded-md hover:bg-primary-color hover:text-white-color duration-300 cursor-pointer'>
                    <button>2</button>
                </div>
                <div className='bg-gray-200 w-7 h-7 p-4 flex justify-center items-center rounded-md hover:bg-primary-color hover:text-white-color duration-300 cursor-pointer'>
                    <button>3</button>
                </div>
                <div className='bg-gray-200 w-7 h-7 p-4 flex justify-center items-center rounded-md hover:bg-primary-color hover:text-white-color duration-300 cursor-pointer'>
                    <i class="fa-solid fa-arrow-left-long"></i>
                </div>
            </div>
        </div>
    )
}
