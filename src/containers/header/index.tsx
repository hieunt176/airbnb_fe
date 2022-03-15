import React from 'react';

import { useStyles } from './useStyles';

import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

import Menu from '../../components/menu';
import Center from '../home_page/header/Center';
import Search from '../home_page/header/Search';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div>
        <Stack className={classes.content} direction="row">
          <Link href="#" className={classes.hidden}>
            <img src="/image/logo_red.svg" alt="logo" />
          </Link>
          {/* <Search /> */}
          <Center />
          <div className={classes.hidden}>
            <Menu />
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default Header;
