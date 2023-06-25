import React from "react";
import { styled } from "@mui/material";

import { Box } from "@/components";

import Image from "../components/Image";
import Wrapper from "../components/Wrapper";
import Background from "../components/Background";

const AboutSection = ({
  onLoad,
}: {
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
}) => {
  return (
    <Wrapper className="about-section">
      <Background
        onLoad={onLoad}
        src={"/about-bg-desktop.jpg"}
        alt="About Us Background"
      />

      <AboutContentWrapper>
        <Image src="/about_text.png" alt="About Position" />
      </AboutContentWrapper>
      <BackerWrapper>
        <Image src="/about_backer.png" alt="Backer Position" />
      </BackerWrapper>
    </Wrapper>
  );
};

const AboutContentWrapper = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    left: "5%",
    top: "22%",
    width: "22.5%",
    height: "45.8%",
    pointerEvents: "none",

    [theme.breakpoints.between("md", "lg")]: {
      left: "5%",
      top: "22%",
      width: "19%",
      height: "44.8%",
    },
  };
});

const BackerWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    left: "54.8%",
    top: "60.8%",
    width: "18.54%",
    height: "25.64%",
    pointerEvents: "none",
  };
});

const AntlerWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    left: "79.04%",
    top: "50.1%",
    width: "11.79%",
    height: "11.70%",
    pointerEvents: "none",
  };
});

export default AboutSection;
