import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {},
  dialog: {
    "& .MuiPaper-root": {
      maxWidth: "900px !important",
      width: "900px",
      height: "550px",
      borderRadius: "14px !important",
      "& .MuiDialogContent-root": {
        padding: "0 !important",
        overflowY: "hidden !important",
      },
    },
    "& #alert-dialog-slide-description": {
      display: "flex",
      height: "100%",
      "& .left__content": {
        width: "50%",
        padding: "20px 0",
        "& .control__item": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "0 20px",
          "& .clear__icon": {
            cursor: "pointer",
          },
          "& p": {
            color: "rgb(34, 34, 34)",
            fontSize: "40px",
            fontWeight: "600",
            padding: "0 30px",
          },
        },
      },
      "& .right__content": {
        width: "50%",
        background: "#2222",
        "& video": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
    },
  },
});
