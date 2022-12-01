import {React,useState} from "react";
import { useUser } from "../../auth/useUser";

const Acceptedjobs = () => {
  let userData = useUser();
  const [user, setUser]= useState(userData)
  
  const acceptedJobs = user.userInfo.acceptedJobs

  return (
    <div>
      <div className=" max-w-md m-10 max p-6 bg-white border border-gray-200 rounded-lg shadow-lg ">
        <div className="">
          <h3 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  ">
            Accepted Jobs
          </h3>
          <button
             
              className="flex justify-end  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>


          {/* <h6 className="mb-3 mt-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              Description
          </h6> */}
        </div>
      </div>
    </div> 
  );
};

export default Acceptedjobs;
