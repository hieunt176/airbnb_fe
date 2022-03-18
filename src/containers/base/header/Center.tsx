import React from 'react';

import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import { useStyles } from './useStyles';

const Search = () => {
  const classes = useStyles();

  const handleClick = () => {
    const a = 0;
  };

  return (
    <Button className={classes.search} onClick={handleClick}>
      <p>Bắt đầu tìm kiểm</p>
      <SearchIcon className={classes.search_icon} />
    </Button>
  );
};

export default Search;
