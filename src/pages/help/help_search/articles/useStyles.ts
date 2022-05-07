import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  articles: {
    backgroundColor: "#fff",
    textAlign: "left",
    position: "absolute",
    width: 400,
    borderRadius: "40px",
    boxShadow: "rgba(0, 0, 0, 0.28) 0 8px 28px 0",
    top: "120%",
    zIndex: 100,
    padding: 20,
  },

  article: {
    display: "flex",
    padding: "15px 0",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    alignItems: "center",
    textDecoration: "none",
  },

  title: {
    marginLeft: 10,
  },
});
