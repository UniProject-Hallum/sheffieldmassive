import React from "react";
import { useEffect, useState, useReducer } from "react";
import Header from "../header/Header";
import Search from "../search/Search";
import Footer from "../footer/Footer";
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
  const url_data = params.SkillValue.split("&");
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
      <div className="flex justify-center py-3 mt-7">
        <p className="rounded-lg w-1/5 bg-[#D9D9D9] shadow-xl pl-2 mr-3 py-2">
          {url_data[0]}
        </p>
        <p className="rounded-lg w-1/5 bg-[#D9D9D9] shadow-xl pl-2 mr-3 py-2">
          {url_data[1]}
        </p>
        <p className="rounded-lg w-1/5 bg-[#D9D9D9] shadow-xl pl-2 mr-3 py-2">
          {params.CityValue}
        </p>
      </div>
      <div>
        <div>
          {results.map((getuser) => (
            <div className="flex items-center justify-center mt-6">
              <div className="flex rounded shadow-lg p-5 w-4/5 rounded-xl">
                <div className="w-1/5 md:block hidden">
                  <img
                    className="rounded-full shadow-xl h-52 w-52 ml-6"
                    src={handyman}
                    alt=""
                  />
                </div>
                <div className="w-4/5 md:px-16">
                  <h2 className="rounded-xl font-bold md:text-2xl text-1xl md:font-medium pl-3 py-2 md:leading-relaxed bg-[#ceeaf2] w-3/4 text-[#606060]">
                    {getuser.username}
                  </h2>
                  {getuser.userInfo.map((info) => (
                    <h4 className="font-bold md:text-1xl text-1xl md:font-medium md:leading-relaxed mt-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 float-left"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      {info.city["label"]} , UK
                    </h4>
                  ))}

                  {getuser.userInfo.map((info) => (
                    
                      <a href={user ? "/profile/" + getuser._id : "/login"}>
                        <div class="pt-10 md:float-right">
                          <button className=" py-1 text-white bg-[#118AB2] px-5 border rounded-xl hover:bg-[#fccc35] hover:scale-110">
                            View
                          </button>
                        </div>
                      </a>
                    
                  ))}

                  <div class="pt-5 flex items-center flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 fill-[#FCCC35] "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 fill-[#FCCC35] "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 fill-[#FCCC35] "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 fill-[#FCCC35] "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <span class="pl-5">(57 reviews)</span>
                  </div>
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
