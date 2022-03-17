import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  primaryButton: {
    fontSize: "18px",
    padding: "14px 24px",
    border: "1px solid #fff",
    borderColor: "#fff",
    cursor: "pointer",
    textTransform: "none !important" as "none",
    background: "#fff !important",
    borderRadius: "150px",
    "&:hover": {
      background: "#F7F7F7 !important",
    },
  },
  primarySpan: {
    backgroundImage: "linear-gradient(90deg, #6F019C 0%, #C6017E 135.12%)",
    fontWeight: "600",
    WebkitBackgroundClip: "text !important",
    WebkitTextFillColor: "transparent !important",
  },
});
