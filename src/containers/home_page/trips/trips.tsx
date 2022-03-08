import React from "react";

import { Grid } from "@mui/material";
import { useStyles } from "./useStyles";
import CardTrip from "../../../components/home_page/cardTrips";
import H from "../../../components/typography/h";

export interface CardTrip {
  image: string;
  background: string;
  distance: string;
  content: React.ReactNode;
}

const Trips = () => {
  const classes = useStyles();

  const renderCardTrips = () => {
    const cardTrips = [
      {
        content: <React.Fragment>Hà Nội</React.Fragment>,
        image: "https://a0.muscache.com/im/pictures/ee86b8d6-b214-43f5-912c-3db2637a5724.jpg?im_w=240",
        background: "#CC2D4A !important",
        distance: "cách 2 km",
      },
      {
        content: (
          <React.Fragment>
            Thành phố Hạ Long
          </React.Fragment>
        ),
        image: "https://a0.muscache.com/im/pictures/88960fb8-6ebb-48d2-ac44-4f5e08501435.jpg?im_w=240",
        background: "rgb(188, 26, 110) !important",
        distance: "cách 124 km",
      },
      {
        content: <React.Fragment>Mỹ Đình</React.Fragment>,
        image: "https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=240",
        background: "rgb(217, 59, 48) !important",
        distance: "cách 8 km",
      },
      {
        content: (
          <React.Fragment>
            Thành phố Ninh Bình
          </React.Fragment>
        ),
        image: "https://a0.muscache.com/im/pictures/0538dab4-a0fc-4035-b6b2-40fa3532ee7b.jpg?im_w=240",
        background: "rgb(222, 49, 81) !important",
        distance: "cách 88 km",
      },
    ];

    return cardTrips.map((item: CardTrip, index: number) => {
      return (
        <Grid item xs={3} key={index}>
          <CardTrip distance={item.distance} background={item.background} image={item.image}>
            {item.content}
          </CardTrip>
        </Grid>
      );
    });
  };

  return (
    <div className={classes.trips}>
      <H variant="h4" color="#222222" paddingBottom="40px" fontWeight="600 !important">Cảm hứng cho chuyến đi tiếp theo của bạn</H>
      <Grid container spacing={3}>
        {renderCardTrips()}
      </Grid>
    </div>
  );
};

export default Trips;
