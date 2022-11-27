import React from "react";
import Header from "../header/Header";
import Search from "../search/search";
import Slide from "../slider/slide";
import Footer from "../footer/Footer";
import Card from "../cards/Card";

const Landing = () => {
  return (
    <div>
      <Header />
      <Search />
      <Slide />
      <Card />
      <Footer />
    </div>
  );
};

export default Landing;
