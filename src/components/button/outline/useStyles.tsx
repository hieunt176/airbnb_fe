import { makeStyles } from "@mui/styles";
import { baseButton } from "../../../constants/style/baseButtonStyle";
import { BaseButton } from "../../../@types/styles/baseButton";

const { fontSize, padding } = baseButton;

export const useStyles = makeStyles({
  rootButton: {
    color: "#ffff !important",
    borderRadius: "8px !important",
    border: "1px solid #ffff !important",
    fontSize: (props: BaseButton) => props.fontSize || fontSize,
    padding: (props: BaseButton) => props.padding || padding,
    textTransform: "none !important" as "none",
  },
});
