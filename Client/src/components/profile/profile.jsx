import React, { Fragment, useState, useEffect } from "react";
import Header from "../header/Header";
import Search from "../search/search";
import Footer from "../footer/Footer";
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
        };

        getUserID();
    }, []);
    
    //  console.log(Array.isArray(userID))

  return (
    <div>
        <Header />
        <Search />
        <div className=''>
            <div className='flex items-center justify-center mt-7 '>
                <div className='flex p-7 w-4/5 shadow-xl'>
                    <div className='w-1/5'>
                        <img className='md-shrink rounded-full h-52 w-52 ml-6' src={handyman} alt="" />
                    </div>
                    <div className='w-4/5 md:px-16'>
                        <h2 className='font-semibold md:text-3xl text-1xl md:font-bold md:leading-relaxed w-3/4 text-black'>Ahmed Elzenaria</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-2 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>

                        <h4 className='md:text-1xl text-1xl md:font-medium  md:leading-relaxed text-[#606060] mt-2 mb-2'> Manchester, Greater Manchester, UK</h4>
                        <p>Ipsum pulvinar enim ad quam a eget per varius ante. Magna aptent suscipit nostra enim pulvinar semper. Est, sollicitudin metus montes faucibus eleifend. Faucibus ipsum sagittis libero ligula justo ullamcorper urna id faucibus fames odio consequat. <a href="/profile"><span className='text-[#000000] hover:text-[#fccc35]'></span></a></p>
                        <div className='flex text-yellow-400 mt-5'>
                           
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="black" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="black" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="black" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="black" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            
                            </svg>
                            <p className='text-black ml-3'>(57 reviews)</p>


                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-2 bg-gray-400' />
            <div className='flex item-center justify-center mt-2'>
                <div className='w-4/5'>
                    <div className='flex py-3 mt-7'>
                        <p className='rounded-lg w-1/5 bg-none shadow-xl pl-2 mr-3 py-2'>Electrician</p>
                        <p className='rounded-lg w-1/5 bg-none shadow-xl pl-2 mr-3 py-2'>Manchester</p>
                        <p className='rounded-lg w-1/5 bg-none shadow-xl pl-2 mr-3 py-2'>£30 ph</p>
                        <p className='rounded-lg w-1/5 bg-none shadow-xl pl-2 py-2'>4 stars +</p>
                    </div>
                    <h4 className='font-bold text-2xl md:font-medium  md:leading-relaxed mt-7 mb-7'>Completed projects</h4>
                    <div className='grid grid-rows-2 grid-cols-4 gap-4 '>
                        <img className='rounded-lg row-span-2 col-span-2' src={handyman} alt=''></img>
                        <img className='rounded-lg' src={handyman} alt=''></img>
                        <img className='rounded-lg' src={handyman} alt=''></img>
                        <img className='rounded-lg' src={handyman} alt=''></img>
                        <img className='rounded-lg' src={handyman} alt=''></img>
                     </div>

                    <div class='columns-2 py-7 mt-5'>
                        <div class='col-span-1 container-mx-auto'>
                            <h1 class='flex grow text-2xl font-semibold py-5'>Location</h1>
                            <p class='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iste optio. Id, nihil reiciendis provident pariatur nemo perferendis et vel eaque voluptatem quaerat ad sint commodi modi tenetur iste maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quod ipsam reprehenderit natus quas necessitatibus, quia alias architecto, in doloribus facere ullam, officia quidem eveniet esse commodi. Nulla, similique sunt.</p>
                        </div>

                        <div class='col-span-1 container-mx-auto'>
                            <h1 class='flex grow text-2xl font-semibold py-5'>Description</h1>
                            <p class='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor inventore culpa officia voluptatem. Labore ea facere nisi, quae perferendis reprehenderit aliquid nostrum aperiam ipsa, modi mollitia quis exercitationem omnis sequi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut dolorem saepe ipsa numquam obcaecati unde iste cupiditate debitis consequatur? Quibusdam asperiores unde debitis laudantium, ipsum ut. Voluptatem sint laboriosam animi? lo</p>
                            
                        </div> 
                     
                     </div>
                     <div class='container-mx-auto place-item-center'>
                        <img class='rounded-lg h-1/2 w-1/2 item-center justify-center' src='https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80' alt=''></img>
                        <p1 class=''>rgrjgnf</p1>
                     </div>

             

                </div>      
                </div>
         </div>
        
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
               
              {profiledata.map((user)=>(<span>{user.userInfo.map((info)=>(<span>{info.city.label} </span>))}</span>))}, UK
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
              {profiledata.map((user)=>(<p>{user.userInfo.map((info)=>(<p>{info.city.label} </p>))}</p>))}
              </p>
              <p className="rounded-lg w-1/5 bg-none shadow-xl pl-2 mr-3 py-2">
                {profiledata.map((user)=>(<p>{user.userInfo.map((info)=>(<p>£{info.cost} ph</p>))}</p>))} 
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
                <p class="text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat, iste optio. Id, nihil reiciendis provident pariatur
                  nemo perferendis et vel eaque voluptatem quaerat ad sint
                  commodi modi tenetur iste maxime! Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Minima quod ipsam reprehenderit
                  natus quas necessitatibus, quia alias architecto, in doloribus
                  facere ullam, officia quidem eveniet esse commodi. Nulla,
                  similique sunt.
                </p>
              </div>

              <div class="col-span-1 container-mx-auto">
                <h1 class="flex grow text-2xl font-semibold py-5">
                  Description
                </h1>
                <p class="text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  inventore culpa officia voluptatem. Labore ea facere nisi,
                  quae perferendis reprehenderit aliquid nostrum aperiam ipsa,
                  modi mollitia quis exercitationem omnis sequi! Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Ut dolorem saepe
                  ipsa numquam obcaecati unde iste cupiditate debitis
                  consequatur? Quibusdam asperiores unde debitis laudantium,
                  ipsum ut. Voluptatem sint laboriosam animi? lo
                </p>
              </div>
            </div>
            <div class="container-mx-auto place-item-center">
              <img
                class="rounded-lg h-1/2 w-1/2 item-center justify-center"
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80"
                alt=""
              ></img>
              <p1 class="">rgrjgnf</p1>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 flex-col">
        <h4 className="font-bold text-3xl md:font-medium md:leading-relaxed mt-2 mb-4 ">
          Location
        </h4>
        <p1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto at
          adipisci aspernatur, autem officia dolores voluptatem iure neque
          recusandae similique hic aliquam itaque repellat esse. Voluptatem
          itaque laboriosam accusamus. Eligendi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Rem dolorum at numquam cum illo sint sit
          id similique quo fugit, harum ut tempora vel modi quod explicabo
          itaque ratione! Voluptates!
        </p1>
        <img
          className="h-auto w-4/5 py-8 flex p-7 pl-20"
          src="https://images.unsplash.com/photo-1538514860079-8443cff3cb21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxvY2F0aW9uJTIwbWFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          alt=""
        ></img>
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
