import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  menu: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  avt_btn: {
    background: "#ffffffff",
    width: 77,
    height: 42,
    marginLeft: "10px !important",
    border: "1px solid #dddddd !important",
    borderRadius: "21px !important",

    "&:hover": {
      backgroundColor: "#fff !important",
    },
  },

  menu_icon: {
    width: "20px !important",
    height: "20px !important",
    marginRight: 10,
  },

  link: {
    color: "#000 !important",
    fontWeight: 500,
    fontSize: 14,
    marginRight: "10px !important",
  },

  profile_menu: {
    width: 245,
    borderRadius: 20,
  },

  menu_item: {
    fontSize: "14px !important",
    paddingTop: "10px !important",
    paddingBottom: "10px !important",
  },

  register: {
    fontWeight: "500 !important",
  },
});
