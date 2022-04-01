import React from "react";
import StepsMeetingSuperHost from "./steps_meeting_super_host/stepsMeetingSuperHost";
import IntroductionSuperHost from "./introduction/introductionSuperHost";
import Footer from "../../containers/base/footer/footer";

const AskSuperHost = () => {
  return (
    <div>
      <IntroductionSuperHost />
      <StepsMeetingSuperHost />
      <Footer />
    </div>
  );
};

export default AskSuperHost;
