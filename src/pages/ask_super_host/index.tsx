import React from "react";
import StepsMeetingSuperHost from "./steps_meeting_super_host/stepsMeetingSuperHost";
import IntroductionSuperHost from "./introduction/introductionSuperHost";
import Footer from "../../containers/base/footer/footer";
import UserManual from "./user_manual/userManual";

const AskSuperHost = () => {
  return (
    <div className="askSuperHost">
      <IntroductionSuperHost />
      <StepsMeetingSuperHost />
      <UserManual />
      <Footer />
    </div>
  );
};

export default AskSuperHost;
