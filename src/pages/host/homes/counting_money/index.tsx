import * as React from "react";
import MenuItem from "@mui/material/MenuItem";

import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useStyles } from "./useStyles";

export default function CountingMoney() {
  const classes = useStyles();
  const [homeType, setHoneType] = React.useState("0");
  const [numCustomer, setNumCustomer] = React.useState("3");
  const [place, setPlace] = React.useState("0");
  const [income, setIncome] = React.useState("235");
  const numCustomers: Number[] = new Array();
  const homeTypes: String[] = ["Toàn bộ nhà", "Phòng chung", "Phòng riêng"];
  const places: String[] = ["Thành phố Hồ Chí Minh"];

  const changeHomeType = (e: SelectChangeEvent) => {
    setHoneType(e.target.value);
  };

  const changeNumCustomer = (e: SelectChangeEvent) => {
    setNumCustomer(e.target.value);
  };

  const changePlace = (e: SelectChangeEvent) => {
    setPlace(e.target.value);
  };

  for (let i = 1; i <= 16; i++) {
    numCustomers.push(i);
  }

  return (
    <div className={classes.root}>
      <span className={classes.title}>Bạn muốn cho thuê loại chỗ ở nào?</span>
      <Select value={homeType} onChange={changeHomeType}>
        {homeTypes.map((homeType, index) => (
          <MenuItem key={index} value={index}>
            {homeType}
          </MenuItem>
        ))}
      </Select>
      <span className={classes.title}>Bạn muốn cho thuê loại chỗ ở nào?</span>
      <Select value={numCustomer} onChange={changeNumCustomer}>
        {numCustomers.map((customer, index) => (
          <MenuItem key={index} value={index}>
            {customer + " Khách"}
          </MenuItem>
        ))}
      </Select>
      <span className={classes.title}>Bạn muốn cho thuê loại chỗ ở nào?</span>
      <Select value={place} onChange={changePlace}>
        {places.map((place, index) => (
          <MenuItem key={index} value={index}>
            {place}
          </MenuItem>
        ))}
      </Select>
      <span className={classes.income}>Kiếm tới ${income}/tháng*</span>

      <a href="#" className={classes.link}>
        Cách chúng tôi ước tính thu nhập tiềm năng của bạn
      </a>
    </div>
  );
}
