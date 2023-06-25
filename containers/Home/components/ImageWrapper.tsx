import React from "react";
import { Box, ExtendedBoxProps } from "@/components";
import { styled } from "@mui/material";

const ImageWrapper = (props: ExtendedBoxProps) => {
  return <StyledBox {...props} />;
};

const StyledBox = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    borderRadius: 20,
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      borderRadius: 12,
    },
  };
});

export default ImageWrapper;
