import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useParams , useNavigate, Link} from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useUser } from "../../auth/useUser";
import axios from "axios";


export const Contact = () => {
  const params = useParams();
  const [recieverEmail, setrecieverEmail] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubjectEmail] = useState("");
  const [message,setMessage] = useState('')
  const [handyManrequestedJobs,setHandyManRequestedJobs] = useState()
  const user = useUser();
  const form = useRef();
  const [profiledata, setprofiledata] = useState([]);   
  const navigate = useNavigate();

  const getUserID = async () => {
      await fetch(
        "http://localhost:3001/users/" + params.userId)
        .then((response)=> response.json())
        .then((data)=> {setprofiledata(data)
                        setrecieverEmail(data.email)
                        setSenderEmail(user.email)});
    };

  useEffect(() => {   
    getUserID();
  }, []);

  const handleAccept = async()=> {
        
    try {
        // Adding Job to requested Jobs For HandyMan   
        let job = {subject,senderEmail,message}
        let existingJobs = []
        existingJobs = [...existingJobs, job]
        console.log("lexisting"+JSON.stringify( existingJobs))
        

        getUserID()
        let profileJobs = profiledata.userInfo.requestedJobs
          console.log("profile"+JSON.stringify( profileJobs))
          
          existingJobs = [...existingJobs, ...profileJobs]

          console.log("combined"+JSON.stringify( existingJobs))
        let userInfo = {
            description: profiledata.userInfo.description,
            gender:  profiledata.userInfo.gender,
            skills:  profiledata.userInfo.skills,
            city:  profiledata.userInfo.city,
            cost:  profiledata.userInfo.cost,
            acceptedJobs: profiledata.userInfo.acceptedJobs,
            requestedJobs: existingJobs,
          };    
        console.log(userInfo)
        const res= await axios.patch('http://localhost:3001/user/'+profiledata._id, {email: profiledata.email,
        userInfo: userInfo ,id : profiledata._id
        });  
        var data = res.data;
        console.log(data)  
        navigate("/profile/"+profiledata._id)         
        
    } catch (e) {
        console.error("There was an error!", e);
    }   
}



  const sendEmail = (e) => {   
    e.preventDefault();
    emailjs
      .sendForm(
        "service_aphoqd5",
        "template_2ehnqxx",
        form.current,
        "B4QnZ1WuaIAGFwgp_"
      )
      .then(
        async (result) => {
            
          await handleAccept()

          console.log("result"+subject+ message);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };




  return (
    <div className="w-full h-screen grid place-items-center  text-[#606060]">
      <div className="bg-white rounded-md shadow-md flex flex-row">
        <div
          className="w-96 bg-[#ceeaf2] p-8 md:hover:scale-y-110 rounded-md transition md:block hidden"
          id="contact_info"
        >
          <div className="flex justify-between">
            <h2 className="text-xl">Contact infornation</h2>
          </div>

          <div className="mt-6 flex flex-row">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xs">Name:</h2>
                <p className="text-xs">{profiledata.username}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-row">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 mr-2"
              >
                <path
                  strokeLinecap="round"
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xs">Email:</h2>
                <p className="text-xs">{profiledata.email}</p>    
            </div>
          </div>
        </div>
        <div className="w-96 px-6 py-8" id="contact_us">
          <div>
          <Link to={"/profile/"+profiledata._id} href={'/profile/'+profiledata._id}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></Link>
          </div>
          <div className="flex justify-between">
            <h2 className="text-xl">Enquire now</h2>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="hidden"
              placeholder={recieverEmail}
              name="to_email"
              value={recieverEmail}
              className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
            />
            <br />
            <input
              type=""
              placeholder={user.username}
              
              name="from_name"
              className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
            />
            <br />
            <input
              type=""
              placeholder={senderEmail}
              
              name="from_email"
              className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
            />
            <br />
            <input
              required
              type="text"
              placeholder="Subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubjectEmail(e.target.value)}
              className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
            />
            <br />
            <textarea
              required
              type="text"
              name="message"
              placeholder="Enter Your Message Here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full text-xs px-3 h-28 my-2 outline-none rounded-md border focus:shadow-sm resize-none"
            ></textarea>
            <br />
            <button
              onClick={getUserID}
              type="submit"
              value="Send"
              className="bg-[#606060] rounded-md text-xs text-white px-4 py-2 cursor-pointer hover:bg-[#fccc35] hover:scale-110"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
