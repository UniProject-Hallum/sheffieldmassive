import {React,useState} from "react";
import { useUser } from "../../auth/useUser";

const Jobrequests = () => {

    let userData = useUser();
    const [user, setUser]= useState(userData)
    
    const request = user.userInfo.skills

    

    let renderList = request.map((item, i) => (
        <div
          className=" bg-gray-200 rounded-full mb-6 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          key={i}
        >
          <div class="flex  mb-4 items-center">
                <p class="w-full text-grey-darkest font-semibold"> Add another component to Tailwind Components</p>
                <button ><span class="block p-1 border-2  hover:border-red-500 rounded-full transition ease-in duration-300">
                          <a  class="block w-6 h-6  bg-red-500 rounded-full"></a>
                        </span></button>
                <button ><span class="block p-1 border-2  hover:border-green-500 rounded-full transition ease-in duration-300">
                          <a  class="block w-6 h-6  bg-green-500 rounded-full"></a>
                        </span></button>
        </div>
          
          <ul class="flex flex-row justify-center items-center space-x-2">
                      
                      <li class="">
                        
                      </li>
                      <li class="">
                        
                      </li>
             </ul>
        </div>
      ));


  return (
    <div>
      <div className=" max-w-md m-10 max p-6 bg-white border border-gray-200 rounded-lg shadow-lg ">
        <div className="">
          <h3 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  ">
            Job Requests
          </h3>

         

          {renderList}


        </div>
      </div>

      {/* AcceptJobs box */}
    </div>
  );
};

export default Jobrequests;
