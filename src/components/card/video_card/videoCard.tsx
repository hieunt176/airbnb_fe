import React from "react";
import { useStyles } from "./useStyles";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IVideoCard } from "../../../pages/ask_super_host/user_manual/list_video_card/videoCards";

interface Props {
  card: IVideoCard;
}

const VideoCard = (props: Props) => {
  const classes = useStyles();
  const { card } = props;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <img src={card.img} />
        <div className="sub">
          <div className={classes.title}>{card.title}</div>
          <PlayArrowIcon className={classes.playIcon} />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
