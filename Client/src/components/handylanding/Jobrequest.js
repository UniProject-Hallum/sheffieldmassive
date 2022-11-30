import { useUser } from "../../auth/useUser";
import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import useToken from "../../auth/useToken";
import { Data } from "@react-google-maps/api";

const Jobrequests = () => {

    var userData = useUser();
    
    const [user, setUser]= useState()
    const [token, setToken] = useToken();
    const [profiledata, setprofiledata] = useState([]);  
    const [load, setIsLoad] = useState(false);   
    const [requestedJobsList,SetRequestedJobsList] = useState([])
    const [requestedJobValue,SetRequestedJobValue] = useState()
    const [acceptedJobsList,SetAcceptedJobsList] = useState(userData.acceptedJobs)

    console.log(userData.id)

      const getUserID = async () => {
        // setIsLoading(true)
        await fetch(
          "http://localhost:3001/users/" + userData.id)
          .then((response)=> response.json())
          .then((data)=> {setprofiledata(data); 
                          SetRequestedJobsList(data.userInfo.requestedJobs)
          // setIsLoading(false);      
          });

          if(profiledata.length>0){
            setIsLoad(true)
            console.log(profiledata.userInfo.requestedJobs)
            
          }
      };
  
    useEffect(() => {   
      getUserID();
    }, []);


    const handleAccept = async(itemValue)=> {
        
        try {
            
      
            console.log("this is user info :  " + JSON.stringify(profiledata));
            const res= await axios.patch('http://localhost:3001/user/'+userData.id, {email: userData.email,
            userInfo:user ,id : userData.id
            });  
            var data = res.data;                     
            console.log(data)
            
        } catch (e) {
            console.error("There was an error!", e);
        }   
    }
    
    const handleDecline = async(itemValue)=> {
        
        try {
            
            
            console.log("this is user info :  " + JSON.stringify());
            const res= await axios.patch('http://localhost:3001/user/'+userData.id, {email: userData.email,
            userInfo:user ,id : userData.id
            });  
            var data = res.data;
            console.log(data)           
            
        } catch (e) {
            console.error("There was an error!", e);
        }   
    }
   
    var renderList

    if(requestedJobsList.length>0){

    
    
     renderList = requestedJobsList.map((item, i) => (
        <div
          className=" bg-gray-200 rounded-full mb-6 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          key={i}
        >
          <div className="flex  mb-4 items-center">
                <p className="w-full text-grey-darkest font-semibold"> Add another component to Tailwind Components</p>hhj
                <button onClick={handleDecline(item)} ><span className="block p-1 border-2  hover:border-red-500 rounded-full transition ease-in duration-300">
                          <a  className="block w-6 h-6  bg-red-500 rounded-full"></a>
                        </span></button>
                <button onClick={handleAccept(item)} ><span className="block p-1 border-2  hover:border-green-500 rounded-full transition ease-in duration-300">
                          <a  className="block w-6 h-6  bg-green-500 rounded-full"></a>
                        </span></button>
        </div>
        
        </div>
      ));}

      
    
  
  return (
    <div>
      <div className=" max-w-md m-10 max p-6 bg-white border border-gray-200 rounded-lg shadow-lg ">
        <div className="">
          <h3 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  ">
            Job Requests
          </h3>
          <button
              onClick={getUserID}
              className="flex justify-end  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
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
            {load === true && (
                  {renderList}
            )}


        </div>
      </div>

      {/* AcceptJobs box */}
    </div>
  );
};

export default Jobrequests;
