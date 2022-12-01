import React from "react";
import Header from "../header/Header";
import Search from "../search/Search";
import Slide from "../slider/Slide";
import Footer from "../footer/Footer";
import Card from "../cards/Card";
// import Carousel from "../carousel/Carousel";

const Landing = () => {
  
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
