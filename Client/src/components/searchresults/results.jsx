import React from "react";
import { useEffect, useState, useReducer } from "react";
import Header from "../header/Header";
import Search from "../search/search";
import Footer from "../footer/footer";
import handyman from "../../assets/3.jpg";
import { Link, useParams } from "react-router-dom";
import { useUser } from "../../auth/useUser";

const Results = () => {
  const [ignore, forceUpdate] = useReducer((x) => x + 1, 0);
  let user = useUser();
  const [users, setUsers] = useState([]);
  const [searchdata, setsearchdata] = useState([]);
  const [results, setresults] = useState([]);
  const getserachdata = (data) => {
    setsearchdata(data);
    //console.log(data)
  };
  const params = useParams();
  const url_data = params.SkillValue.split('&')
  useEffect(() => {
    const getUserID = async () => {
      let results = await fetch(
        "http://localhost:3001/search/" +
          params.SkillValue +
          "&" +
          params.CityValue 
      );

      results = await results.json();
      setresults(results);
      forceUpdate();
    };

    getUserID();
  }, [ignore]);
 


  return (
    <div>
      <Header />
      <Search onClick={getserachdata} />
      <div className='flex py-3 mt-7'>
          <p className='rounded-lg w-1/5 bg-none shadow-xl pl-2 mr-3 py-2'>{url_data[0]}</p>
          <p className='rounded-lg w-1/5 bg-none shadow-xl pl-2 mr-3 py-2'>{url_data[1]}</p>
          <p className='rounded-lg w-1/5 bg-none shadow-xl pl-2 mr-3 py-2'>{params.CityValue}</p>
      </div>
      <div>
        <div>
          {results.map((getuser) => (
            <div className="flex items-center justify-center mt-6">
              <div className="flex rounded shadow-lg shadow-gray-600 p-5 w-4/5">
                <div className="w-1/5">
                  <img
                    className="rounded-full h-52 w-52 ml-6"
                    src={handyman}
                    alt=""
                  />
                </div>
                <div className="w-4/5 md:px-16">
                  <h2 className="font-bold md:text-3xl text-1xl md:font-medium pl-2 md:leading-relaxed bg-[#ceeaf2] w-3/4 text-[#606060]">
                    {getuser.username}
                  </h2>
                  {getuser.userInfo.map((info) => (
                    <h4 className="font-bold md:text-1xl text-1xl md:font-medium  md:leading-relaxed text-[#606060] mt-2 mb-2">
                      {info.city["label"]} , UK
                    </h4>
                  ))}

                  {getuser.userInfo.map((info) => (
                    <p>
                      {info.description}{" "}
                      <a href={user ? "/profile/" + getuser._id : "/login"}>
                        <span className="text-[#000000] hover:text-[#fccc35]">
                          Read More ....
                        </span>
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Results;
