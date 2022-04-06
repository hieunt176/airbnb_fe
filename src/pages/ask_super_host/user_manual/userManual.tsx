import { Grid } from "@mui/material";
import React from "react";
import LightSilverButton from "../../../components/button/light_silver/lightSilver";
import OutlinedButton from "../../../components/button/outline/outlinedButton";
import H from "../../../components/typography/h";
import DialogVideo from "../dialog/dialogVideo";
import VideoCards from "./list_video_card/videoCards";
import { useStyles } from "./useStyle";

export const UserManual = () => {
  const classes = useStyles();
  const videoCards = [
    {
      title: "Cách mô tả chỗ ở",
      img: "https://a0.muscache.com/im/pictures/8491648e-838c-4cf4-a4da-6694e3190e5f.jpg",
    },
    {
      title: "Cách chụp những bức ảnh tuyệt đẹp",
      img: "https://a0.muscache.com/im/pictures/26068757-0744-435f-a8b7-8a9bf81fe27d.jpg",
    },
    {
      title: "Cách đặt tên cho chỗ ở",
      img: "https://a0.muscache.com/im/pictures/8491648e-838c-4cf4-a4da-6694e3190e5f.jpg",
    },
    {
      title: "Cách đặt giá",
      img: "https://a0.muscache.com/im/pictures/c64c6a3b-b5cb-430a-a5c9-7227d86fab94.jpg",
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <H>Những cách khác để bắt đầu đón tiếp khách</H>
        <p className="text">Bất kể khởi điểm của bạn ra sao, chúng tôi đều có các mẹo, video và hướng dẫn cho từng bước.</p>
        <div className={classes.buttonGroup}>
          <LightSilverButton>Tìm hiểu về hoạt động đón tiếp khách</LightSilverButton>
          <OutlinedButton>Bắt đầu đăng cho thuê chỗ của bạn</OutlinedButton>
        </div>
        <div className={classes.slider}>
          <Grid container spacing={2}>
            <VideoCards videoCards={videoCards} />
          </Grid>
        </div>
      </div>
      <DialogVideo open={true} />
    </div>
  );
};
export default UserManual;
