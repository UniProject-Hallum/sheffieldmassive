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


          <h6 className="mb-3 mt-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              Description
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Acceptedjobs;
