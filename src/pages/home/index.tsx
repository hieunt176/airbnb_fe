import React from "react";

import Header from "../../containers/base/header";
import Footer from "../../containers/base/footer/footer";
import Banner from "./banner/banner";
import Carousel from "./carousel/carousel";
import ExploreExperience from "./explore_experience/exploreExperience";
import Trips from "./trips/trips";

const Home = () => {
  return (
    <div className="app__airbnb">
      <Header />
      <Carousel />
      <Banner />
      <Trips />
      <ExploreExperience />
      <Footer />
    </div>
  );
};
export default Home;
