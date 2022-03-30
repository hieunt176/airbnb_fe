import { Avatar } from "@mui/material";
import React from "react";
import LightSilverButton from "../../components/button/light_silver/lightSilver";
import SuperHostAnswer from "../../components/superhost_answer/superHostAnswer";

import H from "../../components/typography/h";
import ListAnswer from "./list/listAnswer";
import { useStyles } from "./useStyle";

interface Props {
  comment: Comment;
}

const Answer = () => {
  const classes = useStyles();

  const comments = [
    {
      step: "Bước 1",
      title: "Gặp gỡ Chủ nhà siêu cấp của bạn",
      backgroundUrl: "https://a0.muscache.com/im/pictures/ed9358e5-6a01-41fb-b911-6c5e1af976b7.jpg?im_w=2560&im_q=highq",
      contents: [
        {
          avatarUrl: "https://mui.com/static/images/avatar/3.jpg",
          name: "Huy",
          time: "10:21",
          commentContent: "Xin chào! Tôi rất thích khi được làm Chủ nhà và rất háo hức muốn tìm hiểu thêm về bạn và chỗ ở của bạn.",
        },
      ],
    },
    {
      step: "Bước 2",
      title: "Được giải đáp mọi thắc mắc, dù lớn hay nhỏ",
      backgroundUrl: "https://a0.muscache.com/im/pictures/f6786475-e93f-411c-b2b9-5c29fe714050.jpg?im_w=2560&im_q=highq",
      contents: [
        {
          avatarUrl: "https://a0.muscache.com/im/pictures/f82e594f-d7e2-4032-a021-9c15f490f42e.jpg?im_w=240",
          name: "Khun",
          time: "15:45",
          commentContent: "Điều gì xảy ra nếu có gì đó bị vỡ hoặc bị hư hại trong nhà của tôi? Tôi có chút lo lắng.",
        },
        {
          avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
          name: "Huy",
          time: "18:05",
          commentContent: "Khách của tôi từ trước đến nay vẫn luôn rất ý tứ, nhưng ở đây vẫn có AirCover phòng khi xảy ra sự cố.",
        },
      ],
    },
    {
      step: "Bước 3",
      backgroundUrl: "https://a0.muscache.com/im/pictures/6d0abc93-c726-4f8b-8420-c41f67554567.jpg?im_w=2560&im_q=highq",
      title: "Tự tin chào đón vị khách đầu tiên của bạn",
      contents: [
        {
          avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
          name: "Huy",
          time: "18:17",
          commentContent: "Tôi chỉ muốn nhắc bạn hãy để lại lời nhắn chào mừng và một chút đặc sản địa phương. Vậy là mọi việc đã hoàn tất!",
        },
      ],
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <H variant="h2" color="#22222">
          Chủ nhà siêu cấp của bạn sẽ luôn sát cánh bên bạn trên mỗi bước đường
        </H>
      </div>
      <ListAnswer comments={comments} />
      <div className={classes.informationAddition}>
        <div className="intro">
          <div className="avatar">
            <Avatar sx={{ width: 100, height: 100 }} alt="Travis Howard" src="https://a0.muscache.com/im/pictures/f82e594f-d7e2-4032-a021-9c15f490f42e.jpg?im_w=240" variant="square" />
          </div>
          <div className="name__place">
            <div className="name">Huy</div>
            <div className="place">Dalat</div>
          </div>
        </div>
        <div className="content">Bất cứ khi nào bạn đã sẵn sàng, Huy luôn sẵn sàng hỗ trợ bạn.</div>
        <LightSilverButton background="#5F002A !important" color="#fff !important">
          Hỏi ý kiến Chủ nhà siêu cấp
        </LightSilverButton>
      </div>
    </div>
  );
};

export default Answer;
