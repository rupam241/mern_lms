import React from 'react'

function Hero() {
  return (
    <div className=' bg-gradient-to-r from to-blue-500 to bg-indigo-600 dark:from-gray-800 dark:to-gray-900 py-16 px-4 text-center flex flex-col gap-3'>
      <div className='max-w-3xl mx-auto '>
        <h1 className='text-white text-4xl font-bold mb-4'>Find the Best Courses for you</h1>
        <p className='text-white'>Discover,Learn new skills</p>
      </div>

      <div className='flex items-center justify-center gap-2 '>
        <input type="text" placeholder='Search courses ' className='p-2 outline-none rounded-2xl shadow-xl' />
        <button className='bg-indigo-300 p-2 rounded-2xl shadow-xl ' >Search</button>
      </div>

      <div>
        <button className='bg-white px-3 py-1 rounded-xl text-green-500  font-semibold'>Explore courses</button>
      </div>
    </div>
  )
}

export default Hero