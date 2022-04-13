import React from "react";
import LightSilverButton from "../../../components/button/light_silver/lightSilver";
import { useStyles } from "./useStyle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Grid } from "@mui/material";

const IntroductionSuperHost = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.questionContent}>
        <p>Bạn có thắc mắc về việc đón tiếp khách?</p>
        <div>
          Bạn chỉ cần hỏi
          <span>
            <i>Huy</i>
          </span>
          , một Chủ nhà siêu cấp tại Dalat. Họ sẽ hướng dẫn cho bạn về mọi vấn đề liên quan đến hoạt động đón tiếp khách.
        </div>
        <LightSilverButton background="#5F002A !important" color="#fff !important">
          Hỏi ý kiến Chủ nhà siêu cấp
        </LightSilverButton>
      </div>
      <div className={classes.background}>
        <div className="leftContent">
          <div className="content">
            <span>Hỏi ý kiến Chủ nhà siêu cấp</span>
            <div>Nhận sự trợ giúp riêng, miễn phí từ những Chủ nhà xuất sắc nhất của Airbnb</div>
          </div>
        </div>
        <div className="rightContent">
          <video className="videoTag" autoPlay loop muted>
            <source src="https://a0.muscache.com/v/c1/77/c1776f77-b7d6-568b-94f7-4ebb82c47fc9/c1776f77b7d6568b94f74ebb82c47fc9_4000k_1.mp4" type="video/mp4" />
          </video>
          <div className="overlay"></div>
          <div className="title">
            <span>Steven · Đón tiếp khách từ năm 2016</span>
            <PlayArrowIcon className={classes.playIcon} />
          </div>
        </div>
      </div>
      <div className={classes.supportInformation}>
        <Grid container spacing={10}>
          <Grid item xs={4}>
            <div className="title">
              Mẹo và <br />
              hướng dẫn riêng
            </div>
            <span className="content">Chúng tôi đã kết nối bạn với một Chủ nhà siêu cấp giàu kinh nghiệm để được họ giải đáp mọi thắc mắc bất cứ khi nào bạn thấy thuận tiện nhất.</span>
          </Grid>
          <Grid item xs={4}>
            <div className="title">
              Trực tiếp trợ giúp bạn <br /> đăng cho thuê chỗ ở
            </div>
            <span className="content">Chủ nhà siêu cấp sẽ giúp bạn tạo mục cho thuê và chia sẻ lời khuyên về cách chụp ảnh, mô tả chỗ ở của bạn, v.v.</span>
          </Grid>
          <Grid item xs={4}>
            <div className="title">
              Chuẩn bị đón tiếp <br /> vị khách đầu tiên
            </div>
            <span className="content">Bạn sẽ nhận được sự hỗ trợ và hướng dẫn cần thiết để bắt đầu chào đón khách và giành được đánh giá tuyệt vời đầu tiên.</span>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default IntroductionSuperHost;
