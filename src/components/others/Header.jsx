import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center text-2xl font-medium'>
        <h1>Hello Wahab</h1>
        <button className='bg-emerald-600 px-5 py-2 rounded text-white'>Logout</button>
    </div>
  )
}

export default Header