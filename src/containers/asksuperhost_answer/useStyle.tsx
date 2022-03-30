import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    marginTop: "80px",
  },
  title: {
    width: "80%",
    margin: "0 auto",
  },
  informationAddition: {
    width: "80%",
    margin: "0 auto",
    color: "#5F002A ",
    padding: "80px",
    "& .intro": {
      display: "flex",
      alignItems: "flex-end",
      "& .avatar":{
        "& img":{
          borderRadius:"10px",
        }
      },
      "& .name__place": {
        paddingLeft: "25px",
        "& .name": {
          fontSize: "16px",
          fontWeight: "600",
        },
        "& .place": {
          fontSize: "16px",
          fontWeight: "400",
        },
      },
    },
    "& .content": {
      fontSize: "64px",
      fontWeight: "600",
      width: "60%",
      margin: "30px 0",
    },
  },
});
