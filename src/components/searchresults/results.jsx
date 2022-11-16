import React from 'react'
import Header from '../header/header'
import Search from '../search/search'
import Footer from '../footer/footer'
import handyman from '../../assets/3.jpg'

const results = () => {
  return (
    <div>
        <Header />
        <Search />
        <div>
        <hr className='border-2 bg-gray-400' />
            <div className='flex item-center justify-center mt-2'>
                <div className='w-4/5'>
                <p className='rounded-lg w-1/5 bg-none shadow-lg pl-2 mr-3 py-2 mt-7'>Filters</p>
                    <div className='flex py-2 mt-5'>
                        <p className='rounded-lg w-1/5 bg-none shadow-lg pl-2 mr-3 py-2'>Electrician</p>
                        <p className='rounded-lg w-1/5 bg-none shadow-lg pl-2 mr-3 py-2'>Manchester</p>
                        <p className='rounded-lg w-1/5 bg-none shadow-lg pl-2 mr-3 py-2'>£30 ph</p>
                        <p className='rounded-lg w-1/5 bg-none shadow-lg pl-2 mr-3 py-2'>4 stars +</p>
                        </div>
                        </div>
                        </div>
            
            <div className='rounded-lg flex items-center justify-center mt-6'>
                <div className='flex rounded shadow-lg p-5 w-4/5'>
                    <div className='w-1/5'>
                        <img className='border-4 border-yellow-500 rounded-full h-52 w-52 ml-6' src={handyman} alt="" />
                    </div>
                    <div className='w-4/5 md:px-16'>
                    <h2 className='rounded-lg font-bold md:text-2xl text-1xl md:font-medium pl-2 md:leading-relaxed bg-[#ceeaf2] w-3/4 text-[#606060]'>Ahmed Elzenaria</h2>
                        <h4 className='font-bold md:text-1xl text-1xl md:font-medium  md:leading-relaxed text-[#606060] mt-2 mb-2'>Manchester, Greater Manchester, UK</h4>
                        <p>Ipsum pulvinar enim ad quam a eget per varius ante. Magna aptent suscipit nostra enim pulvinar semper. Est, sollicitudin metus montes faucibus eleifend. Faucibus ipsum sagittis libero ligula justo ullamcorper urna id faucibus fames odio consequat. <a href="/profile"><span className='text-[#000000] hover:text-[#fccc35]'>Read More ....</span></a></p>
                        
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-6'>
                <div className='flex rounded shadow-lg p-5 w-4/5'>
                    <div className='w-1/5'>
                        <img className='border-4 border-yellow-500 rounded-full h-52 w-52 ml-6' src={handyman} alt="" />
                    </div>
                    <div className='w-4/5 md:px-16'>
                    <h2 className='rounded-lg font-bold md:text-2xl text-1xl md:font-medium pl-2 md:leading-relaxed bg-[#ceeaf2] w-3/4 text-[#606060]'>Ahmed Elzenaria</h2>
                        <h4 className='font-bold md:text-1xl text-1xl md:font-medium  md:leading-relaxed text-[#606060] mt-2 mb-2'>Manchester, Greater Manchester, UK</h4>
                        <p>Ipsum pulvinar enim ad quam a eget per varius ante. Magna aptent suscipit nostra enim pulvinar semper. Est, sollicitudin metus montes faucibus eleifend. Faucibus ipsum sagittis libero ligula justo ullamcorper urna id faucibus fames odio consequat. <a href="/profile"><span className='text-[#000000] hover:text-[#fccc35]'>Read More ....</span></a></p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-6'>
                <div className=' flex rounded shadow-lg p-5 w-4/5'>
                    <div className='w-1/5'>
                        <img className='border-4 border-yellow-500 rounded-full h-52 w-52 ml-6' src={handyman} alt="" />
                    </div>
                    <div className='w-4/5 md:px-16'>
                    <h2 className='rounded-lg font-bold md:text-2xl text-1xl md:font-medium pl-2 md:leading-relaxed bg-[#ceeaf2] w-3/4 text-[#606060]'>Ahmed Elzenaria</h2>
                        <h4 className='font-bold md:text-1xl text-1xl md:font-medium  md:leading-relaxed text-[#606060] mt-2 mb-2'>Manchester, Greater Manchester, UK</h4>
                        <p>Ipsum pulvinar enim ad quam a eget per varius ante. Magna aptent suscipit nostra enim pulvinar semper. Est, sollicitudin metus montes faucibus eleifend. Faucibus ipsum sagittis libero ligula justo ullamcorper urna id faucibus fames odio consequat. <a href="/profile"><span className='text-[#000000] hover:text-[#fccc35]'>Read More ....</span></a></p>
                    </div>
                </div>
            </div>

        </div>
        <Footer />
        
    </div>
  )
}

export default results