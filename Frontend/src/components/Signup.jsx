import React from 'react'

const Signup = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-100'>
    <div className='signup w-[39vw] h-[80vh] flex flex-col items-center shadow-lg shadow-indigo-500 rounded-lg py-10'>
      <h1 className='text-3xl font-poppins mb-8 tracking-wider'>Sign Up</h1>
      <form>
        <label for="fname">First name</label><br></br>
        <input placeholder='Enter your first name' className='px-6 w-[25vw] h-[6vh] shadow shadow-lg shadow-zinc-600 rounded-[4vw] mt-2 mb-3 outline-none'  type="text" id="fname" name="fname" /><br></br>
        <label for="lname">Last name</label><br></br>
        <input placeholder='Enter your last name' className='px-6 w-[25vw] h-[6vh] shadow shadow-lg shadow-zinc-600 rounded-[4vw] mt-2 mb-3 outline-none'  type="text" id="lname" name="lname" /><br></br>
        <label for="email">Email</label><br></br>
        <input placeholder='Enter your email' className='px-6 w-[25vw] h-[6vh] shadow shadow-lg shadow-zinc-600 rounded-[4vw] mt-2 mb-3 outline-none'  type="text" id="email" name="email" /><br></br>
        <label for="password">Password</label><br></br>
        <input placeholder='Enter your password' className='px-6 w-[25vw] h-[6vh] shadow shadow-lg shadow-zinc-600 rounded-[4vw] mt-2 mb-3 outline-none'  type="password" id="password" name="password" /><br></br>
        <button className='w-[25vw] h-[6vh] shadow shadow-lg rounded-[4vw] mt-2 mb-3 bg-indigo-500 text-white'>Signup</button>
      </form>
    </div>
    </div>
  )
}

export default Signup