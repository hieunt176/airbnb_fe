import React, { Fragment } from "react";

import { useStyles } from "./useStyles";

import H from "../../../../components/typography/h";
import LightSilverButton from "../../../../components/button/light_silver/lightSilver";
import Carousel from "../carousel";

const Presentation = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.question}>
        <div className={classes.textQuestion}>
          <H variant="h2" color="#fff" fontSize="64px" fontWeight="500">
            Bạn có thắc mắc về việc đón tiếp khách?
            <br />
            Hãy hỏi ý kiến Chủ nhà siêu cấp.
          </H>
        </div>
        <div>
          <LightSilverButton>Tìm hiểu thêm</LightSilverButton>
        </div>
      </div>
      <div className={classes.airCover}>
        <div className={classes.airCoverLeft}>
          <img src="/images/air_cover.svg" alt="air_cover.svg" width="510px" />
          <H variant="h2" color="#000" fontSize="32px" fontWeight="300">
            Chương trình bảo vệ toàn diện. Miễn phí cho Chủ nhà/Người tổ chức.
            Chỉ có trên Airbnb.
          </H>
          <LightSilverButton>Tìm hiểu về AirCover</LightSilverButton>
        </div>
        <div className={classes.airCoverRight}>
          <img
            src="https://a0.muscache.com/im/pictures/11e10d64-867e-4dba-b0b4-896026a4f0e0.jpg"
            alt="aircover"
          />
        </div>
      </div>
      <Carousel
        display="1"
        title="Thử đón tiếp khách trên Airbnb"
        content="Hãy tham gia cùng chúng tôi. Chúng tôi sẽ hỗ trợ bạn hoàn thành từng bước của quy trình."
        btnText="Bắt đầu thôi!"
        video="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4"
      />
    </Fragment>
  );
};

export default Presentation;
