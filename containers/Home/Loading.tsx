import Head from "next/head";
import seethru from "seethru";
import { Fade, styled, keyframes } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { Box } from "@/components";
import Background from "./components/Background";

const Loading = () => {
  const videoRef = useRef<HTMLVideoElement | null>();
  const seeThruRef = useRef<any>();

  const [isReady, setIsReady] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>();

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.play();

    if (seeThruRef.current) return;

    const seeThruInstance = seethru
      .create(video, { width: 512 * 0.8, height: 512 * 0.8 })
      .ready((instance: any, video: HTMLVideoElement, canvas: HTMLCanvasElement) => {
        canvas.addEventListener("click", function () {
          instance.revert();
        });
        video.addEventListener("ended", function () {
          instance.revert();
        });
      });

    seeThruRef.current = seeThruInstance;
  }, []);

  const onLoadedDataHandler = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    timeoutRef.current = setTimeout(() => {
      setIsReady(false);
    }, 3000);
  }, []);

  return (
    <Fade in={isReady}>
      <LoadingContainer className="loading">
        <Head>
          <link rel="preload" href="/loading-bg.png" as="image" />
        </Head>
        <Background
          src="/loading-bg.png"
          alt="loading background"
          style={{
            objectFit: "cover",
            width: "100%",
          }}
        />
        <LoadingWrapper isReady={isReady}>
          <video
            id="my-video"
            autoPlay
            ref={(instance) => {
              videoRef.current = instance;
            }}
            loop
            muted
            playsInline
            onLoadedData={onLoadedDataHandler}
            width="100%"
            style={{
              objectFit: "contain",
            }}
            preload="auto"
          >
            <source src="/loading.mp4" type="video/mp4" />
          </video>

          <ProgressionWrapper isReady={isReady}>
            <Progression />
          </ProgressionWrapper>
        </LoadingWrapper>
      </LoadingContainer>
    </Fade>
  );
};

const LoadingContainer = styled(Box)(() => {
  return {
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 1001,
    backgroundColor: "#FFF",
    width: "100vw",
    height: "100vh",
    maxHeight: "-webkit-fill-available",
    overflow: "hidden",
  };
});

const LoadingWrapper = styled(Box, {
  shouldForwardProp: (propName) => propName !== "isReady",
})<{ isReady: boolean }>(({ isReady }) => {
  return {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 1003,
    display: "flex",
    pointerEvents: "none",
    opacity: isReady ? 1 : 0,
    flexDirection: "column",
    justifyContent: "center",
  };
});

const ProgressionWrapper = styled(Box, {
  shouldForwardProp: (propName) => propName !== "isReady",
})<{ isReady: boolean }>(({ isReady, theme }) => {
  return {
    // position: "absolute",
    // top: "60%",
    // left: "50%",
    // transform: "translateX(-50%)",
    // zIndex: 1003,
    display: "flex",
    pointerEvents: "none",
    opacity: isReady ? 1 : 0,
    backgroundColor: "rgba(255,255,255,0.5)",
    border: "2px solid #FFF",
    // width: "40vw",
    height: "3.5vh",
    maxHeight: "20px",
    borderRadius: "4px",
    overflow: "hidden",
    alignSelf: "center",
    width: "100%",
  };
});

const Progression = styled(Box)(() => {
  return {
    position: "relative",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(180deg, #d8e4ff 10%, #749bfe 30%, #968afe 70%, #856EEA 80%)",
    borderRadius: "4px",
    transform: "translateX(0)",
    animation: `${myEffect} 3s`,
  };
});

const myEffect = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
    
  }
`;

export default Loading;
