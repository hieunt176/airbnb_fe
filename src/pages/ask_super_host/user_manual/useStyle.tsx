import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    marginTop: "80px",
    background: "#000000",
  },
  body: {
    paddingTop: "50px",
    width: "80%",
    margin: " 0 auto",
    "& .text": {
      color: "#fff",
      padding: "20px 0",
      fontSize: "18px",
    },
  },
  buttonGroup: {
    display: "flex",
    gap: "20px",
  },
  slider: {},
});
