import React from "react";
import { styled } from "@mui/material";

import Background from "../components/Background";
import Wrapper from "../components/Wrapper";
import { Box } from "@/components";
import Image from "../components/Image";
import Container from "../components/Container";
// https://www.youtube.com/watch?v=R8LqjqV-Pbo
const AboutSection = ({
  onLoad,
}: {
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
}) => {
  return (
    <Wrapper>
      <Background
        src="/about-bg-mobile.jpg"
        alt="About Section Background"
        onLoad={onLoad}
      />
      <Container>
        <AboutContentWrapper rowGap={1.5}>
          <Box>
            <Image src="/about-title.png" alt="About Title" />
          </Box>
          <Image src="/about-content-mobile.png" alt="About Content" />
        </AboutContentWrapper>

        <BackerWrapper>
          <Image src="/about_backer.png" alt="Backer Position" />
        </BackerWrapper>
      </Container>
    </Wrapper>
  );
};

const AboutContentWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    width: "100%",
    top: "1%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    pointerEvents: "none",
  };
});

const BackerWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    top: "49%",
    left: 0,
    right: 0,
    pointerEvents: "none",
  };
});

export default AboutSection;
