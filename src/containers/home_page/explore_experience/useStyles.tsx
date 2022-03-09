import { makeStyles } from "@mui/styles";

import imageExperienceLeft from "../../../assets/images/img_experience_1.jpeg";
import imageExperienceRight from "../../../assets/images/img_experience_2.jpeg";

export const useStyles = makeStyles({
  experience: {
    width: "85%",
    margin: "0 auto",
    paddingTop: "80px",
  },
  item: {
    padding: "40px",
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "10px",
    position: "relative",
    zIndex: 10,
  },
  left: {
    backgroundImage: `url(${imageExperienceLeft})`,
  },
  right: {
    backgroundImage: `url(${imageExperienceRight})`,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    height: "100%",
    background: "#22222211",
    zIndex: -1,
  },
  question: {
    marginTop: "80px",
    height: "450px",
    backgroundImage: "url(https://a0.muscache.com/im/pictures/a2704500-b282-4411-a2fb-d7f80c4c72a8.jpg?im_w=1200)",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
