import React from 'react'
import Popup from 'reactjs-popup'

const jobrequests = () => {
    return (
        <div className="mx-10 py-10">
        <div className='font-bold ml-24'>Job Requests</div>
        
        <div className='bg-[#fff] rounded-2xl shadow-xl p-16 z-10 mt-4 mx-20'>
            requested but unaccepted jobs here          
        
        <Popup trigger= { <button className='text-black py-1 bg-[#ceeaf2] px-10 border rounded-xl hover:bg-[#fccc35] hover:scale-110'>View More</button>
            }
            on="hover"
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            contentStyle={{ padding: '0px', border: '' }}
            arrow={false}
            position="right"
            > 
            <section className="w-full max-w-sm py-10 px-10 rounded bg-[#ceeaf2] m-auto shadow flex">
                
                More text in here 
            </section>

        </Popup>
        </div></div>



    )       
}

export default jobrequests