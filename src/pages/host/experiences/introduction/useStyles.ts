import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    position: "relative",
  },

  banner: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#fff",
  },

  bannerContainer: {
    width: 1080,
    margin: "100px auto",
  },
  video: {
    width: "100%",
  },

  videoTitle: {
    position: "absolute",
    top: "90%",
    width: 1080,
    left: "50%",

    transform: "translate(-50%, -50%)",
  },
});
