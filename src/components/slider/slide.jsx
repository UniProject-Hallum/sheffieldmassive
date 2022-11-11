import React from 'react'

import handyman from '../../assets/2.png'

const slide = () => {
  return (
    <section className='flex items-center justify-center mt-0'>
        <div className='flex rounded-2xl shadow-xl p-5 w-4/5'>
            <div className='w-3/5 md:px-7 text-left'>
                <h4 className='mr-5 font-sans-serif font-bold md:text-6xl md:font-medium  md:leading-snug'>Helping you find the right person for any job</h4>
                <div className='mr-5 md:mt-7 mt-5 mb-4 text-xs flex justify-between items-center'>
                    <p className='text-left md:mt-5 mr-5'>Join us today to access our wide range of professional handymen. Whether you're looking for a quick paint fix or a full-scale kitchen renovation, HandyMan4U will connect you with an experienced tradesman to complete the job with just a few clicks and messages. </p>
                    <a href="/register"><button className=' py-3 bg-[#ceeaf2] px-5 border rounded-xl  hover:bg-[#fccc35] hover:scale-110'>Register</button></a>
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