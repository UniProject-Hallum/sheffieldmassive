import React from "react";
import Header from "../header/Header";
import Search from "../search/Search";
import Slide from "../slider/Slide";
import Footer from "../footer/Footer";
import Card from "../cards/Card";
import { Navigate } from "react-router-dom";
import { useUser } from "../../auth/useUser";
// import Carousel from "../carousel/Carousel";

const Landing = () => {
  
  const user = useUser();

   if (user) return <Navigate to="/redirect" />;
  return (
    <div>
      <Header />
      <Search />
      <Slide />
      {/* <Carousel /> */}
      <Card />
      <Footer />
    </div>
  );
};

export default Landing;
