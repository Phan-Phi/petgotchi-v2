import React from "react";
import { styled } from "@mui/material";

import { Box } from "@/components";

import Image from "../components/Image";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Background from "../components/Background";
import ReactPlayer from "react-player";

const HomeSection = ({
  onLoad,
}: {
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
}) => {
  return (
    <Wrapper>
      <Background
        src={"/home-bg-mobile.jpg"}
        alt="Home Section Background"
        onLoad={onLoad}
      />

      <Container>
        <TextWrapper>
          <Image src="/home_text.png" alt="Text Position" />
        </TextWrapper>

        <YoutubeWrapper>
          <Image src="/home_youtube.png" alt="Youtube Position" />
          <PlayerWrapper>
            <ReactPlayer
              controls={false}
              url="https://www.youtube.com/watch?v=R8LqjqV-Pbo"
              // playing
              loop
              width="100%"
              height="100%"
              // muted
            />
          </PlayerWrapper>
        </YoutubeWrapper>
      </Container>
    </Wrapper>
  );
};

const YoutubeWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    top: "35%",
    left: 0,
    right: 0,
  };
});

const TextWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    top: "15%",
    pointerEvents: "none",
    left: 0,
    right: 0,
  };
});

const PlayerWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    left: "9%",
    right: "9%",
    bottom: "14%",
    top: "14%",
    overflow: "hidden",
    ["& iframe"]: {
      width: "100%",
      height: "100%",
      borderRadius: 12,
    },
  };
});

export default HomeSection;
