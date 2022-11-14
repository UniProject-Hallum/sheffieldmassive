import React from 'react'

import handyman from '../../assets/2.png'

const slide = () => {
  return (
    <section className='flex items-center justify-center mt-0'>
        <div className='flex rounded-2xl shadow-lg shadow-gray-600 p-5 w-4/5'>
            <div className='w-3/5 md:px-16'>
                <h4 className='font-bold md:text-6xl text-1xl md:font-medium  md:leading-relaxed text-[#606060]'>Help you find the right person for any job</h4>
                <div className='md:mt-7 mt-5 mb-4 text-xs flex justify-between items-center'>
                    <p className='md:p-2 mr-4'>Ipsum pulvinar enim ad quam a eget per varius ante. Magna aptent suscipit nostra enim pulvinar semper. Est, sollicitudin metus montes faucibus eleifend. Faucibus ipsum sagittis libero ligula justo ullamcorper urna id faucibus fames odio consequat. </p>
                    <a href="/register"><button className=' py-2 bg-[#ceeaf2] px-5 border rounded-xl  hover:bg-[#fccc35] hover:scale-110'>Register</button></a>
                </div>
                
            </div>
            <div className='w-2/5'>
                <img className='rounded-2xl' src={handyman} alt="" />
            </div>
            

        </div>

    </section>
  )
}

export default slide