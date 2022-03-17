import Typography from "@mui/material/Typography";

import { TextStyle } from "../../@types/styles/TextStyle";
import { chooseElementH } from "../../utils/variant";
import { useStyles } from "./useStyles";

const H = (props: TextStyle) => {
  const { variant, children } = props;
  const variantText = chooseElementH(variant);
  const classes = useStyles(props);

  return (
    <Typography component="div" variant={variantText} className={classes.root}>
      <div>
        <span className={classes.text}>{children}</span>
      </div>
    </Typography>
  );
};

export default H;
