import React from "react";
import Header from "../header/Header";
import Search from "../search/Search";
import Footer from "../footer/Footer";
import Card from "../cards/Card";
// import Carousel from "../carousel/Carousel";
import { useUser } from "../../auth/useUser";

const CustomerLanding = () => {
 // Welcome message with user name 
  const user = useUser();
  let welcomeMessage = "Welcome Back ";

  


  return (
    <div>
      <Header />
      <Search />
        <div> 
          <h2 className="flex flex-wrap items-center justify-center md:text-6xl md:font-medium">
          {welcomeMessage + " " + user.username} !{" "}
          </h2>
        </div>
      {/* <Carousel /> */}
      <Card />
      <Footer />
    </div>
  );
};

export default CustomerLanding;
