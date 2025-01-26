import React from 'react'
import { useNavigate } from 'react-router'

const Signup = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[70%] h-[85%] bg-zinc-900 shadow-xl shadow-zinc-900/50 rounded-xl flex flex-col items-center gap-4 py-8 text-white'>
        <h1 className='text-4xl font-poppins tracking-wider'>Sign Up</h1>
        <p className='text-[1.2vw] tracking-wider font-inter font-thin'>Join us and explore the latest trends in fashion</p>
        <form 
        className='w-full flex flex-col items-center gap-4 mt-8'
        action="">
          <div className='w-full flex justify-center items-center gap-8'>
          <div className='flex flex-col gap-8'>
            <input 
            name='firstName'
            placeholder='Enter your first name'
            className='outline-none bg-[#333] w-[18vw] py-2 px-2 text-white rounded-full'
            type="text" />

            <input 
            name='lastName'
            placeholder='Enter your last name'
            className='outline-none bg-[#333] w-[18vw] py-2 px-2 text-white rounded-full'
            type="text" />
          </div>
          <div className='flex flex-col gap-8'>
            <input
            name='email'
            placeholder='Enter your email'
            className='outline-none bg-[#333] w-[18vw] py-2 px-2 text-white rounded-full'
            type="email" />

            <input 
            name='password'
            placeholder='Enter your password'
            className='outline-none bg-[#333] w-[18vw] py-2 px-2 text-white rounded-full'
            type="password" />
          </div>
          
          </div>
          <button className='w-1/2 py-2 px-2 text-white rounded-full bg-green-500  mt-10'>Create Account</button>
          <button 
          onClick={(e)=>{
            e.preventDefault()
            navigate('/login')
          }  
            }
          className='w-1/2 py-2 px-2 text-white rounded-full bg-indigo-500 mt-2'>Login Account</button>
          <div className='w-[25vw] h-[5vh] flex justify-center items-center gap-2'><span className='border-b-2 border-white w-[7vw]'></span>or continue with<span className='border-b-2 border-white w-[7vw]'></span></div>
          <div className='w-[25vw] h-[5vh] gap-4 flex justify-center'>
            <i className="ri-google-fill text-[1.3vw]"></i>
            <i className="ri-facebook-circle-fill text-[1.3vw]"></i>
            <i className="ri-apple-fill text-[1.3vw]"></i>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup