import React from "react";

import Banner from "../containers/home_page/banner/banner";
import Carousel from "../containers/home_page/carousel/carousel";
import Trips from "../containers/home_page/trips/trips";

const Home = () => {
  return (
    <div className="app__airbnb">
      <Carousel />
      <Banner />
      <Trips />
    </div>
  );
};
export default Home;
