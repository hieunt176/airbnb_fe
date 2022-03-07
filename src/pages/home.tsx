import React from "react";

import Banner from "../containers/banner/banner";
import Carousel from "../containers/carousel/carousel";

const Home = () => {
  return (
    <div className="app__airbnb">
      <Carousel />
      <Banner />
    </div>
  );
};
export default Home;
