import React, { Fragment } from "react";

import H from "../../../../../components/typography/h";
import { IQuestion } from "../";

export interface Props {
  qa: IQuestion;
}

const Question = (props: Props) => {
  const { question, answer } = props.qa;

  return (
    <Fragment>
      <H fontSize="18px" color="#484848" fontWeight="600" lineHeight="2em">
        {question}
      </H>
      <H fontSize="16px" color="#484848" fontWeight="400">
        {answer}
      </H>
      <br />
      <hr />
      <br />
    </Fragment>
  );
};

export default Question;
