import React from "react";
import { styled } from "@mui/material";

import { Box } from "@/components";

import SocialIcon from "../SocialIcon";
import Image from "../components/Image";
import TeamMemberCard from "../components/TeamMemberCard";

const FounderSection = ({
  onLoad,
}: {
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
}) => {
  return (
    <Wrapper>
      <Image
        src={"/team-bg-desktop.png"}
        alt="Founder Background Section"
        onLoad={onLoad}
        style={{
          objectFit: "cover",
        }}
      />
      <TitleWrapper>
        <Image src="/founder_text.png" alt="Header Title" />
      </TitleWrapper>

      <ContentWrapper gap={4} variant="spaceBetweenCenter">
        <TeamMemberCard imgSrc="/founder_ceo.png" name="DAT LE" title="CEO" />
        <TeamMemberCard imgSrc="/founder_cto.png" name="QUANG VU" title="CTO" />
        <TeamMemberCard
          imgSrc="/founder_creative.png"
          name="MICKY NGUYEN"
          title="Creative Lead"
        />
        <TeamMemberCard
          imgSrc="/founder_content.png"
          name="HANNAH DAO"
          title="Content Lead"
        />
      </ContentWrapper>

      <SocialIconWrapper>
        <SocialIcon />
      </SocialIconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)(() => {
  return {
    width: "100vw",
    height: "100vh",
    maxHeight: "-webkit-fill-available",
    position: "relative",
  };
});

const TitleWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    // left: "26.51%",
    // top: "18.98%",
    // width: "48.75%",
    // height: "9.26%",

    left: " 50%",
    transform: "translateX(-50%)",
    top: "clamp(0px,18.98vh,205px)",
    width: "clamp(0px,89.16vh,963px)",
    height: "clamp(0px,9.25vh,100px)",
  };
});

const ContentWrapper = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: "33.51%",
    width: "80%",
    height: "50%",
    maxHeight: "50vh",
    [theme.breakpoints.down("lg")]: {
      width: "95%",
    },
    zIndex: 2,
  };
});

const SocialIconWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    left: "50%",
    bottom: 0,
    transform: "translateX(-50%)",
    zIndex: 1,
  };
});

export default FounderSection;
