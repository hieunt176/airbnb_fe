import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Slick, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useStyles } from "./useStyles";

interface Image {
  label: string;
  imgPath: string;
  host: string;
  place: string;
}

const images: Image[] = [
  {
    label:
      "Việc cho thuê căn hộ studio đã làm thay đổi cuộc sống của tôi và mang đến cho tôi những trải nghiệm và con người đáng nhớ.",
    imgPath:
      "https://a0.muscache.com/im/pictures/4f3047b2-58ea-4335-8430-dfc6f436634d.jpg",
    host: "https://a0.muscache.com/im/pictures/f2b0e082-6872-47a3-a9f6-d01a9c44a088.jpg",
    place: "Milan",
  },
  {
    label:
      "Việc cho thuê căn hộ studio đã làm thay đổi cuộc sống của tôi và mang đến cho tôi những trải nghiệm và con người đáng nhớ.",
    imgPath:
      "https://a0.muscache.com/im/pictures/4f3047b2-58ea-4335-8430-dfc6f436634d.jpg",
    host: "https://a0.muscache.com/im/pictures/f2b0e082-6872-47a3-a9f6-d01a9c44a088.jpg",
    place: "Milan",
  },
  {
    label:
      "Việc cho thuê căn hộ studio đã làm thay đổi cuộc sống của tôi và mang đến cho tôi những trải nghiệm và con người đáng nhớ.",
    imgPath:
      "https://a0.muscache.com/im/pictures/4f3047b2-58ea-4335-8430-dfc6f436634d.jpg",
    host: "https://a0.muscache.com/im/pictures/f2b0e082-6872-47a3-a9f6-d01a9c44a088.jpg",
    place: "Milan",
  },
  {
    label:
      "Việc cho thuê căn hộ studio đã làm thay đổi cuộc sống của tôi và mang đến cho tôi những trải nghiệm và con người đáng nhớ.",
    imgPath:
      "https://a0.muscache.com/im/pictures/4f3047b2-58ea-4335-8430-dfc6f436634d.jpg",
    host: "https://a0.muscache.com/im/pictures/f2b0e082-6872-47a3-a9f6-d01a9c44a088.jpg",
    place: "Milan",
  },
];

const SliderSlick = () => {
  const classes = useStyles();

  const slickSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const renderItems = () => {
    return images.map((item, index) => {
      return (
        <div key={index} className={classes.slider_item}>
          <img className={classes.slider_img} src={item.imgPath} alt="" />
          <div className={classes.item_infor}>
            <span className={classes.item_label}>{item.label}</span>
            <div>
              <img className={classes.item_host} src={item.host} alt="" />
            </div>
            <div className={classes.item_place}>
              {"Chủ nhà ở " + item.place}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={classes.slider}>
      <div className={classes.slider_title}>
        Bạn có thể đón tiếp
        <br />
        bất kỳ ai, ở bất cứ đâu
      </div>
      <Slick {...slickSettings} className={classes.slick}>
        {renderItems()}
        {/* <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div> */}
      </Slick>
    </div>
  );
};

export default SliderSlick;
