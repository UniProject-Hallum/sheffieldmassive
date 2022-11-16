import React from 'react'


const search = () => {
  return (
    <div>
        <div className='sm:bg-[#ceeaf2] sm:block hidden bg-[#fff] p-20 sm:mt-7 relative'></div>
        <div className='bg-gray-50  flex items-center justify-center'>
            <div className='sm:bg-[#fff] bg-[#ceeaf2] rounded-2xl shadow-xl p-20 relative z-10 
            sm:-mt-20 mt-4 flex item-center justify-center w-4/5'>
                <form action="" className='w-full'>
                    <div className='sm:flex item-center justify-center mb-4'>
                        <select name="" id="" className='p-2 rounded-xl text-center w-full sm:mb-0 mb-3 bg-[#cccccc] border hover:border-[#606060]'>
                            <option value=""  >What service would you like?</option>
                            <option value="" >Electrical services</option>
                            <option value="">Plumbing</option>
                            <option value="">Kitchen renovation</option>
                            <option value="">Window cleaner</option>
                            <option value="">General fixes</option>
                            <option value="">Painting</option>
                        </select>
                        <select name="" id="" className='p-2 rounded-xl text-center w-full bg-[#cccccc] sm:ml-4 sm:mb-0 mb-3 border hover:border-[#606060]'>
                            <option selected={true} disabled="disabled">Location</option>
                            <option value="">South East England</option>
                            <option value="">South West England</option>
                            <option value="">East of England</option>
                            <option value="">London</option>
                            <option value="">Midlands</option>
                            <option value="">North East and Yorkshire</option>
                            <option value="">North West</option>
                        </select>
                        <select name="" id="" className='p-2 rounded-xl text-center w-full bg-[#cccccc] sm:ml-4 border hover:border-[#606060]'>
                            <option selected={true} disabled="disabled">Max price</option>
                            <option value="">£30-50 p/h</option>
                            <option value="">£50-75 p/h</option>
                            <option value="">£75-100 p/h</option>
                            <option value="">£100-150 p/h</option>
                            <option value="">£150-200 p/h</option>
                            <option value="">£200+</option>

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