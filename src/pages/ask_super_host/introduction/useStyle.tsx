import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {},
  questionContent: {
    color: "#5F002A",
    width: "80%",
    margin: "0 auto",
    marginBottom: "100px",
    "& p": {
      fontSize: "32px",
      marginBottom: "40px",
    },
    "& div": {
      fontSize: "64px",
      fontWeight: "600",
      marginBottom: "40px",
    },
    "& span": {
      fontFamily: "AirbnbPlusScript,Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important",
      color: "#222222",
      fontWeight: "400 !important",
    },
  },
  background: {
    display: "flex",
    "& .left__content": {
      background: "#5F002A",
      width: "50%",
      display: "flex",
      padding: "40px 0",
      flexDirection: "column",
      justifyContent: "flex-end",
      "& span": {
        color: "#fff",
        fontSize: "22px",
      },
      "& div": {
        color: "#fff",
        fontSize: "32px",
        marginBottom: "16px",
        fontWeight: "600",
        marginTop: "16px",
      },
      "& .content": {
        width: "60%",
        margin: "0 auto",
      },
    },
    "& .right__content": {
      width: "50%",
      position: "relative",
      "& video": {
        width: "100%",
      },
      "& .overlay": {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage: "linear-gradient(#ffffff0a, #00000085)",
        top: 0,
        left: 0,
      },
      "& .title": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        color: "rgb(255, 255, 255)",
        fontWeight: "800",
        width: "100%",
        textAlign: "center",
      },
    },
  },
  playIcon: {
    position: "relative",
    right: "-15%",
    cursor: "pointer",
  },
  supportInformation: {
    marginTop: "100px",
    width: "80%",
    margin: "0 auto",
    "& .title": {
      fontSize: "26px",
      color: "#222222",
      padding: "20px 0 ",
      fontWeight: "600",
    },
    "& .content": {
      fontSize: "18px",
      color: "#484848",
      lineHeight: "24px",
    },
  },
});
