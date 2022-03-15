import React from 'react';

import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@mui/material/IconButton';

import { useStyles } from './useStyles';

const IconButtonAB = () => {
  const classes = useStyles();
  return (
    <IconButton>
      <LanguageIcon className={classes.icon} />
    </IconButton>
  );
};

export default IconButtonAB;
