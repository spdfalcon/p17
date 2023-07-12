import React from 'react'

export default function BreadCrumb({ links }) {
    return (
        <div className='px-32'>
            <div className='flex text-xs  items-center gap-2 bg-gray-200 my-5 p-3 rounded-md '>
                <div className='bg-white-color w-7 h-7 flex justify-center items-center rounded-md text-gray-500'>
                    <i className="fa-solid fa-house"></i>
                </div>
                {
                    links.map(link => (
                        <div className='flex items-center gap-1'>
                            <a href={link.to}>{link.title}</a>
                            {
                                link.id !== links.length ? (
                                    <i className="fa-solid fa-chevron-left"></i>
                            ) : (
                                null
                            )
                            }
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
