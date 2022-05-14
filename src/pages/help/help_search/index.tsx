import React, { useState } from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

import Articles from "./articles";
import H from "../../../components/typography/h";
import { useStyles } from "./useStyles";

const HelpSearch = () => {
  const classes = useStyles();

  const articles: string[] = [
    "Hủy đặt phòng",
    "Thay đổi ngày hoặc thời gian Đặt trải nghiệm",
    "Nếu Chủ nhà/Người tổ chức hủy đặt phòng/đặt chỗ của bạn",
  ];

  const [showArticles, setShowArticles] = useState<Boolean>(false);

  const handleFocused = () => {
    setShowArticles(true);
  };

  const handleClickAway = () => {
    setShowArticles(false);
  };

  return (
    <div className={classes.root}>
      <H fontSize="48px" color="#000" fontWeight="600">
        Xin chào! Chúng tôi có thể giúp gì cho bạn?
      </H>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box className={classes.search}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Tìm kiếm thông tin hướng dẫn và những thông tin khác"
            onFocus={handleFocused}
          />
          <Button type="submit">
            <SearchIcon className={classes.search_icon} />
          </Button>
          {showArticles ? <Articles articles={articles} /> : ""}
        </Box>
      </ClickAwayListener>
    </div>
  );
};

export default HelpSearch;
