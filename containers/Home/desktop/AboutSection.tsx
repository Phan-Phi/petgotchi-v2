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
    // left: "5%",
    // top: "22%",
    // width: "22.5%",
    // height: "45.8%",
    pointerEvents: "none",

    left: "clamp(0px,19.62vh,212px)",
    top: "clamp(0px,21.85vh,236px)",
    width: "clamp(0px,87.59vh,946px)",
    height: "clamp(0px,45.83vh,495px)",

    // [theme.breakpoints.between("md", "lg")]: {
    //   left: "5%",
    //   top: "22%",
    //   width: "19%",
    //   height: "44.8%",
    // },
  };
});

const BackerWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    // left: "54.8%",
    // top: "60.8%",
    // width: "18.54%",
    // height: "25.64%",
    pointerEvents: "none",

    left: "clamp(0px,212.68vh,2297px)",
    top: "clamp(0px,60.83vh,657px)",
    width: "clamp(0px,72.12vh,779px)",
    height: "clamp(0px,25.64vh,277px)",
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
