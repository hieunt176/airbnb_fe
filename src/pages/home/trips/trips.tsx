import React, { Fragment } from "react";

import { Grid } from "@mui/material";
import { useStyles } from "./useStyles";
import H from "../../../components/typography/h";
import DistanceCard from "../../../components/card/trip_card/distanceCard";
import { IDistanceCard } from "../../../@types/styles/card";

const Trips = () => {
  const classes = useStyles();

  const renderCardTrips = () => {
    const distanceCard = [
      {
        children: <Fragment>Hà Nội</Fragment>,
        image: "https://a0.muscache.com/im/pictures/ee86b8d6-b214-43f5-912c-3db2637a5724.jpg?im_w=240",
        background: "#CC2D4A !important",
        distance: "cách 2 km",
      },
      {
        children: <Fragment>Thành phố Hạ Long</Fragment>,
        image: "https://a0.muscache.com/im/pictures/88960fb8-6ebb-48d2-ac44-4f5e08501435.jpg?im_w=240",
        background: "rgb(188, 26, 110) !important",
        distance: "cách 124 km",
      },
      {
        children: <Fragment>Mỹ Đình</Fragment>,
        image: "https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=240",
        background: "rgb(217, 59, 48) !important",
        distance: "cách 8 km",
      },
      {
        children: <Fragment>Thành phố Ninh Bình</Fragment>,
        image: "https://a0.muscache.com/im/pictures/0538dab4-a0fc-4035-b6b2-40fa3532ee7b.jpg?im_w=240",
        background: "rgb(222, 49, 81) !important",
        distance: "cách 88 km",
      },
    ];

    return distanceCard.map((item: IDistanceCard, index: number) => {
      return (
        <Grid item xs={3} key={index}>
          <DistanceCard distance={item.distance} background={item.background} image={item.image}>
            {item.children}
          </DistanceCard>
        </Grid>
      );
    });
  };

  return (
    <div className={classes.trips}>
      <H variant="h2" color="#222222">
        Cảm hứng cho chuyến đi tiếp theo của bạn
      </H>
      <div className={classes.listCards}>
        <Grid container spacing={3}>
          {renderCardTrips()}
        </Grid>
      </div>
    </div>
  );
};

export default Trips;
