import React from 'react'
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[50%] h-[90%] bg-zinc-900 shadow-xl shadow-zinc-900/50 rounded-xl flex flex-col items-center gap-4 py-8 text-white'>
        <h1 className='text-4xl font-poppins tracking-wider'>Login</h1>
        <p className='text-[1.2vw] tracking-wider font-inter font-thin'>Welcome back! Log in to explore the latest trends in fashion</p>
        <form 
        className='w-full flex flex-col items-center gap-4 mt-8'
        action="">
          <div className='w-full flex flex-col items-center gap-8'>
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
          
          <button className='w-[18vw] py-2 px-2 text-white rounded-full bg-indigo-500 mt-6'>Login</button>
          <div className='flex justify-center items-center gap-2 mt-4'>
            <p className='text-sm font-thin'>Don't have an account?</p>
            <a 
            onClick={()=>navigate('/signup')}
            className='text-indigo-400 cursor-pointer'>Sign Up</a>
          </div>
          <div className='w-[25vw] h-[5vh] flex justify-center items-center gap-2 mt-6'>
            <span className='border-b-2 border-white w-[7vw]'></span>or continue with<span className='border-b-2 border-white w-[7vw]'></span>
          </div>
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

export default Login;
