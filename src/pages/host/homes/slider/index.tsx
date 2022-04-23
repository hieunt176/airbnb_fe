import * as React from "react";
import Slick, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomeCard from "./HomeCard";

import { useStyles } from "./useStyles";

export interface IImage {
  label: string;
  imgPath: string;
  host: string;
  place: string;
}

const images: IImage[] = [
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
      return <HomeCard iImage={item} index={index} />;
    });
  };

  return (
    <div className={classes.slider}>
      <div className={classes.sliderTitle}>
        Bạn có thể đón tiếp
        <br />
        bất kỳ ai, ở bất cứ đâu
      </div>
      <Slick {...slickSettings} className={classes.slick}>
        {renderItems()}
      </Slick>
    </div>
  );
};

export default SliderSlick;
