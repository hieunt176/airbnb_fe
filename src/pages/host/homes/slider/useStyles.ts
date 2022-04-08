import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
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
