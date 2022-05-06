import React from "react";

import Header from "../../containers/base/header";
import Footer from "../../containers/base/footer/footer";
import HelpSearch from "./help_search";
import Topics from "./topics";
import ExploreMore from "./explore_more";

const Help = () => {
  return (
    <React.Fragment>
      <Header />
      <HelpSearch />
      <Topics />
      <ExploreMore />
      <Footer />
    </React.Fragment>
  );
};

export default Help;
