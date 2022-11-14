import React from 'react'

const header = () => {
  return (
    <header>
        <div className="sm:flex justify-between item-center text-center w-full sm:px-20 mt-4">
            <a href="/"><h1 className='text-5xl ml-2 pt-2'>HandyMan<span>4u</span></h1></a>
            
            {localStorage.getItem('user-info')?
            <div className='sm:flex pt-5'>
              <p>test</p>
              <button className='py-1  bg-[#fccc35] px-5 border rounded  hover:bg-[#606060] hover:text-white hover:scale-110'>Logout</button>

            </div>
        :
            <div className='sm:flex pt-5'>
                <a href="/login"><button className='py-1  bg-[#fccc35] px-5 border rounded  hover:bg-[#606060] hover:text-white hover:scale-110'>Login</button></a>
                <a href="/register"><button className='text-white py-1 bg-[#606060] px-5 border rounded  hover:bg-[#fccc35] hover:scale-110'>Register</button></a>

            </div>
        }
        </div>
        
    </header>
  )
}

export default header