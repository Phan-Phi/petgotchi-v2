import React from "react";
import { styled } from "@mui/material";

import { Box } from "@/components";

import Image from "./Image";

const DogFootprint = () => {
  return (
    <StyledBox>
      <Image src="dog-footprint.png" alt="Dog Footprint" />
    </StyledBox>
  );
};

const StyledBox = styled(Box)(({ theme }) => {
  return {
    // width: 40,
    // height: 40,

    width: "clamp(0px,4.44vh,48px)",
    height: "clamp(0px,4.44vh,48px)",
    [theme.breakpoints.down("md")]: {
      width: 32,
      height: 32,
    },
  };
});

export default DogFootprint;
