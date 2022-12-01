import React from "react";
import { useEffect, useState, useReducer } from "react";



const Card = () => {
  const [results, setresults] = useState([]);
  useEffect(() => {
    const getUserID = async () => {
      const resultData = await fetch(
        "http://localhost:3001/users/" 
      );
      const getprofiledata = await resultData.json();      

      setresults(getprofiledata);
      
    };

    getUserID();
  }, []);
  // console.log(result.userInfo.cost);
  return (
    
    <div className="container-mx-auto p-7 space-x-5 flex item-center justify-center ">
      {results.slice(0,3).map((data)=>(
        <a href={'/profile/'+data._id}>
          <div class=" p-2 bg-white shadow-md border border-gray-200 rounded-lg max-w-xs mb-5 bg-white-500 h-80 md:h-auto w-24 sm:w-auto">
        <img
          src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
          class=""
        />
        <div class="flex justify-center -mt-8">
          <img
            src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="rounded-full max-w-md w-20 h-20 "
          ></img>
        </div>
        <div class="text-center px-3 pb-6 pt-2">:
          <h3 class="text-gray-900 font-bold text-1xl md:text-2xl tracking-tight mb-2 font-sans">
            {data.username}
          </h3>
          <div class="content-center flex item-center justify-center flex-row text-center place-items-center">
          <div className='flex text-yellow-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 md:w-6 md:h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 md:w-6 md:h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 md:w-6 md:h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 md:w-6 md:h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 md:w-6 md:h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>


                        </div> 
            
            
            
           
          </div>
         
        </div>
        <div class="md:flex justify-center pb-3 text-black text-xs">
          <div class="text-center md:mr-3 md:border-r pr-3 mb-4">
            <h2>Price</h2>
            {/* {data.userInfo.map((cost)=>(<span>{cost.cost} ph</span>))}  */}
            {data.userInfo.cost}
          </div>
          <div class="text-center">
            <h2>Reviews</h2>
            <span>156</span>
          </div>
        </div>
      </div></a>
      ))}
      

      

    </div>
  );
};

export default Card;
