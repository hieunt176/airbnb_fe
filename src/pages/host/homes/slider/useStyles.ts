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

  sliderTitle: {
    color: "#000",
    fontSize: "64px",
    fontWeight: "500",
    lineHeight: "70px",
  },

  sliderItem: {
    marginTop: "80px",
    width: "95% !important",
    textAlign: "left",
  },

  sliderImg: {
    width: "100%",
  },

  itemInfor: {
    marginTop: "48px !important",
    paddingRight: "24px",
  },

  itemLabel: {
    color: ":#222222 !important",
    fontSize: "26px !important",
    lineHeight: "30px !important",
  },

  itemHost: {
    height: "32px",
    width: "auto",
    minHeight: "1px",
    marginTop: "34px !important",
  },

  itemPlace: {
    marginTop: "24px !important",
    color: "#717171 !important",
    fontSize: "16px !important",
  },
});
