import React from "react";

import { useStyles } from "./useStyles";

import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

import Menu from "../../../components/menu";
import Center from "./Center";
import Search from "./Search";

const Header = () => {
  const [center, setCenter] = React.useState(<Center />);

  const handleClick = () => {
    setCenter(<Search />);
  };

  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div>
        <Stack className={classes.content} direction="row">
          <Link href="#" className={classes.hidden}>
            <img src="/images/logo_red.svg" alt="logo" />
          </Link>

          <div onClick={handleClick}>{center}</div>
          <div className={classes.hidden}>
            <Menu />
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default Header;
