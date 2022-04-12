import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: 40,
    fontWeight: "500",

    "& .MuiInputBase-root": {
      fontSize: 40,
      fontWeight: "500",
      border: "none !important",
      marginBottom: 32,
    },
  },

  title: {
    color: "#717171",
  },

  income: {
    color: "#222",
    marginBottom: 32,
  },

  link: {
    color: "#222",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 32,
  },
});
