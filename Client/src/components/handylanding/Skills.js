import { React, useState, useCallback, useEffect } from "react";
import { useUser } from "../../auth/useUser";
import Select from "react-select";
import { getSkills, getCities } from "../../staticData/Data";
import handyman from "../../assets/2.png";
import Map from "../Map/Map";
import axios from "axios";
import useToken from "../../auth/useToken";
import { useNavigate } from "react-router-dom";


function Skills() {
  let userData = useUser();
  const [user, setUser]= useState(userData)
  const [emailValue, setEmailValue] = useState(user.email);
  const [isShown, setIsShown] = useState(false);
  const [error, setError] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState(user.userInfo.skills);
  const optionList = getSkills();
  const [token, setToken] = useToken();
  const [descriptionValue, setDescriptionValue] = useState(user.userInfo.description);
  const [selectedCity, setSelectedCity] = useState(user.userInfo.city);
  const [costValue, setCostValue] = useState(user.userInfo.cost);
  const citiesList = getCities();
  let listOfSkills = user.userInfo.skills;
  let ListOfCities = [];


  let welcomeMessage = "Welcome Back ";

  console.log(user.userInfo.city.value[0])
  const lat = parseFloat(user.userInfo.city.value[0]);
  const lng = parseFloat(user.userInfo.city.value[1]);
 
  const location = { lat, lng };

  for (let i = 0; i < 30; i++) {
    ListOfCities.push({
      value: [citiesList[i]["lat"], citiesList[i]["lng"]],
      label: citiesList[i]["city"],
    });
  }

  let renderList = listOfSkills.map((item, i) => (
    <div
      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      key={i}
    >
      #{item.label}
    </div>
  ));

  function handleSelect(data) {
    setSelectedOptions(data);

  }

  

  const handleConfirm = async() => {
      try {   
          let data;
          console.log(user) 
          let userInfo = {
            description: descriptionValue,
            gender: user.userInfo.gender,
            skills: selectedOptions,
            city: selectedCity,
            cost: costValue,
            acceptedJobs: user.userInfo.acceptedJobs,
            requestedJobs: user.userInfo.requestedJobs,
          };    
          console.log("this is user info :  " + JSON.stringify(userInfo));
          const res= await axios.patch('http://localhost:3001/user/'+user.id, {
          email: emailValue, userInfo,id : user.id
          
            });       
          data = JSON.stringify(res.data);
          setToken(data);
          const encodedPayload = data.split(".")[1];
          setUser(JSON.parse(atob(encodedPayload)));
        setIsShown((current) => !current);
        
      } catch (e) {
        console.error("There was an error!", e);
       
      }
      
      }
  
  const handleClick = (event) => {

    setIsShown((current) => !current);
  };

  function handleSelectCity(data) {
    setSelectedCity(data);
  }

  return (
    <div className=" max-w-md m-10 max p-6 bg-white border border-gray-200 rounded-lg shadow-lg ">
      <div className="">
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  ">
          My Proflie
        </h3>


      </div>

      <div className="flex justify-end">

        
        {/* buttons */}
        <div>
          {isShown === false && (
            <button
              onClick={handleClick}
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
          )}
          {isShown === true && (
            <>
              <button
                onClick={handleClick}
                className="  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Decline
              </button>

              <button
                onClick={handleConfirm}
                className="  inline-flex items-center ml-4 px-3 py-2 text-sm font-medium text-center text-white bg-teal-500  rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Confirm
              </button>
            </>
          )}
        </div>
      </div>
      <div className="mt-3">
        {isShown === false && (
          <>
            <h6 className="mb-3 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              Skills
            </h6>
            {renderList}

            <h6 className="mb-3 mt-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              Description
            </h6>
            {user.userInfo["description"]}

            <h6 className="mb-3 mt-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              Email
            </h6>
            {user.email}
            <div className="flex mt-4">
              <div>
                <h6 className="mb-3 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                  city
                </h6>
                {user.userInfo.city.label}
              </div>

              <div className="ml-28">
                <h6 className="mb-3 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                  price/hr
                </h6>
                £{user.userInfo.cost}
              </div>
            </div>
          </>
        )}

        {isShown === true && (
          <>
            <h6 className="mb-3 mt-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              Skills
            </h6>
            <p>Please Select all you Skills</p>

            <Select
              required
              className="mt-2"
              options={optionList}
              placeholder="Select skills"
              value={selectedOptions}
              onChange={handleSelect}
              isMulti
            />
            <h6 className="mb-3 mt-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              Description
            </h6>
            <textarea
              required
              className="p-2 w-full h-32 rounded-xl border"
              value={descriptionValue}
              onChange={(e) => setDescriptionValue(e.target.value)}
              name="description"
            />

            <h6 className="mb-3 mt-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              Email
            </h6>
            <input
              required
              className="p-2 rounded-xl border"
              type="email"
              name="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />

            <h6 className="mb-3 mt-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              City
            </h6>
            <Select
              options={ListOfCities}
              placeholder="Select City"
              value={selectedCity}
              onChange={handleSelectCity}
              isSearchable={true}
            />            

            <h6 className="mb-3 mt-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              Price/hr
            </h6>
            <input
              required
              className="p-2 mt-2 rounded-xl border"
              type="number"
              name="name"
              value={costValue}
              placeholder="price/hr"
              onChange={(e) => setCostValue(e.target.value)}
            />
          </>
        )}
      </div>

      <div className="mt-2 h-48">
        <Map location={location} />
      </div>
    </div>
  );
}

export default Skills;
