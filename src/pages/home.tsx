import React from "react";

import Footer from "../containers/base/footer/footer";
import Banner from "../containers/base/banner/banner";
import Carousel from "../containers/base/carousel/carousel";
import ExploreExperience from "../containers/explore_experience/exploreExperience";
import Trips from "../containers/trips/trips";

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
