import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className='w-full h-screen grid place-items-center  text-[#606060]'>
        <div className='bg-white rounded-md shadow-md flex flex-row'>
            <div className='h-96 w-96 bg-[#ceeaf2] p-8 md:hover:scale-y-110 rounded-md transition md:block hidden' id='contact_info'>
                <div className='flex justify-between'>
                    <h2 className='text-xl'>Contact Infornation</h2>
                </div>
                
                <div className='mt-6 flex flex-row'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>

                    </div>
                    <div>
                        <h2 className='text-xs'>Name :</h2>
                        <p className='text-xs'>Ahmed Elzenaria</p>
                    </div>

                </div>

                <div className='mt-6 flex flex-row'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mr-2">
                        <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                        </svg>


                    </div>
                    <div>
                        <h2 className='text-xs'>Email :</h2>
                        <p className='text-xs'>any@gmail.com</p>
                    </div>

                </div>


            </div>
            <div className='h-96 w-96 px-6 py-8' id='contact_us'>
                <div className='flex justify-between'>
                    <h2 className='text-xl'>Get In Touch</h2>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter your Name' name="name"
                        className='w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm' /><br/>
                    <input type="text" placeholder='Enter your Email' name="email"
                        className='w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm' /><br/>
                    <input type="text" placeholder='Subject' name="subject"
                        className='w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm' /><br/>
                    <textarea type="text" name="body" placeholder='Enter Your Message Here' 
                        className='w-full text-xs px-3 h-28 my-2 outline-none rounded-md border focus:shadow-sm resize-none'></textarea><br/>
                    <button type='submit'   className='bg-[#606060] rounded-md text-xs text-white px-4 py-2 cursor-pointer hover:bg-[#fccc35] hover:scale-110'>{status}</button>
                </form>
            </div>

        </div>

    </div>
  )
}

export default Contact