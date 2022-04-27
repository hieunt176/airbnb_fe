import React from "react";

import Header from "../../../containers/base/header";
import Footer from "../../../containers/base/footer/footer";
import Introduction from "./introduction";
import ListActivity from "./list_activity";

const Experiences = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <ListActivity />
      <Footer />
    </div>
  );
};

export default Experiences;
