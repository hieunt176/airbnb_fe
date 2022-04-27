import React from "react";

import ActivityCard from "./activity_card";

import { useStyles } from "./useStyles";

export interface Activity {
  img: string;
  title: string;
  content: string;
}

const ListActivity = () => {
  const classes = useStyles();

  const listActivity: Activity[] = [
    {
      img: "https://a0.muscache.com/im/pictures/2bdf020b-303c-46a4-bf2c-6c6a8e775bd8.jpg",
      title: "Tạo một hoạt động theo cách của bạn",
      content:
        "Tour khám phá ẩm thực bằng xe đạp, chụp ảnh vào ban đêm, thưởng thức món tapas trên thuyền hoặc tập yoga (với dê). Tạo và quản lý một hoạt động độc đáo mà mọi người đều muốn thử.",
    },
    {
      img: "https://a0.muscache.com/im/pictures/2bdf020b-303c-46a4-bf2c-6c6a8e775bd8.jpg",
      title: "Tạo một hoạt động theo cách của bạn",
      content:
        "Tour khám phá ẩm thực bằng xe đạp, chụp ảnh vào ban đêm, thưởng thức món tapas trên thuyền hoặc tập yoga (với dê). Tạo và quản lý một hoạt động độc đáo mà mọi người đều muốn thử.",
    },
    {
      img: "https://a0.muscache.com/im/pictures/2bdf020b-303c-46a4-bf2c-6c6a8e775bd8.jpg",
      title: "Tạo một hoạt động theo cách của bạn",
      content:
        "Tour khám phá ẩm thực bằng xe đạp, chụp ảnh vào ban đêm, thưởng thức món tapas trên thuyền hoặc tập yoga (với dê). Tạo và quản lý một hoạt động độc đáo mà mọi người đều muốn thử.",
    },
  ];

  const renderActivity = () => {
    if (!listActivity) return "";

    return listActivity.map((activity: Activity, key: number) => {
      return <ActivityCard activity={activity} key={key} index={key} />;
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.contain}>{renderActivity()}</div>
    </div>
  );
};

export default ListActivity;
