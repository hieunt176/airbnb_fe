import { makeStyles } from "@mui/styles";
import { CardTripStyle } from "../../@types/styles/CardTripStyle";

export const useStyles = makeStyles({
  card: {
    color: "#fff !important",
    background: (props: CardTripStyle) => props.background,
    height: "300px"
  },
  distance: {
    fontSize: "15px",
  },
});
