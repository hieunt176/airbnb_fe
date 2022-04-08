import React from "react";

import FMP from "./fmp";
import Slider from "./slider";
import WMPW from "./wmpw";
import Presentation from "./presentation";
import Footer from "../../../containers/base/footer/footer";

const Homes = () => {
  return (
    <div>
      <FMP
        display="0"
        title="Đón tiếp khách làm nên linh hồn của Airbnb"
        content=""
        btnText="Thử đón tiếp khách"
        video="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4"
      />
      <Slider />
      <WMPW />
      <Presentation />
      <Footer />
    </div>
  );
};

export default Homes;
