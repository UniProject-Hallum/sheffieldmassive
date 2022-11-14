import React from 'react'

const search = () => {
  return (
    <div>
        <div className='sm:bg-[#ceeaf2] sm:block hidden bg-[#fff] p-20 sm:mt-10 relative'></div>
        <div className='bg-gray-50  flex items-center justify-center'>
            <div className='sm:bg-[#fff] bg-[#ceeaf2] rounded-2xl shadow-lg shadow-gray-600 p-10 relative z-10 
            sm:-mt-20 mt-4 flex item-center justify-center w-4/5'>
                <form action="" className='w-full'>
                    <div className='sm:flex item-center justify-center mb-4'>
                        <select name="" id="" className='rounded-2xl text-center w-full sm:mb-0 mb-3 bg-[#cccccc] border hover:border-[#606060]'>
                            <option selected="true" disabled="disabled">What Service Would You Like?</option>
                            <option value="">option 1</option>
                        </select>
                        <select name="" id="" className='rounded-2xl text-center w-full bg-[#cccccc] sm:ml-4 sm:mb-0 mb-3 border hover:border-[#606060]'>
                            <option selected="true" disabled="disabled">Location</option>
                            <option value="">option 1</option>
                        </select>
                        <select name="" id="" className='rounded-2xl text-center w-full bg-[#cccccc] sm:ml-4 border hover:border-[#606060]'>
                            <option selected="true" disabled="disabled">Max Price</option>
                            <option value="">option 1</option>
                        </select>
                    </div>
                    <a href="/search"><button className='bg-[#fccc35] rounded-xl w-full py-2 hover:bg-[#ceeaf2] hover:scale-103'>Search</button></a>
                
                </form>
            </div>
        </div>
        <div className='h-4 relative mb-0'></div>
    </div>
  )
}

export default search