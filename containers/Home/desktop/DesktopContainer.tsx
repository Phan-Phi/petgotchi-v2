import { gsap } from "gsap";
import { useEvent, useWindowSize } from "react-use";
import { Fade, styled } from "@mui/material";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { Box } from "@/components";

import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import FeatureSection from "./FeatureSection";
import NavigationBar from "../NavigationBar";
import FounderSection from "./FounderSection";
import VisionSection from "./VisionSection";
import Guideline from "./Guideline";
import Loading from "../Loading";
import { useMedia } from "@/hooks";

const HomeDesktopContainer = () => {
  const { width, height } = useWindowSize();

  const { isTablet } = useMedia();

  const containerRef = useRef<HTMLDivElement>(null);
  const guidelineRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>();

  const tweenRef = useRef<{ tween: gsap.core.Tween | null }>({ tween: null });

  const [isImgReady, setIsImgReady] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [isLoading, setIsLoading] = useState(true);

  const onSetImgReadyHandler = useCallback((idx: number) => {
    return () => {
      setIsImgReady((prev) => {
        const newState = [...prev];

        newState[idx] = true;

        return newState;
      });
    };
  }, []);

  useLayoutEffect(() => {
    if (
      !isImgReady.reduce((finalResult, el) => {
        if (!finalResult) return finalResult;
        return el;
      }, true)
    )
      return;

    const containerEl = containerRef.current;

    if (containerEl == null) return;

    containerEl.style.marginRight = "unset";

    // console.log("RE RUN?");

    if (isTablet) {
      const lastEl = document.querySelector<HTMLDivElement>("#founder-section");

      if (!lastEl) return;

      const scrollWidth = containerEl.scrollWidth;
      const offsetLeft = lastEl.offsetLeft;
      const clientWidth = lastEl.clientWidth;

      const remainder = scrollWidth - (clientWidth + offsetLeft);

      containerEl.style.marginRight = `-${remainder}px`;

      return;
    }

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLDivElement>(".section");

      const totalWidth = sections.reduce((totalWidth, el) => {
        return totalWidth + el.clientWidth;
      }, 0);

      tweenRef.current.tween = gsap.to(sections, {
        x: (idx) => {
          return -(totalWidth - width);
        },
        ease: "none",
        scrollTrigger: {
          trigger: containerEl,
          pin: true,
          scrub: 1.5,
          end: () => `+=${totalWidth - width}`,
        },
      });

      gsap.to(guidelineRef.current, {
        x: -width,
        scrollTrigger: {
          start: "top 0",
          scrub: 1,
          end: `${width} top`,
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [width, height, isImgReady, isTablet]);

  const onScrollHandler = useCallback(() => {
    if (!isTablet) return;
    const guidelineEl = guidelineRef.current;
    const containerEl = containerRef.current;
    if (!guidelineEl || !containerEl) return;
    if (containerEl.scrollLeft > width / 2) {
      guidelineEl.classList.add("hidden");
    } else {
      guidelineEl.classList.remove("hidden");
    }
  }, [isTablet, width]);

  useEvent("scroll", onScrollHandler, containerRef.current);

  useEffect(() => {
    const cb = (event: WheelEvent) => {
      const { deltaX } = event;
      const tween = tweenRef.current.tween;
      if (deltaX && tween) {
        const { scrollTrigger } = tween;
        const { end: totalScroll, scroll, progress } = scrollTrigger!;
        const newPos = (deltaX / totalScroll + progress) * totalScroll;
        scroll(newPos);
      }
    };

    window.addEventListener("wheel", cb);

    // const touchStartCb = (e: TouchEvent) => {
    //   const touchEvent = e.changedTouches[0];
    //   prevClientXRef.current = touchEvent.clientX;
    // };

    // const touchMoveCb = (e: TouchEvent) => {
    //   const touchEvent = e.changedTouches[0];

    //   const tween = tweenRef.current.tween;

    //   if (!tween) return;
    //   const { scrollTrigger } = tween;
    //   const { end: totalScroll, scroll, progress } = scrollTrigger!;

    //   const deltaChange = touchEvent.clientX - prevClientXRef.current;

    //   //* deltaChange < 0, swipe left => move right

    //   const newPos = (-deltaChange / totalScroll + progress) * totalScroll;
    //   scroll(newPos);

    //   //* deltaChange > 0, swipe right => move left

    //   prevClientXRef.current = touchEvent.clientX;
    // };

    // const touchEndCb = (e: TouchEvent) => {
    //   prevClientXRef.current = 0;
    // };

    // window.addEventListener("touchstart", touchStartCb);
    // window.addEventListener("touchmove", touchMoveCb);
    // window.addEventListener("touchend", touchEndCb);

    return () => {
      window.removeEventListener("wheel", cb);
      // window.removeEventListener("touchstart", touchStartCb);
      // window.removeEventListener("touchmove", touchMoveCb);
      // window.removeEventListener("touchend", touchEndCb);
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
      {/* <Loading /> */}

      <Fade in={!isLoading}>
        <ContentWrapper>
          <NavigationWrapper className="navigation">
            <NavigationBar />
          </NavigationWrapper>
          <Container id="content-container" ref={containerRef}>
            <Section id="home-section" className="section">
              <HomeSection onLoad={onSetImgReadyHandler(0)} />
            </Section>
            <Section id="about-section" className="section">
              <AboutSection onLoad={onSetImgReadyHandler(1)} />
            </Section>

            <Section id="vision-section" className="section" zIndex={2}>
              <VisionSection onLoad={onSetImgReadyHandler(2)} />
            </Section>

            <Section id="feature-section" className="section">
              <FeatureSection onLoad={onSetImgReadyHandler(3)} />
            </Section>

            <Section id="founder-section" className="section">
              <FounderSection onLoad={onSetImgReadyHandler(4)} />
            </Section>
          </Container>
          <GuidelineWrapper ref={guidelineRef}>
            <Guideline />
          </GuidelineWrapper>
        </ContentWrapper>
      </Fade>
    </Box>
  );
};

export default HomeDesktopContainer;

const Container = styled(Box)(({ theme }) => {
  return {
    height: "100vh",
    display: "flex",
    overflow: "hidden",
    flexWrap: "nowrap",
    maxHeight: "-webkit-fill-available",
    [theme.breakpoints.between(768, 1200)]: {
      ["&::-webkit-scrollbar"]: {
        display: "none",
      },
      overflow: "scroll hidden",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
  };
});

const Section = styled(Box)(() => {
  return {
    height: "100vh",
    position: "relative",
    maxHeight: "-webkit-fill-available",
  };
});

const ContentWrapper = styled(Box)(() => {
  return {
    width: "100%",
    height: "100%",
  };
});

const NavigationWrapper = styled(Box)(() => {
  return {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 999,
    width: "100%",
  };
});

const GuidelineWrapper = styled(Box)(({ theme }) => {
  return {
    position: "fixed",
    top: "50%",
    transform: "translateY(-50%)",
    right: "50px",
    opacity: 1,
    transition: "200ms",
    [theme.breakpoints.between(768, 1200)]: {
      ["&.hidden"]: {
        visibility: "hidden",
        opacity: 0,
      },
    },
  };
});
