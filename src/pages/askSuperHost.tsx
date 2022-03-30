import React from "react";
import Answer from "../containers/asksuperhost_answer/answer";
import QuestionContent from "../containers/asksuperhost_question/questionContent";
import WaysBooking from "../containers/asksuperhost_waysbooking/waysBooking";
import Footer from "../containers/base/footer/footer";

const AskSuperHost = () => {
  return (
    <div>
      <QuestionContent />
      <Answer />
      <WaysBooking />
      <Footer />
    </div>
  );
};

export default AskSuperHost;
