import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

import { Stack, Typography } from "@mui/material";

import { Box } from "@/components";

import Image from "../components/Image";
import { useMedia } from "@/hooks";

const Guideline = () => {
  const guidelineRef = useRef<HTMLDivElement>(null);

  const { isTablet } = useMedia();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const guidelineEl = guidelineRef.current;
      if (guidelineEl == null) return;

      gsap.to(guidelineEl, {
        x: 20,
        repeat: -1,
        duration: 0.25,
        yoyo: true,
        ease: "easeInOut",
      });
    }, guidelineRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Box variant="centerCenter" gap={1.5}>
      <Stack spacing={0.5}>
        <Typography>Scroll to explore</Typography>
        <Image src="/petgotchi_icon.png" alt="Petgotchi Icon" />
      </Stack>
      <Box ref={guidelineRef}>
        <Image src="/guideline_icon.png" alt="Guideline Icon" />
      </Box>
    </Box>
  );
};

export default Guideline;

// const GuidelineWrapper = styled(Box)(() => {
//   return {
//     position: "fixed",
//     top: "36%",
//     right: "50px",
//   };
// });
