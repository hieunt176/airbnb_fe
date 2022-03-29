import { makeStyles } from "@mui/styles";
import { TextStyle } from "../../@types/styles/TextStyle";
import { baseText } from "../../constants/style/baseTextStyle";

const { color, fontWeight, textAlign, fontSize, padding } = baseText;

export const useStyles = makeStyles({
  root: {
    fontSize: "unset !important",
  },
  text: {
    color: (props: TextStyle) => props.color || color,
    fontWeight: (props: TextStyle) => props.fontWeight || fontWeight,
    textAlign: (props: TextStyle) => (props.textAlign as "start") || textAlign,
    fontSize: (props: TextStyle) => props.fontSize || fontSize,
    padding: (props: TextStyle) => props.padding || padding,
  },
});
