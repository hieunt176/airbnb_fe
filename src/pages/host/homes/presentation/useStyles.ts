import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  question: {
    margin: "24px 48px",
    height: 625,
    backgroundImage:
      "url(https://a0.muscache.com/im/pictures/93ef1829-62d1-4349-8b4a-b02ebc650a25.jpg?im_w=2560&im_q=highq?im_w=2560&im_q=highq)",
    borderRadius: "12px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  textQuestion: {
    marginBottom: 78,
  },

  airCover: {
    margin: "60px 48px",
    backgroundColor: "#F7F7F7 !important",
    borderRadius: "12px",
    display: "flex",
  },

  airCoverLeft: {
    width: "50%",
    marginLeft: 80,
    marginRight: 32,
    marginTop: "auto",
    marginBottom: "auto",
    lineHeight: "100px",
  },

  airCoverRight: {
    width: "50%",
    padding: "100px 0",

    "& img": {
      width: "100%",
      height: "100%",
    },
  },
});
