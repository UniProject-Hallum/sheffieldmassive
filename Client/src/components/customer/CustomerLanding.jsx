import React from "react";
import Header from "../header/Header";
import Search from "../search/search";
import Footer from "../footer/Footer";
import Card from "../cards/Card";
import Carousel from "../carousel/Carousel";
import { useUser } from "../../auth/useUser";

const CustomerLanding = () => {



  return (
    <div>
      <Header />
      <Search />
      <Carousel />
      <Card />
      <Footer />
    </div>
  );
};

export default CustomerLanding;
