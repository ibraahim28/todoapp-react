import React from 'react'

export default function SideBar() {
  
  return (
    <div className='bg-[#252525] px-4 py-8 w-1/5 h-screen text-white'>
      <div className='mb-5'>
        <h1 className='text-3xl font-light '>⚡ Fas<span className='font-semibold'>Todo</span></h1>
      </div>
      <div className='p-4'>
        <ul>
            <li className='hover:bg-[#f5c76b] hover:text-black transition-all duration-200 px-6 py-3 my-5 cursor-pointer text-white text-base rounded-md font-medium'>Add Task</li>
            <li className='hover:bg-[#f5c76b] hover:text-black transition-all duration-200 px-6 py-3 my-5 cursor-pointer text-white text-base rounded-md font-medium'>Pending</li>
            <li className='hover:bg-[#f5c76b] hover:text-black transition-all duration-200 px-6 py-3 my-5 cursor-pointer text-white text-base rounded-md font-medium'>Completed</li>
        </ul>
      </div>
    </div>
  )
}
