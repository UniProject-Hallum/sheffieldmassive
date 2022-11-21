import React from 'react'
import Header from '../header/Header'
import Selectskills from './Selectskills.js'
import Listofskills from './ListofSkills.js' 
import handyman from '../../assets/2.png'
import JobReq from "./jobrequest"
import AcceptJobs from "./acceptedjobs"
import Footer from '../footer/footer'
import { useUser } from '../../auth/useUser'
import { useEffect } from 'react'

const Handylanding = () => {

  let user = useUser();

  console.log(user)

  return (
    
    <div>
        <Header />

        {/* Banner */}
        <div className='bg-[#ceeaf2] p-5 sm:mt-7'> 
            <h2 className='flex flex-wrap items-center justify-center md:text-6xl md:font-medium'> 

            Welcome Back! 
            {user.username}


            <img className='w-2/12 rounded-2x1 ml-20' src={handyman} alt="logo" /></h2>
         </div>
        
        
        <div className='flex '>

        {/* My skills */}

        <div className=" max p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
                
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My Skills</h5>
                
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>

                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add/Remove 
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
        </div>    
            
            


            
            </div>
            
            
            {/* <JobReq />
            <AcceptJobs />
            <Footer /> */}
    </div>
    
  )
}

export default Handylanding