import React from "react";
import CommentCard from "../../../../components/card/comment_card/commendCard";
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

const CommentsCard = (props: Props) => {
  const classes = useStyles();
  const { comments } = props;

  const renderCommentsCard = () => {
    if (!comments) return "";

    return comments.map((comment: Comment, key: number) => {
      return <CommentCard comment={comment} key={key} />;
    });
  };

  return <div className={classes.root}>{renderCommentsCard()}</div>;
};

export default CommentsCard;