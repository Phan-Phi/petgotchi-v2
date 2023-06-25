import { Button, styled } from "@mui/material";
import React, { useCallback, useEffect } from "react";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { Box } from "@/components";

import Image from "../components/Image";
import { useToggle, useWindowScroll } from "react-use";

const ScrollToTop = () => {
  const [isActive, setIsActive] = useToggle(false);

  const { y } = useWindowScroll();

  useEffect(() => {
    if (y > 1000 && !isActive) {
      setIsActive(true);
    }

    if (y < 1000) {
      setIsActive(false);
    }
  }, [y, isActive, setIsActive]);

  const onGoToHandler = useCallback((e: React.MouseEvent) => {
    e.preventDefault();

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    gsap.to(window, {
      scrollTo: {
        y: 0,
      },
      duration: 1,
      ease: Power3.easeInOut,
    });
  }, []);

  return (
    <Wrapper isActive={isActive}>
      <Button onClick={onGoToHandler}>
        <ImageWrapper>
          <FingerWrapper>
            <Image src="/top.png" alt="Decor" />
          </FingerWrapper>
          <Image src="/glass-circle.png" alt="Decor" />
        </ImageWrapper>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled(Box, {
  shouldForwardProp: (propName) => propName !== "isActive",
})<{ isActive: boolean }>(({ isActive }) => {
  return {
    position: "fixed",
    bottom: "16%",
    right: 12,
    zIndex: 999,
    transform: isActive ? "translateX(0)" : "translateX(200%)",
    transition: "transform 500ms",
    willChange: "transform",
    userSelect: "none",
  };
});

const ImageWrapper = styled(Box)(() => {
  return {
    width: 64,
    height: 64,
    position: "relative",
    borderRadius: "50%",
    backdropFilter: "blur(10px)",
  };
});

const FingerWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    width: "75%",
    height: "75%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
});

export default ScrollToTop;
