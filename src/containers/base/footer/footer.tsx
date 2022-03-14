import React from "react";

import { Grid } from "@mui/material";
import { useStyles } from "./useStyles";
import H from "../../../components/typography/h";
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import PhotoCameraSharpIcon from '@mui/icons-material/PhotoCameraSharp';
import FlutterDashSharpIcon from '@mui/icons-material/FlutterDashSharp';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.information}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <H variant="h6" fontSize="unset !important" color="rgb(34, 34, 34)">
                Hỗ trợ
              </H>
              <ul>
                <li>
                  <a href="/#">Trung tâm trợ giúp</a>
                </li>
                <li>
                  <a href="/#">Thông tin an toàn</a>
                </li>
                <li>
                  <a href="/#">Các tùy chọn hủy</a>
                </li>
                <li>
                  <a href="/#">Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</a>
                </li>
                <li>
                  <a href="/#">Hỗ trợ người khuyết tật</a>
                </li>
                <li>
                  <a href="/#">Báo cáo lo ngại của hàng xóm</a>
                </li>
              </ul>
            </Grid>
            <Grid item xs={3}>
              <H variant="h6" fontSize="unset !important" color="rgb(34, 34, 34)">
                Cộng đồng
              </H>
              <ul>
                <li>
                  <a href="/#">Airbnb.org: nhà ở cứu trợ</a>
                </li>
                <li>
                  <a href="/#">Hỗ trợ dân tị nạn Afghanistan</a>
                </li>
                <li>
                  <a href="/#">Chống phân biệt đối xử</a>
                </li>
              </ul>
            </Grid>
            <Grid item xs={3}>
              <H variant="h6" fontSize="unset !important" color="rgb(34, 34, 34)">
                Đón tiếp khách
              </H>
              <ul>
                <li>
                  <a href="/#">Thử đón tiếp khách</a>
                </li>
                <li>
                  <a href="/#">AirCover: bảo vệ cho Host</a>
                </li>
                <li>
                  <a href="/#">Xem tài nguyên đón tiếp khách</a>
                </li>
                <li>
                  <a href="/#">Truy cập diễn đàn cộng đồng</a>
                </li>
                <li>
                  <a href="/#">Đón tiếp khách có trách nhiệm</a>
                </li>
              </ul>
            </Grid>
            <Grid item xs={3}>
              <H variant="h6" fontSize="unset !important" color="rgb(34, 34, 34)">
                Giới thiệu
              </H>
              <ul>
                <li>
                  <a href="/#">Trang tin tức</a>
                </li>
                <li>
                  <a href="/#">Tìm hiểu các tính năng mới</a>
                </li>
                <li>
                  <a href="/#">Thư ngỏ từ các nhà sáng lập</a>
                </li>
                <li>
                  <a href="/#">Cơ hội nghề nghiệp</a>
                </li>
                <li>
                  <a href="/#">Nhà đầu tư</a>
                </li>
                <li>
                  <a href="/#">Airbnb Luxe</a>
                </li>
              </ul>
            </Grid>
          </Grid>
        </div>
        <div className={classes.contact}>
          <div className={classes.leftContact}>
            <div>© 2022 Airbnb, Inc.</div>
            <div>
              <span>·</span>
              <a href="/#">Quyền riêng tư</a>
              <span>·</span>
              <a href="/#">Điều khoản</a>
              <span>·</span>
              <a href="/#">Sơ đồ trang web</a>
            </div>
          </div>
          <div className={classes.rightContact}>
            <div className={classes.language}>
              <span>Tiếng Việt (VN)</span>
            </div>
            <div className={classes.money}>
              <span>$</span>
              <span>USD</span>
            </div>
            <div className={classes.iconContact}>
              <FacebookSharpIcon className={classes.icon}/>
              <PhotoCameraSharpIcon className={classes.icon}/>
              <FlutterDashSharpIcon className={classes.icon}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
