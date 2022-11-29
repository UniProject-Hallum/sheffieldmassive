import {React,useState} from "react";
import { useUser } from "../../auth/useUser";
import Select from "react-select";
import axios from "axios";
import useToken from "../../auth/useToken";

const Jobrequests = () => {

    var userData = useUser();
    const [user, setUser]= useState(userData.userInfo)
    const [token, setToken] = useToken();
    const [requestedJobsList,SetRequestedJobsList] = useState(user.requestedJobs)
    const [requestedJobValue,SetRequestedJobValue] = useState(user.requestedJobs)
    const [acceptedJobsList,SetAcceptedJobsList] = useState(user.acceptedJobs)

    

    const handleAccept = async(itemValue)=> {
        
        try {
            SetRequestedJobValue(itemValue)
            var newacceptedJobsList = acceptedJobsList.push(requestedJobValue)
            var newrequestedJobsList = requestedJobsList.filter(e => e !== requestedJobValue)
            setUser((prev)=>({...prev, acceptedJobs: newacceptedJobsList, requestedJobs: newrequestedJobsList }))
            
            console.log("this is user info :  " + JSON.stringify(user));
            const res= await axios.patch('http://localhost:3001/user/'+userData.id, {email: userData.email,
            userInfo:user ,id : userData.id
            });  
            var data = res.data;
            setToken(data)           
            
        } catch (e) {
            console.error("There was an error!", e);
        }   
    }
    
    const handleDecline = async(itemValue)=> {
        
        try {
            
            var newrequestedJobsList = requestedJobsList.filter(e => e !== itemValue)
            setUser((prev)=>({...prev,requestedJobs: newrequestedJobsList }))
            
            console.log("this is user info :  " + JSON.stringify(user));
            const res= await axios.patch('http://localhost:3001/user/'+userData.id, {email: userData.email,
            userInfo:user ,id : userData.id
            });  
            var data = res.data;
            setToken(data)           
            
        } catch (e) {
            console.error("There was an error!", e);
        }   
    }

    var renderList = requestedJobsList.map((item, i) => (
        <div
          className=" bg-gray-200 rounded-full mb-6 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          key={i}
        >
          <div className="flex  mb-4 items-center">
                <p className="w-full text-grey-darkest font-semibold"> Add another component to Tailwind Components</p>
                <button onClick={handleDecline(item)} ><span className="block p-1 border-2  hover:border-red-500 rounded-full transition ease-in duration-300">
                          <a  className="block w-6 h-6  bg-red-500 rounded-full"></a>
                        </span></button>
                <button onClick={handleAccept(item)} ><span className="block p-1 border-2  hover:border-green-500 rounded-full transition ease-in duration-300">
                          <a  className="block w-6 h-6  bg-green-500 rounded-full"></a>
                        </span></button>
        </div>
        
        </div>
      ));


  return (
    <div>
      <div className=" max-w-md m-10 max p-6 bg-white border border-gray-200 rounded-lg shadow-lg ">
        <div className="">
          <h3 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  ">
            Job Requests
          </h3>

        


        </div>
      </div>

      {/* AcceptJobs box */}
    </div>
  );
};

export default Jobrequests;
