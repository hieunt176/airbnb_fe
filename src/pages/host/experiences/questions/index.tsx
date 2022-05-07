import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";

import Question from "./Question";
import ExperienceTitle from "../experience_title";
import { BaseCard } from "../../../../@types/styles/baseCard";
import { useStyles } from "./useStyles";

export interface IQuestion {
  question: string;
  answer: string;
}

const Questions = () => {
  const classes = useStyles();

  const [textBtn, setTextBtn] = useState<string[]>(["0", "Hiển thị thêm"]);

  const toolTitle: BaseCard = {
    title: "Câu hỏi thường gặp",
  };

  const questions: IQuestion[] = [
    {
      question: "Để tổ chức một trải nghiệm, tôi có cần phải cho thuê nhà?",
      answer:
        "Không. Bạn không bắt buộc phải nhận khách ở qua đêm tại nhà hoặc chỗ của mình để có thể trở thành người tổ chức trải nghiệm.",
    },
    {
      question: "Để tổ chức một trải nghiệm, tôi có cần phải cho thuê nhà?",
      answer:
        "Không. Bạn không bắt buộc phải nhận khách ở qua đêm tại nhà hoặc chỗ của mình để có thể trở thành người tổ chức trải nghiệm.",
    },
    {
      question: "Để tổ chức một trải nghiệm, tôi có cần phải cho thuê nhà?",
      answer:
        "Không. Bạn không bắt buộc phải nhận khách ở qua đêm tại nhà hoặc chỗ của mình để có thể trở thành người tổ chức trải nghiệm.",
    },
    {
      question: "Để tổ chức một trải nghiệm, tôi có cần phải cho thuê nhà?",
      answer:
        "Không. Bạn không bắt buộc phải nhận khách ở qua đêm tại nhà hoặc chỗ của mình để có thể trở thành người tổ chức trải nghiệm.",
    },
    {
      question: "Để tổ chức một trải nghiệm, tôi có cần phải cho thuê nhà?",
      answer:
        "Không. Bạn không bắt buộc phải nhận khách ở qua đêm tại nhà hoặc chỗ của mình để có thể trở thành người tổ chức trải nghiệm.",
    },
    {
      question: "Để tổ chức một trải nghiệm, tôi có cần phải cho thuê nhà?",
      answer:
        "Không. Bạn không bắt buộc phải nhận khách ở qua đêm tại nhà hoặc chỗ của mình để có thể trở thành người tổ chức trải nghiệm.",
    },
  ];

  const renderQuestion = () => {
    return questions.map((question: IQuestion, key: number) => {
      if (key > 2 && textBtn[0] === "0") {
        return;
      } else {
        return <Question qa={question} key={key} />;
      }
    });
  };

  const handleClick = () => {
    if (textBtn[0] === "0") {
      setTextBtn(["1", "Hiển thị ít hơn"]);
    } else {
      setTextBtn(["0", "Hiển thị thêm"]);
    }
  };

  return (
    <Fragment>
      <ExperienceTitle experienceTitle={toolTitle} />
      <div className={classes.question}>
        {renderQuestion()}
        <Button variant="text" onClick={handleClick}>
          {textBtn[1]}
        </Button>
      </div>
    </Fragment>
  );
};

export default Questions;
