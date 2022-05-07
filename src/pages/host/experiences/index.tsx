import React, { Fragment } from "react";

import Header from "../../../containers/base/header";
import Footer from "../../../containers/base/footer/footer";
import Introduction from "./introduction";
import Activities from "./activities";
import ShowWhatYouKnow from "./show_what_you_know";
import Tutorial from "./tutorial";
import Tools from "./tools";
import Questions from "./questions";

const Experiences = () => {
  return (
    <Fragment>
      <Header />
      <Introduction />
      <Activities />
      <ShowWhatYouKnow />
      <Tutorial />
      <Tools />
      <Questions />
      <Footer />
    </Fragment>
  );
};

export default Experiences;
