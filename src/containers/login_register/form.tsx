import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

import H from "../../components/typography/h";
import { useStyles } from "./useStyles";

interface State {
  country: string;
  countryCode: string;
  phoneNumber: string;
}
export default function Form() {
  const classes = useStyles();
  const country: State[] = [
    {
      country: "Vietnam",
      countryCode: "(+84)",
      phoneNumber: "",
    },
    {
      country: "China",
      countryCode: "(+86)",
      phoneNumber: "",
    },
    {
      country: "Japan",
      countryCode: "(+81)",
      phoneNumber: "",
    },
  ];
  const [values, setValues] = React.useState<State>(country[0]);

  const handleChangeCode = () => {
    //
    console.log("okokok");
  };

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleSubmit = () => {};

  return (
    <form action="" onSubmit={handleSubmit}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Quốc gia/Khu vực
          </InputLabel>
          <NativeSelect
            onChange={handleChangeCode}
            defaultValue={0}
            inputProps={{
              name: "country",
              id: "uncontrolled-native",
            }}
          >
            {country.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item.country + " " + item.countryCode}
                </option>
              );
            })}
          </NativeSelect>
        </FormControl>
      </Box>

      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={values.phoneNumber}
          onChange={handleChange("countryCode")}
          startAdornment={
            <InputAdornment position="start">
              {values.countryCode}
            </InputAdornment>
          }
        />
      </FormControl>
      <H variant="h5" fontSize="12px" color="rgb(34 34 34)" fontWeight="400">
        Chúng tôi sẽ gọi điện hoặc nhắn tin cho bạn để xác nhận số điện thoại.
        Có áp dụng phí dữ liệu và phí tin nhắn tiêu chuẩn.
        <a href="#">Chính sách về quyền riêng tư</a>
      </H>

      <Button
        type="submit"
        variant="contained"
        className={classes.submit}
        sx={{ textTransform: "none" }}
      >
        Tiếp tục
      </Button>
    </form>
  );
}
