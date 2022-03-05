import { makeStyles } from "@mui/styles";

import { TextStyle } from "../../@types/TextStyle";

export const useStyles = makeStyles({
  root: {
    background: (props: TextStyle) => props.background,
    fontSize: (props: TextStyle) => props.fontSize,
    color: (props: TextStyle) => props.color,
    fontWeight: (props: TextStyle) => props.fontWeight,
    margin: (props: TextStyle) => props.margin,
    padding: (props: TextStyle) => props.padding,
    textAlign: (props: TextStyle) => props.textAlign,
  },
});
