import { makeStyles } from "@mui/styles";
import theme from "../../../theme";

export const useStyles = makeStyles({
  //FMP container
  fmp: {
    width: "100%",
    backgroundColor: "#000",
    [theme.breakpoints.up("xs")]: {
      overflow: "hidden",
    },
    [theme.breakpoints.down("xs")]: {
      overflow: "auto",
    },
  },

  fmp_left: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  title: {
    color: "#fff",
    fontSize: "64px",
    fontWeight: "500",
    lineHeight: "70px",
    maxWidth: "463px !important",
    marginBottom: "52px",
  },

  fmp_link: {
    color: "#fff",
    padding: "14px 24px",
    fontSize: "16px",
    fontWeight: "500",
    borderRadius: "8px",
    backgroundColor: "#e11860",
  },

  fmp_right: {},

  video: {
    width: "100%",
    minHeight: "100vh",
  },

  //Slider

  slick: {
    "& .slick-arrow": {
      top: "auto !important",
      bottom: "10px !important",

      "&:before": {
        color: "#222222",
        fontSize: 24,
      },
    },
    "& .slick-prev": {
      // right: "60%",
      left: "58% !important",
      zIndex: 10,
    },
    "& .slick-next": {
      left: "60%",
    },
  },
  slider: {
    width: "90%",
    margin: "150px auto 80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },

  slider_title: {
    color: "#000",
    fontSize: "64px",
    fontWeight: "500",
    lineHeight: "70px",
  },

  slider_item: {
    marginTop: "80px",
    width: "95% !important",
    textAlign: "left",
  },

  slider_img: {
    width: "100%",
  },

  item_infor: {
    marginTop: "48px !important",
    paddingRight: "24px",
  },

  item_label: {
    color: ":#222222 !important",
    fontSize: "26px !important",
    lineHeight: "30px !important",
  },

  item_host: {
    height: "32px",
    width: "auto",
    minHeight: "1px",
    marginTop: "34px !important",
  },

  item_place: {
    marginTop: "24px !important",
    color: "#717171 !important",
    fontSize: "16px !important",
  },
});
