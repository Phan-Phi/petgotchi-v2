import React from "react";

import { Container as MuiContainer, ContainerProps, styled } from "@mui/material";
import { Box } from "@/components";

const Container = (props: ContainerProps) => {
  const { children, ...restProps } = props;
  return (
    <StyledContainer {...restProps}>
      <StyledInnerContainer>{children}</StyledInnerContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled(MuiContainer)(() => {
  return {
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  };
});

const StyledInnerContainer = styled(Box)(() => {
  return {
    position: "relative",
    width: "100%",
    height: "100%",
  };
});

export default Container;
