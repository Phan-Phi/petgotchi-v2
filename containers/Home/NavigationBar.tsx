import { gsap, Power3 } from "gsap";
import React, { useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Typography, Stack, Divider, styled } from "@mui/material";

import { Box, Link } from "@/components";
import { useMedia } from "@/hooks";

const NavigationBar = () => {
  const { isTablet } = useMedia();

  const onGoToHandler = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      if (isTablet) {
        const { id } = e.currentTarget.dataset;

        if (!id) return;

        const el = document.querySelector<HTMLDivElement>(`#${id}`);
        const containerEl = document.querySelector<HTMLDivElement>(`#content-container`);

        if (!el || !containerEl) return;

        const offsetLeft = el.offsetLeft;

        containerEl.scrollTo({
          behavior: "smooth",
          left: offsetLeft,
        });

        return;
      }

      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

      const currentTarget = e.target as HTMLParagraphElement;

      const destination = currentTarget.getAttribute("data-href");

      if (destination == null) return;

      const destinationEl = document.querySelector<HTMLDivElement>(destination);

      if (destinationEl == null) return;

      gsap.to(window, {
        scrollTo: {
          y: destinationEl.offsetLeft,
        },
        duration: 1,
        ease: Power3.easeInOut,
      });
    },
    [isTablet]
  );

  return (
    <Wrapper variant="spaceBetweenCenter" gap={3}>
      <img
        className="logo"
        src={"/petgotchi-logo.png"}
        width={200}
        height={90}
        style={{
          objectFit: "contain",
        }}
        alt="Petgotchi Logo"
      />
      <NavigationWrapper
        className="navigation-wrapper"
        divider={<Divider orientation="vertical" flexItem color="#FFF" />}
      >
        <Link href="#home-section" data-id="home-section" onClick={onGoToHandler}>
          <StyledTypography data-href="#home-section">Home</StyledTypography>
        </Link>
        <Link href="#about-section" data-id="about-section" onClick={onGoToHandler}>
          <StyledTypography data-href="#about-section">About Us</StyledTypography>
        </Link>
        <Link href="#vision-section" data-id="vision-section" onClick={onGoToHandler}>
          <StyledTypography data-href="#vision-section">Vision</StyledTypography>
        </Link>
        <Link href="#feature-section" data-id="feature-section" onClick={onGoToHandler}>
          <StyledTypography data-href="#feature-section">Features</StyledTypography>
        </Link>
        <Link href="#founder-section" data-id="founder-section" onClick={onGoToHandler}>
          <StyledTypography data-href="#founder-section">Team</StyledTypography>
        </Link>
      </NavigationWrapper>
    </Wrapper>
  );
};

export default NavigationBar;

const Wrapper = styled(Box)(({ theme }) => {
  return {
    maxWidth: "85%",
    margin: "0 auto",
    paddingTop: 16,
    [theme.breakpoints.down("lg")]: {
      maxWidth: "95%",
    },
  };
});

const NavigationWrapper = styled(Stack)(() => {
  return {
    backgroundColor: "rgba(255, 255, 255, 0.56)",
    padding: 8,
    borderRadius: 16,
    backdropFilter: "blur(9.5px)",
    border: "1px solid #FFF",
    flexDirection: "row",
  };
});

const StyledTypography = styled(Typography)(({ theme }) => {
  return {
    paddingLeft: 32,
    paddingRight: 32,
    [theme.breakpoints.down("xl")]: {
      paddingLeft: 16,
      paddingRight: 16,
    },
    ["&:hover"]: {
      fontWeight: 700,
      textDecoration: "underline",
    },
  };
});
