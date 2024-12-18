import React from 'react'

function Hero() {
  return (
    <div className='relative bg-gradient-to-r from to-blue-500 to bg-indigo-600 dark:from-gray-800 dark:to-gray-900 py-16 px-4 text-center flex flex-col gap-3'>
      <div className='max-w-3xl mx-auto '>
        <h1 className='text-white text-4xl font-bold mb-4'>Find the Best Courses for you</h1>
        <p className='text-white'>Discover,Learn new skills</p>
      </div>

      <div>
        <input type="text" />
      </div>
    </div>
  )
}

export default Hero