import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload

    // Check if both email and password are empty
    if (!email && !password) {
      alert("Please enter both email and password");
    } else if (!email) {
      alert("Please enter your email");
    } else if (!password) {
      alert("Please enter your password");
    } else {
      // Proceed with login or further logic
      alert("Form submitted successfully");
    }
  };

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-purple-100'>
      <div className='border border-purple-100 p-8 bg-white rounded-lg md:mt-20 shadow-lg max-w-sm w-full md:p-0 mb-2'>
        {/* Attach handleSubmit to form onSubmit */}
        <form className='flex flex-col md:p-8' onSubmit={handleSubmit}>
          <label className='text-lg font-semibold'>Email:</label>
          <input 
            type="email" placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className='border border-gray-300 p-2 rounded-md placeholder:text-sm mb-4 '
          />
          
          <label className='text-lg font-semibold'>Password:</label>
          <input 
            type="password" placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            className='border border-gray-300 p-2 rounded-md placeholder:text-sm mb-4'
          />
          <p className='md:text-md '>Forgot <span className='text-blue-700 text-sm md:text-lg '>Password ?</span></p>
         
       
          <div className='flex items-center mb-2 mt-2'>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className='text-gray-400 ml-2'>Remember for 30 days</label>
          </div>
          <button className='bg-purple-600 p-2 rounded-lg mt-4 text-xl text-white hover:bg-purple-700 transition duration-300' type='submit'>
            Login
          </button>
          <div className='flex justify-center mt-6 bg-gray-200 p-2 rounded-md space-x-4 border border-gray-200 hover:bg-slate-300'>
            <FaGoogle className='mt-1'/>
            <button className='text-md'>Sign in with Google</button>
          </div>
        </form>
        <h1 className='md:mt-0 mt-4 md:mb-8 text-center text-sm '>
          Don't have an account? <span className='font-bold text-purple-600'>Sign up for free</span>
        </h1>
      </div>
    </div>
  );
}

export default Login;
