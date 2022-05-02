import React from "react";

import Header from "../../../containers/base/header";
import Footer from "../../../containers/base/footer/footer";
import Introduction from "./introduction";
import ListActivity from "./list_activity";
import ShowWhatYouKnow from "./show_what_you_know";
import Tutorial from "./tutorial";
import Tools from "./tools";
import Questions from "./questions";

const Experiences = () => {
  return (
    <React.Fragment>
      <Header />
      <Introduction />
      <ListActivity />
      <ShowWhatYouKnow />
      <Tutorial />
      <Tools />
      <Questions />
      <Footer />
    </React.Fragment>
  );
};

export default Experiences;
