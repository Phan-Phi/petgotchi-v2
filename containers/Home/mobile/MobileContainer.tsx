import React, { useCallback, useEffect, useRef, useState } from "react";
import { Fade, styled } from "@mui/material";
import { Box } from "@/components";

import Menu from "./Menu";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import VisionSection from "./VisionSection";
import FeatureSection from "./FeatureSection";
import FounderSection from "./FounderSection";
import ScrollToTop from "./ScrollToTop";
import Loading from "../Loading";

const MobileContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>();

  const [isImgReady, setIsImgReady] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const onSetImgReadyHandler = useCallback((idx: number) => {
    return () => {
      setIsImgReady((prev) => {
        const newState = [...prev];

        newState[idx] = true;

        return newState;
      });
    };
  }, []);

  useEffect(() => {
    const result = isImgReady.reduce((finalResult, el) => {
      if (!finalResult) return finalResult;
      return el;
    }, true);

    if (!result) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isImgReady]);

  return (
    <Box>
      <Loading />

      <Fade in={!isLoading}>
        <ContentWrapper isLoading={isLoading}>
          <Menu />

          <LogoWrapper>
            <img
              src="/petgotchi-logo.png"
              width={200}
              height={90}
              style={{
                objectFit: "contain",
              }}
              alt="Petgotchi Logo"
            />
          </LogoWrapper>

          <Box id="home-section">
            <HomeSection onLoad={onSetImgReadyHandler(0)} />
          </Box>

          <Box id="about-section">
            <AboutSection onLoad={onSetImgReadyHandler(1)} />
          </Box>

          <Box id="vision-section">
            <VisionSection onLoad={onSetImgReadyHandler(2)} />
          </Box>
          <Box id="feature-section">
            <FeatureSection onLoad={onSetImgReadyHandler(3)} />
          </Box>
          <Box id="founder-section">
            <FounderSection onLoad={onSetImgReadyHandler(4)} />
          </Box>

          <ScrollToTop />
        </ContentWrapper>
      </Fade>
    </Box>
  );
};

const LogoWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    top: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1,
    maxWidth: "100%",
    overflow: "hidden",
  };
});

const ContentWrapper = styled(Box, {
  shouldForwardProp: (propName) => propName !== "isLoading",
})<{ isLoading: boolean }>(({ isLoading }) => {
  return {
    opacity: isLoading ? 0 : 1,
  };
});

export default MobileContainer;
