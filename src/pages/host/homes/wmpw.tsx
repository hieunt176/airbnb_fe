import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useStyles } from "./useStyles";

export default function WMPW() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const homeTypes: String[] = ["Toàn bộ nhà", "Phòng chung", "Phòng riêng"];

  const handleChange = (e: SelectChangeEvent) => {
    setAge(e.target.value);
  };

  const renderHomeTypes = () => {
    homeTypes.map((homeType, index) => {
      return (
        <MenuItem key={index} value={index}>
          {homeType}
        </MenuItem>
      );
    });
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select value={age} onChange={handleChange}>
          <MenuItem value={0}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
    </div>
  );
}
