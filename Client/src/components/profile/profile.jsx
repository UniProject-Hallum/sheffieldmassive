import React, { Fragment, useState, useEffect } from "react";
import Header from "../header/Header";
import Search from "../search/search";
import Footer from "../footer/footer";
import handyman from "../../assets/3.jpg";
import Stars from "./Stars";

import { Link, useParams } from "react-router-dom";

const Profile = () => {
    const [profiledata, setprofiledata] = useState([]);
    const params = useParams();
    useEffect(() => {
        const getUserID = async () => {
        const profileData = await fetch("http://localhost:3001/users/" + params.userId);
        const getprofiledata = await profileData.json();
        setprofiledata([getprofiledata]);
        console.warn(getprofiledata)
        };

        getUserID();
    }, []);
    
     console.log(profiledata)
     console.log(profiledata["username"])



  return (
    <div>
        <Header />
        
      <div className="">
        <div className="flex items-center justify-center mt-7">
          <div className="flex p-7 w-4/5 shadow-xl">
            <div className="w-1/5">
              <img
                className="rounded-full h-52 w-52 ml-6"
                src={handyman}
                alt=""
              />
            </div>
            <div className="w-4/5 md:px-16">
            {profiledata.map((user)=>(<h2 className="font-semibold md:text-3xl text-1xl md:font-bold md:leading-relaxed w-3/4 text-black">
                {user.username}
              </h2>))}  
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mt-2 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <h4 className="md:text-1xl text-1xl md:font-medium  md:leading-relaxed text-[#606060] mt-2 mb-2">
               
              {profiledata.map((user)=>(<span>{user.userInfo.map((info)=>(<span>{info.city['value']} </span>))}</span>))}, UK
              </h4>
              {profiledata.map((user)=>(<p>{user.userInfo.map((info)=>(<p>{info.description} </p>))}</p>))}
              
                                
              <Stars />
            </div>
          </div>
        </div>
        <hr className="border-2 bg-gray-400" />
        <div className="flex item-center justify-center mt-2">
          <div className="w-4/5">
            <div className="flex py-3 mt-7">
              <p className="rounded-lg w-1/5 bg-none shadow-xl pl-2 mr-3 py-2">
              {profiledata.map((user)=>(<p>{user.userInfo.map((info)=>(<p>{info.skills} </p>))}</p>))}
              </p>
              <p className="rounded-lg w-1/5 bg-none shadow-xl pl-2 mr-3 py-2">
              {profiledata.map((user)=>(<p>{user.userInfo.map((info)=>(<p>{info.city['value']} </p>))}</p>))}
              </p>
              <p className="rounded-lg w-1/5 bg-none shadow-xl pl-2 mr-3 py-2">
                £30 ph
              </p>
              <p className="rounded-lg w-1/5 bg-none shadow-xl pl-2 py-2">
                4 stars +
              </p>
            </div>
            <h4 className="font-bold text-2xl md:font-medium  md:leading-relaxed mt-7 mb-7">
              Completed projects
            </h4>
            <div className="grid grid-rows-2 grid-cols-4 gap-4 ">
              <img
                className="rounded-lg row-span-2 col-span-2"
                src={handyman}
                alt=""
              ></img>
              <img className="rounded-lg" src={handyman} alt=""></img>
              <img className="rounded-lg" src={handyman} alt=""></img>
              <img className="rounded-lg" src={handyman} alt=""></img>
              <img className="rounded-lg" src={handyman} alt=""></img>
            </div>

            <div class="columns-2 py-7 mt-5">
              <div class="col-span-1 container-mx-auto">
                <h1 class="flex grow text-2xl font-semibold py-5">Location</h1>
              </div>

              <div class="col-span-1 container-mx-auto">
              </div>
            </div>
            <div class="container-mx-auto place-item-center">
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 flex-col">
      </div>
      <div className="mx-auto w-4/5">
        <Link to={"/contact"}>
          <button className="py-2 bg-[#ceeaf2] px-5 border rounded-xl  hover:bg-[#fccc35] hover:scale-110">
            Contact
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
