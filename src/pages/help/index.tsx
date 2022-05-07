import React, { Fragment } from "react";

import Header from "../../containers/base/header";
import Footer from "../../containers/base/footer/footer";
import HelpSearch from "./help_search";
import Topics from "./topics";
import ExploreMore from "./explore_more";

const Help = () => {
  return (
    <Fragment>
      <Header />
      <HelpSearch />
      <Topics />
      <ExploreMore />
      <Footer />
    </Fragment>
  );
};

export default Help;
