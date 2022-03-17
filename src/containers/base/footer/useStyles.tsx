import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  footer: {
    paddingTop: "40px",
    height: "400px",
    "& a": {
      textDecoration: "none",
      color: "rgb(34, 34, 34) !important",
      fontSize: "14px",
      outline: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  content: {
    margin: "0 auto",
    width: "85%",
  },
  outstandingText: {
    fontSize: "unset !important",
    color: "rgb(34, 34, 34)",
  },
  information: {
    marginBottom: "40px",
    "& ul": {
      listStyle: "none",
      padding: "0",
      marginTop: "0",
    },
    "& ul li ": {
      marginTop: "20px",
    },
  },
  contact: {
    borderTop: "1px solid rgb(221, 221, 221) !important",
    padding: "24px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContact: {
    display: "flex",
    color: "rgb(34, 34, 34) !important",
    fontSize: "14px",
    "& span": {
      display: "inline-block ",
      textAlign: "center ",
      width: "19px ",
    },
  },
  rightContact: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  language: {
    paddingRight: "20px",
    "& span": {
      fontWeight: 600,
      textDecoration: "underline",
      fontSize: "14px",
    },
  },
  money: {
    paddingRight: "20px",
    fontSize: "14px",
    "& span:last-child": {
      paddingLeft: "7px",
      fontWeight: 600,
      textDecoration: "underline",
    },
  },
  iconContact: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "140px",
  },
  icon: {
    cursor: "pointer",
  },
});
