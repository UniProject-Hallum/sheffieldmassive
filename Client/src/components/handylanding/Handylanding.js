import { React, useState } from "react";
import Header from "../header/Header";
import { useUser } from "../../auth/useUser";
import Skills from "./Skills";

import Acceptedjobs from "./Acceptedjobs";
import Jobrequests from "./Jobrequest";
const Handylanding = () => {
  const user = useUser();
  let welcomeMessage = "Welcome Back ";

  return (
    <div>
      <Header />

      {/* Banner */}
      <div className="flex bg-[#ceeaf2] p-5 sm:mt-7">
        <img
          className="w-2/12 rounded-lg ml-20 border-gray-200 shadow-lg mr-3"
          src={user.userInfo.gender}
          alt="logo"
        />

        <h2 className="flex flex-wrap items-center justify-center md:text-6xl md:font-medium">
          {welcomeMessage + " " + user.username} !{" "}
        </h2>
      </div>

      <div className='<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">'>
        <div>
          <Skills />
        </div>

        <div className=" ">
          <Jobrequests className=""></Jobrequests>
        </div>

        {/* <div className=" ">
          <Acceptedjobs className=""></Acceptedjobs>
        </div> */}

        
      </div>
    </div>
  );
};

export default Handylanding;
