import React from 'react'
import Header from '../header/header'
import Search from '../search/search'
import Footer from '../footer/footer'
import handyman from '../../assets/3.jpg'

const profile = () => {
  return (
    <div>
        <Header />
        <Search />
        <div className=''>
            <div className='flex items-center justify-center mt-6'>
                <div className='flex  p-5 w-4/5'>
                    <div className='w-1/5'>
                        <img className='rounded-full h-52 w-52 ml-6' src={handyman} alt="" />
                    </div>
                    <div className='w-4/5 md:px-16'>
                    <h2 className='font-bold md:text-3xl text-1xl md:font-medium pl-2 md:leading-relaxed w-3/4 text-[#606060]'>Ahmed Elzenaria</h2>
                        <h4 className='font-bold md:text-1xl text-1xl md:font-medium  md:leading-relaxed text-[#606060] mt-2 mb-2'>Manchester, Greater Manchester, UK</h4>
                        <p>Ipsum pulvinar enim ad quam a eget per varius ante. Magna aptent suscipit nostra enim pulvinar semper. Est, sollicitudin metus montes faucibus eleifend. Faucibus ipsum sagittis libero ligula justo ullamcorper urna id faucibus fames odio consequat. <a href="/profile"><span className='text-[#000000] hover:text-[#fccc35]'>Read More ....</span></a></p>
                        <div className='flex text-yellow-400 mt-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>


                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-2 bg-gray-400' />
            <div className='flex item-center justify-center mt-2'>
                <div className='w-4/5'>
                    <h4 className='font-bold md:text-1xl text-1xl md:font-medium  md:leading-relaxed text-[#606060] mt-2 mb-2'>Description</h4>
                    <div className='flex'>
                        <p className='w-1/5 bg-gray-300 pl-2 mr-3'>Electrician</p>
                        <p className='w-1/5 bg-gray-300 pl-2 mr-3'>Manchester</p>
                        <p className='w-1/5 bg-gray-300 pl-2 mr-3'>£30 ph</p>
                        <p className='w-1/5 bg-gray-300 pl-2'>4 stars +</p>
                    </div>
                </div>
            </div>
            <div className='flex item-center justify-center mt-6'>
                <div className='w-4/5 flex'>
                    <div className='w-1/4 h-screen bg-gray-300 text-center pt-3'>
                        <h2 >Completed projects</h2>
                        <div className='p-4'>
                            <img className='w-6/7' src={handyman} alt="" />
                        </div>
                        <div className='p-4'>
                            <img className='w-6/7' src={handyman} alt="" />
                        </div>
                        <div className='p-4'>
                            <img className='w-6/7' src={handyman} alt="" />
                        </div>
                        
                    </div>
                    <div className='w-3/4 bg-[#ceeaf2] p-8'>
                        <h2 className='font-bold md:text-3xl text-1xl md:font-medium pl-2 md:leading-relaxed w-3/4 text-[#606060] mb-4'>About</h2>
                        <div className='mt-6 ml-2'>
                            <p>Ipsum pulvinar enim ad quam a eget per varius ante. Magna aptent suscipit nostra enim pulvinar semper. Est, sollicitudin metus montes faucibus eleifend. Faucibus ipsum sagittis libero ligula justo ullamcorper urna id faucibus fames odio consequat. </p>
                        </div>
                        <div className='mt-6 ml-2'>
                            <p>Ipsum pulvinar enim ad quam a eget per varius ante. Magna aptent suscipit nostra enim pulvinar semper. Est, sollicitudin metus montes faucibus eleifend. Faucibus ipsum sagittis libero ligula justo ullamcorper urna id faucibus fames odio consequat. </p>
                        </div>
                        <div className='mt-6 ml-2'>
                            <p>Ipsum pulvinar enim ad quam a eget per varius ante. Magna aptent suscipit nostra enim pulvinar semper. Est, sollicitudin metus montes faucibus eleifend. Faucibus ipsum sagittis libero ligula justo ullamcorper urna id faucibus fames odio consequat. </p>
                        </div>
                        <div className='mt-6 ml-2'>
                            <p>Ipsum pulvinar enim ad quam a eget per varius ante. Magna aptent suscipit nostra enim pulvinar semper. Est, sollicitudin metus montes faucibus eleifend. Faucibus ipsum sagittis libero ligula justo ullamcorper urna id faucibus fames odio consequat. </p>
                        </div>
                        <div>
                        <a href="/contact"><button className='text-white py-5 bg-[#606060] px-10 w-full mt-10 border rounded-xl  hover:bg-[#fccc35] hover:scale-13'>Contact</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default profile