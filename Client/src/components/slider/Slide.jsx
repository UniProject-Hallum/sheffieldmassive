import React from "react";

import handyman from "../../assets/2.png";
import { useUser } from "../../auth/useUser";
const Slide = () => {
  const user = useUser(); 
  let isLoggedIn = false;
  if (user) {
    isLoggedIn = true;
  }
  
  return (
    <section className='h-90 container-mx-auto flex justify-center'>
        
        <div className='shadow-xl flex justify-center w-4/5 h-4/5'>
        
            <div className='w-4/5 md:3/5'>
              <div>
                <h4 className='w-3/5 h-9 p-2 pt-8 lg:p-10 float-left font-sans-serif font-bold text-xs lg:w-full  md:text-3xl lg:font-medium  md:leading-snug mb-10'>Helping you find the right person for any job</h4>
                <div className='w-2/5 float-left lg:hidden '>
                  <img className='' src={handyman} alt="" />
                </div>
              </div>
              { isLoggedIn ? <div className='p-2 lg:p-8 text-xs md:text-xl flex items-center '>
                    <p className=''> We are here to help you find the best deals .Whether you're looking for a quick paint fix or a full-scale kitchen renovation, HandyMan4U will connect you with an experienced tradesman to complete the job with just a few clicks and messages.
                 </p>
                </div>
                : 
               <div className='p-2 lg:p-8 text-xs md:text-xl flex items-center '>
                    <p className=''>Join us today to access our wide range of professional handymen. Whether you're looking for a quick paint fix or a full-scale kitchen renovation, HandyMan4U will connect you with an experienced tradesman to complete the job with just a few clicks and messages. </p>
                </div>}
                { isLoggedIn ? <div></div>:
                <div className = 'p-10 md:block flex justify-center'>
                <a href="/register"><button className='p-3 bg-[#ceeaf2] px-5 border rounded-xl   hover:bg-[#fccc35] hover:scale-110'>Register</button></a>
                </div>}
                
            </div>
            
            <div className='p-10 lg:block hidden '>
                <img className='' src={handyman} alt="" />
            </div>
      </div>      

    </section>
  );
};

export default Slide;
