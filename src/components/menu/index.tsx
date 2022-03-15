import * as React from 'react';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import MenuIcon from '@mui/icons-material/Menu';

import IconButtonAB from '../button/icon_button/IconButtonAB';
import LanguageIcon from '@mui/icons-material/Language';

import { useStyles } from './useStyles';

export default function AccountMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box className={classes.menu}>
        <Typography>
          <Link href="#" underline="none" className={classes.link}>
            Trở thành chủ nhà
          </Link>
        </Typography>
        <Typography>
          <IconButtonAB />
        </Typography>

        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} className={classes.avt_btn}>
            <MenuIcon className={classes.menu_icon} />
            <img src="/image/avt-icon.svg" alt="avatar" />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          elevation: 0,
          sx: {
            borderRadius: 3,
          },
        }}
      >
        <div className={classes.profile_menu}>
          <MenuItem className={classes.menu_item + ' ' + classes.register}>
            Đăng ký
          </MenuItem>
          <MenuItem className={classes.menu_item}>Đăng nhập</MenuItem>
          <Divider />
          <MenuItem className={classes.menu_item}>Cho thuê nhà</MenuItem>
          <MenuItem className={classes.menu_item}>Tổ chức trải nghiệm</MenuItem>
          <MenuItem className={classes.menu_item}>Trợ giúp</MenuItem>
        </div>
      </Menu>
    </React.Fragment>
  );
}
