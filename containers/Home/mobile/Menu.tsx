import { gsap, Power3 } from "gsap";
import { useToggle } from "react-use";
import React, { Fragment, useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { Button, Divider, Stack, Typography, styled } from "@mui/material";

import { Box } from "@/components";

import Image from "../components/Image";

const Menu = () => {
  const [open, toggle] = useToggle(false);

  const onGoToHandler = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

      const currentTarget = e.target as HTMLParagraphElement;

      const destination = currentTarget.getAttribute("data-href");

      if (destination == null) return;

      const destinationEl = document.querySelector<HTMLDivElement>(destination);

      if (destinationEl == null) return;

      gsap.to(window, {
        scrollTo: {
          y: destinationEl.offsetTop,
        },
        duration: 1,
        ease: Power3.easeInOut,
      });
      toggle();
    },
    [toggle]
  );

  return (
    <Fragment>
      <ButtonWrapper>
        <StyledButton onClick={toggle}>
          <ImageWrapper>
            <Image src="/glass-circle.png" alt="Decor" />
            <DogFootprintWrapper>
              <Image src="/dog-footprint.png" alt="Decor" />
            </DogFootprintWrapper>
            <MenuTextWrapper>
              <Image
                src="/menu.png"
                alt="Decor"
                style={{
                  height: "auto",
                }}
              />
            </MenuTextWrapper>
          </ImageWrapper>
        </StyledButton>
      </ButtonWrapper>
      <MenuWrapper paddingTop={2} open={open}>
        <Box variant="centerCenter" paddingBottom={8}>
          <Image
            src="/petgotchi-logo.png"
            alt="Petgotchi Logo"
            style={{
              width: 200,
            }}
          />
        </Box>

        <Stack
          spacing={2}
          alignItems={"center"}
          divider={<Divider flexItem color="#FFF" />}
        >
          <StyledButton onClick={onGoToHandler}>
            <StyledTypography data-href="#home-section">Home</StyledTypography>
          </StyledButton>
          <StyledButton onClick={onGoToHandler}>
            <StyledTypography data-href="#about-section">About Us</StyledTypography>
          </StyledButton>
          <StyledButton onClick={onGoToHandler}>
            <StyledTypography data-href="#vision-section">Vision</StyledTypography>
          </StyledButton>
          <StyledButton onClick={onGoToHandler}>
            <StyledTypography data-href="#feature-section">Features</StyledTypography>
          </StyledButton>
          <StyledButton onClick={onGoToHandler}>
            <StyledTypography data-href="#founder-section">Team</StyledTypography>
          </StyledButton>
          <Fragment></Fragment>
        </Stack>

        <XButtonWrapper fullWidth onClick={toggle}>
          <StyledTypography color="#B991FA">X</StyledTypography>
        </XButtonWrapper>
      </MenuWrapper>
    </Fragment>
  );
};

const ButtonWrapper = styled(Box)(() => {
  return {
    position: "fixed",
    top: "7%",
    left: "5%",
    zIndex: 99,
  };
});

const StyledButton = styled(Button)(() => {
  return {
    padding: 0,
    textTransform: "inherit",
  };
});

const MenuWrapper = styled(Box, {
  shouldForwardProp: (propName) => propName != "open",
})<{ open: boolean }>(({ open }) => {
  return {
    position: "fixed",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(10px)",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 101,
    transform: open ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 500ms",
    willChange: "transform",
    overflow: "hidden",
  };
});

const StyledTypography = styled(Typography)(() => {
  return {
    fontSize: "26px !important",
    lineHeight: "32px !important",
    ["&:hover, &:focus, &:active"]: {
      color: "#431988",
      fontWeight: 700,
      textDecoration: "underline",
    },
  };
});

const ImageWrapper = styled(Box)(() => {
  return {
    width: 50,
    height: 50,
    position: "relative",
    borderRadius: "50%",
    backdropFilter: "blur(10px)",
  };
});

const DogFootprintWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    width: "50%",
    height: "50%",
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
  };
});

const MenuTextWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    display: "flex",

    bottom: "10%",
  };
});

const XButtonWrapper = styled(StyledButton)(() => {
  return {
    backgroundColor: "#E6D6FF",
    paddingTop: 8,
    paddingBottom: 8,
  };
});

export default Menu;
