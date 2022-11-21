import React from 'react'
import Popup from 'reactjs-popup'

const jobrequests = () => {
    return (
        <div className="mx-20 my-20 py-10 rounded-lg ">
        <div className='font-bold text-3xl ml-24'>Job Requests</div>
        
        <div className='bg-[#fff] rounded-2xl wrap-text shadow-xl p-16 z-10 mt-4 mx-40'>
            requested but unaccepted jobs here, if too much text use the view more button to see full         
        
        <Popup trigger= { <button className='text-black py-1 bg-[#ceeaf2] px-10 ml-12 border rounded-xl hover:bg-[#fccc35] hover:scale-110'>View More</button>
            }
            on="hover"
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            contentStyle={{ padding: '20px', border: '' }}
            arrow={false}
            position="right"
            > 
            <section className="w-full max-w-sm py-10 px-10 rounded bg-[#ceeaf2] m-auto shadow flex">
                
                More text in here 
            </section>

        </Popup>
        </div>
        </div>



    )       
}

export default jobrequests