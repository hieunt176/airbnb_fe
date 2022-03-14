import React from "react";

import Footer from "../containers/base/footer/footer";
import Banner from "../containers/home_page/banner/banner";
import Carousel from "../containers/home_page/carousel/carousel";
import ExploreExperience from "../containers/home_page/explore_experience/exploreExperience";
import Trips from "../containers/home_page/trips/trips";

const Home = () => {
  return (
    <div className="app__airbnb">
      <Carousel />
      <Banner />
      <Trips />
      <ExploreExperience />
      <Footer />
    </div>
  );
};
export default Home;
