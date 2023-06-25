import ReactPlayer from "react-player";
import { styled } from "@mui/material";

import { Box } from "@/components";
import Image from "../components/Image";
import Wrapper from "../components/Wrapper";
import Background from "../components/Background";

const HomeSection = ({
  onLoad,
}: {
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
}) => {
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
    top: "40%",
    left: "3%",
    width: "45%",
    height: "56%",

    [theme.breakpoints.between("md", "lg")]: {
      top: "35%",
      left: "3%",
      width: "40%",
      height: "50%",
    },
  };
});

const TextWrapper = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    top: "11%",
    left: "26%",
    width: "35%",
    height: "30%",
    pointerEvents: "none",

    [theme.breakpoints.between("md", "lg")]: {
      top: "11%",
      left: "26%",
      width: "30%",
      height: "25%",
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
