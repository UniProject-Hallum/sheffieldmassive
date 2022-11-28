import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const params = useParams();
  const [email, setemail] = useState();
  const form = useRef();

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
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [profiledata, setprofiledata] = useState([]);

  useEffect(() => {
    const getUserID = async () => {
      const profileData = await fetch(
        "http://localhost:3001/users/" + params.userId
      );
      const getprofiledata = await profileData.json();
      const email = getprofiledata.email;
      setprofiledata([getprofiledata]);
      setemail(email);
    };

    getUserID();
  }, []);



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
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xs">Name:</h2>
              {profiledata.map((user) => (
                <p className="text-xs">{user.username}</p>
              ))}
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
                class="w-8 h-8 mr-2"
              >
                <path
                  stroke-linecap="round"
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xs">Email:</h2>
              {profiledata.map((user) => (
                <p className="text-xs">{user.email}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-96 px-6 py-8" id="contact_us">
          <div className="flex justify-between">
            <h2 className="text-xl">Get In Touch</h2>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="hidden"
              placeholder={email}
              name="to_email"
              value={email}
              className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
            />
            <br />
            <input
              type="text"
              placeholder="Enter your Name"
              name="from_name"
              className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
            />
            <br />
            <input
              type="text"
              placeholder="Enter your Email"
              name="from_email"
              className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
            />
            <br />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
            />
            <br />
            <textarea
              type="text"
              name="message"
              placeholder="Enter Your Message Here"
              className="w-full text-xs px-3 h-28 my-2 outline-none rounded-md border focus:shadow-sm resize-none"
            ></textarea>
            <br />
            <button
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
