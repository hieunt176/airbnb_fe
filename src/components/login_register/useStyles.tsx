import { makeStyles } from "@mui/styles";
import theme from "../../theme";

export const useStyles = makeStyles({
  menu_item: {
    fontSize: "14px !important",
    padding: "0px !important",
    margin: "0px !important",
    color: "#212121 !important",
    fontWeight: "400 !important",
    minWidth: "auto !important",
  },

  dialog_title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1em !important",
    fontWeight: "700 !important",
    minHeight: "64px !important",
    padding: "0px !important",
  },

  dialog_content: {
    padding: "24px !important",
  },

  submit: {
    width: "100%",
    padding: "8px 24px !important",
    backgroundColor: "rgb(227 29 88) !important",
    fontSize: "16px !important",
    borderRadius: "8px !important",
    margin: "16px 0 24px 0 !important",
  },

  btn: {
    width: "100%",
    height: "48px !important",
    marginTop: "16px !important",
    borderColor: "rgb(0, 0, 0) !important",
    borderRadius: "8px !important",
    display: "flex !important",
    justifyContent: "space-between !important",

    "&:hover": {
      background: "rgb(247, 247, 247) !important",
      color: "rgb(34, 34, 34) !important",
    },
  },

  link_btn: {
    textDecoration: "none",
    color: "rgb(38 38 38) !important",
  },
});
