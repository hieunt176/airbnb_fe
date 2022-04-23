import React from "react";

import { useStyles } from "./useStyles";

import { IImage } from "./index";

export interface IHomeCard {
  index: number;
  iImage: IImage;
}

const HomeCard = (props: IHomeCard) => {
  const classes = useStyles();

  const { iImage, index } = props;
  const { label, imgPath, host, place } = iImage;

  return (
    <div key={index} className={classes.sliderItem}>
      <img className={classes.sliderImg} src={imgPath} alt="" />
      <div className={classes.itemInfor}>
        <span className={classes.itemLabel}>{label}</span>
        <div>
          <img className={classes.itemHost} src={host} alt="" />
        </div>
        <div className={classes.itemPlace}>{"Chủ nhà ở " + place}</div>
      </div>
    </div>
  );
};

export default HomeCard;
