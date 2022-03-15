import React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import { useStyles } from './useStyles';

const SearchDetail = () => {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <TextField
        label="Địa điểm"
        placeholder="Bạn sắp đi đâu?"
        variant="standard"
        className={classes.input}
      />
      <TextField
        label="Nhận Phòng"
        variant="standard"
        placeholder="Thêm ngày"
        className={classes.input}
      />
      <TextField
        label="Trả phòng"
        variant="standard"
        placeholder="Thêm ngày"
        className={classes.input}
      />
      <TextField
        label="Khách"
        variant="standard"
        placeholder="Thêm khách"
        className={classes.input}
      />
      <Button type="submit">
        <SearchIcon className={classes.search_icon} />
      </Button>
    </form>
  );
};

export default SearchDetail;
