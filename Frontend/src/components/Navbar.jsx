import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-[10vh] bg-white-10/5 backdrop-blur-lg flex justify-between items-center px-4 flex'>
      <h2 className='text-[2vw] font-bold font-afacad'>Flow</h2>
      <button className="bg-pink-300 px-3 py-1 rounded-lg">👧 Women</button>
      <button className="bg-violet-300 px-3 py-1 rounded-lg">👦 Men</button>
      <form action="" className='w-[50vw] bg-gray-200 w-[35vw] px-2 py-1 rounded-lg shadow-md relative'>
        <input 
        className='w-full h-full bg-gray-200 outline-none border-none text-[1.2vw]' 
        placeholder='Search for products'
        type="text" />
        <i className="ri-search-2-line absolute top-1/2 left-[90%] translate-y-[-50%] text-gray-500 text-[1.5vw] cursor-pointer"></i>
      </form>
      <div className="w-[10vw] px-2 py-1 flex justify-between items-center">
      <i className="ri-heart-3-line text-[1.5vw] text-gray-500 cursor-pointer"></i>
      <button className='bg-green-300 text-zinc-900 px-3 py-1 rounded-lg'>Signup</button>
      </div>
    </nav>
  )
}

export default Navbar