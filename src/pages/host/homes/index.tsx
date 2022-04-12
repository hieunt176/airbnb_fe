import React, { Fragment } from "react";

import Carousel from "./carousel";
import Slider from "./slider";
import CountingMoney from "./counting_money";
import Presentation from "./presentation";
import Footer from "../../../containers/base/footer/footer";

const Homes = () => {
  return (
    <Fragment>
      <Carousel
        display="0"
        title="Đón tiếp khách làm nên linh hồn của Airbnb"
        content=""
        btnText="Thử đón tiếp khách"
        video="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4"
      />
      <Slider />
      <CountingMoney />
      <Presentation />
      <Footer />
    </Fragment>
  );
};

export default Homes;
