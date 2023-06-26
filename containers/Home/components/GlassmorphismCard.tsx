import React from "react";

import { Box, ExtendedBoxProps } from "@/components";
import { styled } from "@mui/material";

const GlassmorphismCard = (props: ExtendedBoxProps) => {
  return <StyledBox {...props} />;
};

const StyledBox = styled(Box)(({ theme }) => {
  return {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    border: "1px solid #FFF",
    backdropFilter: "blur(5px)",
    borderRadius: 20,
    // padding: 20,
    padding: "clamp(0px,1.85vh,20px)",

    // [theme.breakpoints.between("md", "lg")]: {
    //   padding: "clamp(0px,1.85vh,20px)",
    // },
    [theme.breakpoints.down("md")]: {
      borderRadius: 16,
      padding: 16,
    },
  };
});

export default GlassmorphismCard;
