import { makeStyles } from "@mui/styles";

import { TextStyle } from "../../@types/styles/TextStyle";

export const useStyles = makeStyles({
  root: {
    background: (props: TextStyle) => props.background,
    fontSize: (props: TextStyle) => props.fontSize,
    color: (props: TextStyle) => props.color,
    fontWeight: (props: TextStyle) => props.fontWeight,
    margin: (props: TextStyle) => props.margin,
    padding: (props: TextStyle) => props.padding,
    paddingBottom: (props: TextStyle) => props.paddingBottom,
    flexGrow: (props: TextStyle) => props.flexGrow,
    textAlign: (props: TextStyle) => props.textAlign as "start",
  },
});
