import React from "react";

import FMP from "./FMP";
import Slider from "./slider";
import WMPW from "./wmpw";
import Footer from "../../../containers/base/footer/footer";

const Homes = () => {
  return (
    <div>
      <FMP />
      <Slider />
      <WMPW />
      <Footer />
    </div>
  );
};

export default Homes;
