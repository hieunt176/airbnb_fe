import { makeStyles } from "@mui/styles";
import { IDistanceCard } from "../../../@types/styles/card";

export const useStyles = makeStyles({
  card: {
    color: "#fff !important",
    background: (props: IDistanceCard) => props.background,
    height: "300px",
  },
  distance: {
    fontSize: "15px",
  },
  cardTitle: {
    fontSize: "27px",
    fontWeight: "600 !important",
    color: "#fff",
    marginBottom: "10px",
  },
});
