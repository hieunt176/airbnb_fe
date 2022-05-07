import React from "react";

import H from "../../../../components/typography/h";
import LightSilverButton from "../../../../components/button/light_silver/lightSilver";
import { useStyles } from "./useStyles";

const Introduction = () => {
  const classes = useStyles();

  const video: string =
    "https://a0.muscache.com/v/76/07/76078ccb-c33d-4d25-aa9e-4fc4c7886633/bdcbe89cac105172b0faee8a2a064c76_8000k_1.mp4";

  return (
    <div className={classes.root}>
      <video
        className={classes.video}
        autoPlay
        aria-label="video"
        crossOrigin="anonymous"
        playsInline
        preload="auto"
        muted
        loop
      >
        <source src={video} type="video/mp4; codecs=hevc" />
        <source src={video} type="video/mp4" />
      </video>
      <div className={classes.banner}>
        <div className={classes.bannerContainer}>
          <H
            variant="h2"
            color="#484848"
            fontSize="14px"
            fontWeight="800"
            lineHeight="90px"
          >
            TỔ CHỨC TRẢI NGHIỆM TRÊN AIRBNB
          </H>
          <H variant="h2" color="#008489" fontSize="75px" lineHeight="95px">
            Kiếm tiền bằng cách dẫn dắt mọi người tham gia các hoạt động mà bạn
            yêu thích.
          </H>
          <br />
          <LightSilverButton
            color="#fff"
            background="#000 !important"
            fontSize="16px !important"
            padding="12px 24px !important"
          >
            Đi thôi
          </LightSilverButton>
        </div>
      </div>
      <div className={classes.videoTitle}>
        <H color="#fff" fontSize="46px">
          Trải nghiệm là gì?
        </H>
        <H fontSize="16px">
          Đây là hoạt động vượt ra ngoài các tour du lịch hoặc lớp học thông
          thường, do người dân địa phương thiết kế và dẫn dắt trên khắp thế
          giới. Giới thiệu thành phố, sản phẩm thủ công, nguồn gốc hoặc văn hóa
          của bạn bằng cách tổ chức hoạt động trải nghiệm.
        </H>
      </div>
    </div>
  );
};

export default Introduction;
