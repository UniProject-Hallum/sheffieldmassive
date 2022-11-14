import React from 'react'
import handyman from '../../assets/2.png'


const banner = () => {
    return (

<div className='bg-[#ceeaf2] p-5 sm:mt-7'> 
<h2 className='flex flex-wrap items-center justify-center md:text-6xl md:font-medium'> 

Welcome Back! 

<img className='w-2/12 rounded-2x1 ml-20' src={handyman} alt="logo" /></h2>

</div>
  )
}

export default banner