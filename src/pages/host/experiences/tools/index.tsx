import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";

import ExperienceTitle from "../experience_title";
import ToolForYou from "./tool_for_you";
import ExperienceCard, { IExperieceCard } from "../experience_card";
import LightSilverButton from "../../../../components/button/light_silver/lightSilver";
import H from "../../../../components/typography/h";
import { BaseCard } from "../../../../@types/styles/baseCard";
import { useStyles } from "./useStyles";

export const Tools = () => {
  const classes = useStyles();

  const toolTitle: BaseCard = {
    title: "Chúng tôi luôn bảo vệ bạn trên mỗi bước đường",
    content:
      "Các tài nguyên như bài viết và thông tin chi tiết thiết kế riêng cho nhu cầu tiếp đón khách của bạn, hỗ trợ khách hàng 24/7 cho bạn và khách, tiếp xúc với trải nghiệm của bạn, v.v.",
  };

  const guideTitle: BaseCard = {
    title: "Hướng dẫn để bắt đầu",
    content:
      "Dưới đây là thông tin tổng quan nhanh về quy trình từ đầu đến cuối.",
  };

  const tools: IExperieceCard[] = [
    {
      img: "https://a0.muscache.com/im/pictures/05cf8430-7f5d-43e5-a28b-5cf75b51f509.jpg?im_w=720",
      title:
        "Chương trình AirCover cho Chủ nhà/Người tổ chức cũng áp dụng cho Trải nghiệm",
      content:
        "Chương trình AirCover cho Chủ nhà/Người tổ chức bao gồm khoản bảo hiểm trách nhiệm Trải nghiệm trị giá 1 triệu USD, áp dụng trong trường hợp hy hữu khi khách bị thương tổn trong quá trình tham gia Trải nghiệm Airbnb. Luôn được áp dụng và luôn miễn phí.",
      link: "Tìm hiểu thêm",
      backgroundColor: "#f2f2f2",
      height: "468px",
    },
    {
      img: "/images/experiences.png",
      title: "Hướng dẫn giúp bạn phát triển",
      content:
        "Bản tin hàng tuần, bài viết và tài nguyên được thiết kế riêng để giúp bạn thành công trong mỗi bước trong hành trình đón tiếp khách.",

      backgroundColor: "#f2f2f2",
      height: "468px",
    },
  ];

  const guides: IExperieceCard[] = [
    {
      img: "/images/experiences_1.png",
      title: "Tìm hiểu về tiêu chuẩn chất lượng của chúng tôi",
      content:
        "Đảm bảo trải nghiệm của bạn đáp ứng các yêu cầu về chuyên môn, quyền truy cập nội bộ và kết nối của chúng tôi.",
      backgroundColor: "#f2f2f2",
      height: "274px",
    },
    {
      img: "/images/experiences_2.png",
      title: "Tạo trang trải nghiệm",
      content:
        "Trang của bạn sẽ giúp mọi người tìm thấy bạn. Tạo ấn tượng ban đầu thật tốt bằng cách làm nổi bật tính chuyên môn của bạn và đăng những hình ảnh chất lượng cao.",
      backgroundColor: "#f2f2f2",
      height: "274px",
    },
    {
      img: "/images/experiences_3.png",
      title: "Bắt đầu tổ chức trải nghiệm của bạn",
      content:
        "Nếu trải nghiệm của bạn đã đáp ứng các tiêu chuẩn, bạn có thể lên lịch và bắt đầu tổ chức.",
      backgroundColor: "#f2f2f2",
      height: "274px",
    },
  ];

  const renderCard = (items: IExperieceCard[]) => {
    return items.map((item: IExperieceCard, key: number) => {
      return (
        <Grid item key={key} md={12 / items.length}>
          <ExperienceCard experience={item} />
        </Grid>
      );
    });
  };

  return (
    <Fragment>
      <ExperienceTitle experienceTitle={toolTitle} />
      <div className={classes.tool}>
        <div className={classes.toolContent}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <Grid item md={6}>
              <ToolForYou />
            </Grid>
            <Grid item md={6}>
              <H fontSize="24px" color="#484848" lineHeight="2">
                Công cụ dành riêng cho bạn
              </H>
              <H fontSize="16px" color="#484848" fontWeight="400">
                Bảng điều khiển cung cấp cho bạn thông tin chi tiết, phản hồi về
                cách cải thiện, khả năng hiển thị đối với khách từ khắp nơi trên
                thế giới thông qua tìm kiếm và các bộ lọc, thanh toán dễ dàng và
                nhiều hơn nữa.
              </H>
            </Grid>
          </Grid>
        </div>
      </div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={4}
        className={classes.tool}
      >
        {renderCard(tools)}
      </Grid>

      <ExperienceTitle experienceTitle={guideTitle} />

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        className={classes.tool}
      >
        {renderCard(guides)}
      </Grid>
      <div className={classes.btn}>
        <LightSilverButton
          color="#fff"
          background="#000 !important"
          fontSize="16px !important"
          padding="12px 24px !important"
        >
          Đi thôi
        </LightSilverButton>
      </div>
    </Fragment>
  );
};

export default Tools;
