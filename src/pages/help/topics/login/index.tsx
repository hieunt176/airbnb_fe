import React from "react";
import Grid from "@mui/material/Grid";

import LightSilverButton from "../../../../components/button/light_silver/lightSilver";
import H from "../../../../components/typography/h";
import { useStyles } from "./useStyles";

const Login = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item md={6}>
        <H
          fontSize="26px"
          color="rgb(34,34,34)"
          fontWeight="600"
          lineHeight="1.5em"
        >
          Chúng tôi luôn sẵn sàng hỗ trợ bạn
        </H>
        <H fontSize="16px" color="rgb(34,34,34)" fontWeight="400">
          Đăng nhập để được trợ giúp về đặt phòng/đặt chỗ, tài khoản và các vấn
          đề khác.
        </H>
      </Grid>
      <Grid item md={1}></Grid>
      <Grid item md={5} className={classes.btn}>
        <LightSilverButton
          color="fff"
          background="linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%) !important"
        >
          <H fontSize="16px" padding="10px 90px !important">
            Đăng nhập hoặc đăng ký
          </H>
        </LightSilverButton>
      </Grid>
    </Grid>
  );
};

export default Login;
