import React from 'react'

import handyman from '../../assets/2.png'

const login2 = () => {
  return (
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
        
        <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5'>
            <div className='md:block hidden w-1/2'>
                <a href="/"><img className='rounded-2xl' src={handyman} alt="" /></a>
            </div>
            <div className='md:w-1/2 px-16'>
                <h2 className='font-bold text-2xl text-[#606060]'>Register</h2>
                <p className='text-sm mt-4 text-[#606060]'>You aren't a memeber, easily register</p>

                <form action="" className='flex flex-col gap-4'>
                    <input className='p-2 mt-8 rounded-xl border' type="test" name='name' placeholder='Full Name' />
                    <input className='p-2 rounded-xl border' type="email" name='email' placeholder='Email' />
                    
                    <div className='relative'>
                        <input className='p-2 rounded-xl border w-full' type="password" name='password' placeholder='Password'/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-eye" className='absolute top-1/2 right-3 -translate-y-1/2' viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                        
                    </div>
                    <div className='flex'>
                        <div className="flex items-center mr-4">
                            <input  id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="inline-radio" className="ml-2 text-sm font-medium text-[#606060] dark:text-gray-300">Customer</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input  id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4  bg-gray-100 border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="inline-radio" className="ml-2 text-sm font-medium text-[#606060] dark:text-gray-300">HandyMan</label>
                        </div>
                    </div>
                    
                    <button className='bg-[#606060] rounded-xl text-white py-2 hover:bg-[#fccc35] hover:scale-110'>Register</button>
                
                </form>
                <div className='mt-10 grid grid-cols-3 items-center text-gray-500'>
                    <hr className='border-gray-500' />
                    <p className='text-center text-sm'>OR</p>
                    <hr className='border-gray-500' />
                </div>
                <div className='mt-7 mb-4 text-xs flex justify-between items-center'>
                    <p>If you have an account.. </p>
                    <a href="/login"><button className='text-white py-2 bg-[#606060] px-5 border rounded-xl  hover:bg-[#fccc35] hover:scale-110'>Login</button></a>
                </div>
                
            </div>
            
            

        </div>

    </section>
  )
}

export default login2