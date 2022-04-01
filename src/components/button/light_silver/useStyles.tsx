import { makeStyles } from "@mui/styles";
import { BaseButton } from "../../../@types/styles/baseButton";
import { baseButton } from "../../../constants/style/baseButtonStyle";

const { color, background } = baseButton;

export const useStyles = makeStyles({
  rootButton: {
    padding: "14px 24px !important",
    background: (props: BaseButton) => props.background || background,
    color: (props: BaseButton) => props.color || color,
    borderRadius: "8px !important",
    textTransform: "none !important" as "none",
    fontSize: "18px !important"
  },
});

