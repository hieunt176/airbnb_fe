import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import VideoCard from "../../../../components/card/video_card/videoCard";

export interface IVideoCard {
  title: string;
  img: string;
}

export interface Props {
  videoCards: IVideoCard[];
}

const VideoCards = (props: Props) => {
  const { videoCards } = props;
  
  const renderVideoCards = () => {
    return videoCards.map((card: IVideoCard, index: number) => {
      return (
        <Grid item xs={3} key={index}>
          <VideoCard card={card} />
        </Grid>
      );
    });
  };

  return <Fragment>{renderVideoCards()}</Fragment>;
};

export default VideoCards;
