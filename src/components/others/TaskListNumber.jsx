import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex screen justify-between mt-10 gap-4 text-white'>
        <div className='bg-red-400 py-6 w-[45%] px-9 rounded-xl'>
            <h1 className='font-bold text-2xl'>2</h1>
            <h2 className='font-semibold text-lg'>New Task</h2>
        </div>
        <div className='bg-blue-400 py-6 w-[45%] px-9 rounded-xl'>
            <h1 className='font-bold text-2xl'>22</h1>
            <h2 className='font-semibold text-lg'>Completed Task</h2>
        </div>
        <div className='bg-green-400 py-6 w-[45%] px-9 rounded-xl'>
            <h1 className='font-bold text-2xl'>10</h1>
            <h2 className='font-semibold text-lg'>Previous Task</h2>
        </div>
        <div className='bg-yellow-400 py-6 w-[45%] px-9 rounded-xl'>
            <h1 className='font-bold text-2xl'>1</h1>
            <h2 className='font-semibold text-lg'>Accepted Task</h2>
        </div>
        
          
    </div>
  )
}

export default TaskListNumber