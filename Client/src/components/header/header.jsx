import React from 'react'

const header = () => {
  return (
    <header>
        <div className="sm:flex justify-between item-center text-center w-full sm:px-20 mt-4">
            <a href="/"><h1 className='font-sans font-bold text-5xl ml-3 pt-2'>HandyMan<span className="text-cyan-600">4u</span></h1></a>
            <div className='sm:flex pt-5'>
                <a href="/login"><button className='py-1 bg-[#fccc35] px-5 border rounded-xl  hover:bg-[#606060] hover:text-white hover:scale-110'>Login</button></a>
                <a href="/register"><button className='text-white py-1 bg-[#606060] px-5 border rounded-xl hover:bg-[#fccc35] hover:scale-110'>Register</button></a>
        
            </div>
        </div>
    </header>
  )
}

export default header