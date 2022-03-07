import { makeStyles } from "@mui/styles";
import { ButtonStyle } from "../../../@types/ButtonStyle";

export const useStyles = makeStyles({
  primaryButton: {
    fontSize: (props: ButtonStyle) => props.fontSize,
    color: (props: ButtonStyle) => props.color,
    height: (props: ButtonStyle) => props.height,
    width: (props: ButtonStyle) => props.width,
    borderRadius: (props: ButtonStyle) => props.borderRadius,
    margin: (props: ButtonStyle) => props.margin,
    padding: (props: ButtonStyle) => props.padding,
    border: "1px solid #fff",
    borderColor: "#fff",
    cursor: "pointer",
    textTransform: "none !important" as "none",
    background: "#fff !important",
    '&:hover':{
        background: "#F7F7F7 !important",
    }
  },
  primarySpan: {
    backgroundImage: (props: ButtonStyle) => props.background,
    fontWeight: (props: ButtonStyle) => props.fontWeight,
    WebkitBackgroundClip: "text !important",
    WebkitTextFillColor: "transparent !important",
  },
});
