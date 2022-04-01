import { makeStyles } from "@mui/styles";
import { Props } from "./commendCard";

export const useStyles = makeStyles({
  root: {
    backgroundImage: (props: Props) => `url(${props.comment.backgroundUrl || ""})`,
    height: "1050px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    marginBottom: "10px",
  },
  answer: {
    width: "600px",
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "45px 45px 0 45px",
    position: "absolute",
    bottom: 120,
    left: 150,
  },
  box: {
    "& .step": {
      fontSize: "18px",
      color: "#222222",
      fontWeight: "800",
    },
    "& .title": {
      fontSize: "32px",
      color: "#222222",
      fontWeight: "600",
      width: "65%",
    },
    "& .line": {
      borderBottom: "1px solid #DDDDDD",
      margin: "40px 0",
    },
  },
  comments: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "35px",
    "& .comments__content": {
      paddingLeft: "25px",
      "& .client__name": {
        marginBottom: "10px",
        "& .name": {
          color: "#222222",
          fontWeight: "800",
          fontSize: "16px",
        },
        "& .time": {
          color: "#717171",
          fontSize: "12px",
          marginLeft: "5px",
        },
      },
      "& .content": {
        width: "90%",
      },
    },
  },
  avatar: {},
});
