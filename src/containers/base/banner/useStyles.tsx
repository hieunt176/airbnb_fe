import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  banner: {
    backgroundImage: "linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 50%, #000000 50%, #000000 100%)",
  },
  background: {
    width: "85%",
    margin: "0 auto",
    backgroundImage: "url(https://a0.muscache.com/im/pictures/a2704500-b282-4411-a2fb-d7f80c4c72a8.jpg?im_w=1200)",
    height: "600px",
    borderRadius: "10px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: "50px",
  },
  title: {
    marginBottom: "25px",
  },
});
