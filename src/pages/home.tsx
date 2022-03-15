import React from "react";

import Header from "../containers/header";
import Banner from "../containers/home_page/banner/banner";
import Carousel from "../containers/home_page/carousel/carousel";
import Trips from "../containers/home_page/trips/trips";

const Home = () => {
  return (
    <div className="app__airbnb">
      <Header />
      <Carousel />
      <Banner />
      <Trips />
    </div>
  );
};
export default Home;
