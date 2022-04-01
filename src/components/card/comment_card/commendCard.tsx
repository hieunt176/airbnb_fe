import { Avatar } from "@mui/material";
import React from "react";
import { useStyles } from "./useStyle";
import { Comment, Content } from "../../../pages/ask_super_host/steps_meeting_super_host/comments_card/commentsCard";

export interface Props {
  comment: Comment;
}

const CommentCard = (props: Props) => {
  const classes = useStyles(props);
  const { step, title, contents } = props.comment;

  const renderCommentContents = () => {
    if (!contents.length) return "";

    return contents.map((content: Content, key: number) => {
      const { avatarUrl, name, time, commentContent } = content;

      return (
        <div className={classes.comments} key={key}>
          <div className="avatar">
            <Avatar sx={{ width: 50, height: 50 }} alt="Travis Howard" src={avatarUrl} />
          </div>
          <div className="comments__content">
            <div className="client__name">
              <span className="name">{name}</span>
              <span className="time">{time}</span>
            </div>
            <div className="content">{commentContent}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.answer}>
        <div className={classes.box}>
          <p className="step">{step}</p>
          <div className="title">{title}</div>
          <div className="line"></div>
          {renderCommentContents()}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
