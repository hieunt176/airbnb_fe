import { makeStyles } from "@mui/styles";
import { BaseText } from "../../@types/styles/baseText";

import { TextStyle } from "../../@types/styles/TextStyle";

const baseText: TextStyle = {
  color: "#fff",
  fontWeight: "800",
  textAlign: "start",
  fontSize: "33px",
  padding: "0",
};

export const useStyles = makeStyles({
  root: {
    fontSize: "unset !important",
  },
  text: {
    color: (props: TextStyle) => props.color || baseText.color,
    fontWeight: (props: TextStyle) => props.fontWeight || baseText.fontWeight,
    textAlign: (props: TextStyle) => (props.textAlign as "start") || baseText.textAlign,
    fontSize: (props: TextStyle) => props.fontSize || baseText.fontSize,
    padding: (props: TextStyle) => props.padding || baseText.padding,
  },
});
