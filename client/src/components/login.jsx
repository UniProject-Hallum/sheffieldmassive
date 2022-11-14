import React from 'react'

import handyman from '../../assets/2.png'

const login = () => {
  return (
    <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
            <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src={handyman} alt="handyman" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                    <h2 className='text-4xl font-bold text-center mb-8'>HandyMan</h2>
                    <div>
                        <i class="fas fa-envelope"></i>
                        <input className='p-2 mr-2' type="text" placeholder='Username'/><br/>
                        <i class="fas fa-password"></i>
                        <input className='p-2' type="password" placeholder='Password' />
                    </div>
                    <button className='w-full py-2 my-4 bg-blue-600 hover:bg-yellow-500'>Sign In</button>
                    <p className='text-center text-blue-600 hover:text-yellow-500'>Forget Password</p>
                </form>
                <div className='text-center'>Don't Have an account? <label className='text-blue-600 hover:text-yellow-500' for="flip">Signup now</label></div>
                <p className='text-center'></p>
            </div>
        </div>
    </div>
  )
}

export default login