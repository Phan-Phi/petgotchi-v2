import ReactPlayer from "react-player";
import { styled } from "@mui/material";

import { Box } from "@/components";
import Image from "../components/Image";
import Wrapper from "../components/Wrapper";
import Background from "../components/Background";
import { useMeasure, useWindowSize } from "react-use";
import { useMedia } from "@/hooks";

const HomeSection = ({
  onLoad,
}: {
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
}) => {
  const { width, height } = useWindowSize();
  const { isMdDown } = useMedia();
  return (
    <Wrapper className="home-section">
      <Background
        onLoad={onLoad}
        src={"/home-bg-desktop.jpg"}
        alt="Home Section Background"
      />
      <YoutubeWrapper>
        <Image src="/home_youtube.png" alt="Youtube Position" />
        <PlayerWrapper>
          <ReactPlayer
            controls={false}
            url="https://www.youtube.com/watch?v=R8LqjqV-Pbo"
            loop
            width="100%"
            height="100%"
          />
        </PlayerWrapper>
      </YoutubeWrapper>
      <TextWrapper>
        <Image src="/home_text.png" alt="Text Position" />
      </TextWrapper>
    </Wrapper>
  );
};

const YoutubeWrapper = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    // top: "40%",
    // left: "3%",
    // width: "45%",
    // height: "56%",
    top: "clamp(0px,44.44vh,480px)",
    left: "clamp(0px,16.85vh,182px)",
    width: "clamp(0px,76.66vh, 828px)",
    height: "clamp(0px,49.35vh, 533px)",
  };
});

const TextWrapper = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    // top: "11%",
    // left: "26%",
    // width: "35%",
    // height: "30%",
    pointerEvents: "none",

    top: "clamp(0px,11.38vh,123px)",
    left: "clamp(0px,50.92vh,550px)",
    width: "clamp(0px,66.66vh,720px)",
    height: "clamp(0px,30.64vh,331px)",

    [theme.breakpoints.between("md", "lg")]: {
      top: "clamp(0px,17.59vh,190px)",
      left: "clamp(0px,63.42vh,685px)",
      width: "clamp(0px,53.70vh,580px)",
      height: "clamp(0px,23.18vh,250px)",
    },
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
      borderRadius: 20,
    },
  };
});

export default HomeSection;
