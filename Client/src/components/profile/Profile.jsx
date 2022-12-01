import React, { Fragment, useState, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import handyman from "../../assets/3.jpg";
import Stars from "./Stars";
import Map from "../Map/Map";
import ImageGallery from 'react-image-gallery';
import ProfileImageCard from "./ProfileImageCard";


import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const [profiledata, setprofiledata] = useState([]);
  const [location, setlocation] = useState([]);
  const [description, setDescriptio] = useState("");
  const [city, setcity] = useState("");
  const [cost, setcost] = useState("");
  const [skill, setskill] = useState([]);
  const params = useParams();
  let projectimage1='https://picsum.photos/id/1018/1000/600/'
  let projectimage2 ='https://picsum.photos/id/1015/1000/600/'
  let projectimage3 ='https://picsum.photos/id/1019/1000/600/'
  let projectimage4 ='https://picsum.photos/id/1016/1000/600/'
  let projectimage5 ='https://picsum.photos/id/1016/1000/600/'
 

  const imgs = [
    projectimage1,
    projectimage2,
    projectimage3,
    projectimage4,
    projectimage5
  ];
  
  useEffect(() => {
    const getUserID = async () => {
      const profileData = await fetch(
        "http://localhost:3001/users/" + params.userId
      );
      const getprofiledata = await profileData.json();
      const lat = parseFloat(getprofiledata.userInfo.city.value[0]);
      const lng = parseFloat(getprofiledata.userInfo.city.value[1]);
      const description = getprofiledata.userInfo.description;
      const city = getprofiledata.userInfo.city.label;
      const skill = getprofiledata.userInfo.skills;
      const cost = getprofiledata.userInfo.cost;
      const getlocation = { lat, lng };

      setprofiledata(getprofiledata);
      setlocation(getlocation);
      setDescriptio(description);
      setcity(city);
      setcost(cost);
      setskill(skill);
    };

    getUserID();
  }, []);
  // console.log(profiledata.userInfo.skill[0])
  //console.log(profiledata.userInfo.description);
  return (
    <div>
      <Header />

      <div className="">
        <div className="md:flex items-center justify-center mt-7 shadow-xl bg-[#E0F0F5]">
          <div className="flex p-7 w-4/5 ">
            <div className="w-3/8 md:w-1/5 ">
              <img
                className="ring-2 ring-black rounded-full max-w-md w-20 h-20 md:h-52 md:w-52 ml-6"
                src={handyman}
                alt=""
              />
            </div>
            <div className="w-5/8 ml-2 md:ml-10 md:w-4/5 md:px-16">
              {/* {parseFloat(profiledata.userInfo.city.value[0])} */}

              {/* {profiledata.map((user)=>( */}
              <h2 className="py-1 border-2 bg-white rounded-xl font-semibold md:text-3xl text-1xl pl-3 md:font-bold md:leading-relaxed w-3/4 text-black">
                {profiledata.username}
              </h2>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mt-2 w-6 h-6 md:float-left"
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
                {/* {profiledata.map((user)=>(
              <span>{user.userInfo.map((info)=>(<span>{info.city.label} </span>))}
              </span>

              ))} */}
                {city}, UK
              </h4>
              <div className="md:block hidden">
                {/* {profiledata.map((user)=>(<p >{user.userInfo.map((info)=>(<p>{info.description} </p>))}</p>))} */}
                {/* {profiledata.userInfo.description} */}
                {description}
                <Stars />
              </div>
            </div>
          </div>
          <div className="p-4 item-center justify-center  text-center md:hidden">
            {/* {profiledata.map((user)=>(<p >{user.userInfo.map((info)=>(<p>{info.description} </p>))}</p>))} */}
            {/* {profiledata.userInfo.description} */}
            {description}
            <Stars />
          </div>
        </div>
        <hr className="border-2 bg-gray-400" />
        <div className="flex item-center justify-center mt-2">
          <div className="w-4/5">
            <div className="md:flex py-3 mt-7 text-center ">
              <p className="rounded-lg md:w-1/5 bg-none shadow-xl pl-2 mr-3 py-2">
                {/* {profiledata.map((user)=>(<p>{user.userInfo.map((info)=>(<p>{info.skills.map((label)=>(<p>{label.label}</p>))} </p>))}</p>))} */}
                {skill.map((skill) => (
                  <p>{skill.label}</p>
                ))}
              </p>
              <p className="rounded-lg md:w-1/5 bg-none shadow-xl pl-2 mr-3 py-2">
                {/* {profiledata.map((user)=>(<p>{user.userInfo.map((info)=>(<p>{info.city.label} </p>))}</p>))} */}
                {city}
              </p>
              <p className="rounded-lg md:w-1/5 bg-none shadow-xl pl-2 mr-3 py-2">
                {/* {profiledata.map((user)=>(<p>{user.userInfo.map((info)=>(<p>£{info.cost} ph</p>))}</p>))}  */}
                £{cost}
              </p>
            </div>
            <h4 className="font-bold text-2xl md:font-medium  md:leading-relaxed mt-7 mb-7">
              Completed projects
            </h4>
            <div className=" mt-3">
                    <div className='md:hidden'>
                                    <ul className='flex overflow-x-auto gap-6 snap-x snap-mandatory'>
                                        {imgs.map((image,index) => (
                                            <li  className='shrink-0 snap-center'>
                                                <ProfileImageCard key={index} img={image}/>
                                            </li>
                                        ))}
                                    </ul>
                      </div>
                      <div className="hidden md:block  ">
                                <div className="grid-cols-4 space-y-2 md:space-y-0 md:grid md:gap-3  ">
                                    <div className=" w-full col-span-2 bg-yellow-600 row-span-2 rounded ">
                                        <img className='rounded-xl h-full object-cover hover:scale-105 transition duration-200 ease-in-out'
                                            src={projectimage1}
                                            alt="image"/>
                                    </div>
                                    <div className=" w-full   rounded ">
                                        <img className='rounded-xl h-full object-cover  hover:scale-105 transition duration-200 ease-in-out'
                                             src={projectimage2}
                                             alt="image"/>
                                    </div>
                                    <div className="w-full h-full rounded ">
                                        <img className='rounded-xl h-full object-cover hover:scale-105 transition duration-200 ease-in-out'
                                             src={projectimage3}
                                            alt="image"/>
                                    </div>
                                    <div className="w-full h-full rounded ">
                                        <img className='rounded-xl h-full object-cover hover:scale-105 transition duration-200 ease-in-out'
                                             src={projectimage4}
                                            alt="image"/>
                                    </div>
                                    <div className="w-full h-full rounded ">
                                        <img className ='rounded-xl h-full object-cover hover:scale-105 transition duration-200 ease-in-out'
                                             src={projectimage5}
                                            alt="image"/>
                                    </div>
                                </div>
                            </div>

            </div>
              


            <div class="py-7 mt-5">
              <div class="col-span-1 container-mx-auto">
                <h1 class="flex grow text-2xl font-semibold py-5">Location</h1>
                <div className="mt-2 h-48">
                  <Map location={location} />
                </div>
              </div>
            </div>
            <div class="container-mx-auto place-item-center"></div>
          </div>
        </div>
      </div>

      <div className="py-6 flex-col"></div>
      <div className="mx-auto w-4/5">
        <Link to={"/contact/" + params.userId}>
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
