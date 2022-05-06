import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    marginTop: 100,
    textAlign: "center",
  },

  search: {
    width: 400,
    height: 70,
    margin: "10px auto",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "flex",
    border: "1px solid #dddddd",
    borderRadius: "100px",
    padding: "0 20px",
  },

  search_icon: {
    padding: 6,
    borderRadius: "50%",
    backgroundColor: "#ff385c",
    color: "#fff !important",
    marginRight: "-40px !important",
  },
});
