import * as React from 'react';
import bathroom from '../../assets/bathroom.png'
import cleaning from '../../assets/cleaning.png'
import plumbing from '../../assets/plumbing.png'
import tiling from '../../assets/Tiling.png'
import Popup from 'reactjs-popup'

const skills = () => {
    return (
        
    <div className='sm:flex pt-5 pr-20 justify-center'> 
        <h2 className='font-bold pr-20'>My Skills</h2>
        <img className='w-1/12' src={bathroom} alt="bathroom" />
        <img className='w-1/12' src={cleaning} alt="bathroom" />
        <img className='w-1/12' src={plumbing} alt="bathroom" />
        <img className='w-1/12' src={tiling} alt="bathroom" />
        <Popup trigger= { <button className='text-white py-1 bg-[#606060] px-5 border rounded-xl hover:bg-[#fccc35] hover:scale-110'>Add / Remove</button>
        }> </Popup>
    </div>


        
    )        
}

export default skills
