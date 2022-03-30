import React from "react";
import SuperHostAnswer from "../../../components/superhost_answer/superHostAnswer";
import { useStyles } from "./useStyle";

export interface Content {
  avatarUrl: string;
  name: string;
  time: string;
  commentContent: string;
}

export interface Comment {
  backgroundUrl: string;
  step: string;
  title: string;
  contents: Content[];
}

interface Props {
  comments: Comment[];
}

const ListAnswer = (props: Props) => {
  const classes = useStyles();
  const { comments } = props;

  const renderListAnswer = () => {
    if (!comments) return "";

    return comments.map((comment: Comment, key: number) => {
      return <SuperHostAnswer comment={comment} key={key} />;
    });
  };

  return <div className={classes.root}>{renderListAnswer()}</div>;
};

export default ListAnswer;
