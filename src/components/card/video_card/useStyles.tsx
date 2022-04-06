import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "80px 0",
  },
  content: {
    position: "relative",

    "& .sub": {
      position: "absolute",
      bottom: 20,
      left: 20,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      width: "85%",
    },
    "& img": {
      width: "100%",
    },
  },
  title: {
    fontSize: "15px",
    color: "#ffff",
    fontWeight: "600",
    width: "70%",
  },
  playIcon: {
    cursor: "pointer",
    width: "50px",
    height: "50px",
    background: "#fff",
    borderRadius: "50%",
  },
});
