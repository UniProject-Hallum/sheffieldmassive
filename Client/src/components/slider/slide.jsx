import React from "react";

import handyman from "../../assets/2.png";

const slide = () => {
  return (
    <section className='h-90 container-mx-auto flex justify-center'>
        
        <div className='shadow-xl flex justify-center w-4/5 h-4/5'>
        
            <div className='w-3/5 '>
                <h4 className='p-10 font-sans-serif font-bold md:text-3xl lg:font-medium  md:leading-snug'>Helping you find the right person for any job</h4>
                <div className='p-8 text-xs md:text-xl flex items-center'>
                    <p className=''>Join us today to access our wide range of professional handymen. Whether you're looking for a quick paint fix or a full-scale kitchen renovation, HandyMan4U will connect you with an experienced tradesman to complete the job with just a few clicks and messages. </p>
                </div>
                
                <div className = 'p-10'>
                <a href="/register"><button className='p-3 bg-[#ceeaf2] px-5 border rounded-xl  hover:bg-[#fccc35] hover:scale-110'>Register</button></a>
                </div>
                
            </div>
            
            <div className='p-10'>
                <img className='' src={handyman} alt="" />
            </div>
            
        </div>
    </section>
  );
};

export default slide;
