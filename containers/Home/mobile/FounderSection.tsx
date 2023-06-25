import React from "react";
import { Stack, styled, Container } from "@mui/material";

import { Box } from "@/components";

import SocialIcon from "../SocialIcon";
import Image from "../components/Image";
import Wrapper from "../components/Wrapper";
import Background from "../components/Background";
import TeamMemberCard from "../components/TeamMemberCard";

const FounderSection = ({
  onLoad,
}: {
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
}) => {
  return (
    <Wrapper>
      <WrapperBackground>
        <Background
          src={"/team-bg-mobile.png"}
          alt="Founder Section Background"
          onLoad={onLoad}
        />
      </WrapperBackground>
      <Container>
        <Stack spacing={5} marginTop={10}>
          <TitleWrapper>
            <Image src="/team-title-mobile.png" alt="Team title" />
          </TitleWrapper>

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

          <SocialIcon />
        </Stack>
      </Container>
    </Wrapper>
  );
};

const WrapperBackground = styled(Box)(() => {
  return {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
  };
});

const TitleWrapper = styled(Box)(() => {
  return {
    display: "flex",
    alignSelf: "center",
    pointerEvents: "none",
  };
});

export default FounderSection;
