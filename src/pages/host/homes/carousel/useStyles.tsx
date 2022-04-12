import { makeStyles } from "@mui/styles";
import theme from "../../../../theme";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#000",
    [theme.breakpoints.up("xs")]: {
      overflow: "hidden",
    },
    [theme.breakpoints.down("xs")]: {
      overflow: "auto",
    },
  },

  containTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  title: {
    color: "#fff",
    fontSize: "64px",
    fontWeight: "500",
    lineHeight: "70px",
    maxWidth: "463px !important",
    marginBottom: "52px",
  },

  content: {
    color: "#fff",
    fontSize: 18,
    margin: "0 40px 52px",
  },

  link: {
    color: "#fff",
    padding: "14px 24px",
    fontSize: "16px",
    fontWeight: "500",
    borderRadius: "8px",
    backgroundColor: "#e11860",
  },

  containVideo: {},

  video: {
    width: "100%",
    minHeight: "100vh",
  },
});
