import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import H from "../../../components/typography/h";

const FDM = () => {
  return (
    <div>
      <div>
        <H
          variant="h1"
          fontSize="12px"
          // color="rgb(34 34 34)"
          //  fontWeight="400"
        >
          Đón tiếp khách làm nên linh hồn của Airbnb
        </H>
        <Button>Thử đón tiếp khách</Button>
      </div>
      <div>
        <Card>
          <CardMedia
            component="video"
            sx={{ width: "1000px", height: "auto" }}
            // className={classes.media}
            image={
              "https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4"
            }
            autoPlay
          />

          {/* <CardMedia
      component="iframe"
      src={
        "https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4"
      }
      allow="autoPlay"
    /> */}
        </Card>
      </div>
    </div>
  );
};

export default FDM;
