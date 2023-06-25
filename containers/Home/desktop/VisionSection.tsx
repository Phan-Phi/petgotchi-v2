import React from "react";
import { Stack, Typography, styled } from "@mui/material";

import { Box } from "@/components";
import Image from "../components/Image";
import Wrapper from "../components/Wrapper";
import Background from "../components/Background";
import DogFootprint from "../components/DogFootprint";

const FeatureSection = ({
  onLoad,
}: {
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
}) => {
  return (
    <Wrapper className="vision-section">
      <Background
        onLoad={onLoad}
        src={"/vision-bg-desktop-2.jpg"}
        alt="Vision Section Background"
      />
      <FeatureWrapper>
        <Image src="/feature-text.png" alt="Feature Title" />
      </FeatureWrapper>

      <ContentWrapper spacing={3}>
        <Typography fontSize={"clamp(1rem, 2.96vh, 32px)"}>That focuses on:</Typography>
        <Box columnGap={2} display="flex" alignItems="center">
          <DogFootprint />
          <Typography>Pet diversity with unique sense of ownership.</Typography>
        </Box>
        <Box columnGap={2} display="flex" alignItems="center">
          <DogFootprint />
          <Typography>
            Interacting with a community of pet lovers with <br /> location-based
            features.
          </Typography>
        </Box>
      </ContentWrapper>
    </Wrapper>
  );
};

const FeatureWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    top: "18%",
    left: "76%",
    right: "-6%",
    pointerEvents: "none",
    zIndex: 2,
  };
});

const ContentWrapper = styled(Stack)(() => {
  return {
    position: "absolute",
    top: "34.81%",
    left: "87.5%",
    width: "100%",
    pointerEvents: "none",
  };
});

export default FeatureSection;
