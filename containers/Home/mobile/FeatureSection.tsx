import React from "react";
import { styled, Stack, Typography } from "@mui/material";

import { Box } from "@/components";

import Image from "../components/Image";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Background from "../components/Background";
import ImageWrapper from "../components/ImageWrapper";
import DogFootprint from "../components/DogFootprint";
import GlassmorphismCard from "../components/GlassmorphismCard";

const FeatureSection = ({
  onLoad,
}: {
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
}) => {
  return (
    <Wrapper>
      <Background
        src={"/feature-bg-mobile.jpg"}
        alt="Feature Section Background"
        onLoad={onLoad}
      />

      <Container>
        <ContentWrapper rowGap={2}>
          <Box width={"75%"}>
            <Typography>
              We bring a unique virtual pet friend to you in the virtual world, with whom
              you can:
            </Typography>
          </Box>

          <GlassmorphismCard>
            <Stack rowGap={1}>
              <ImageWrapper>
                <Image src="/feature-1.jpg" alt="Feature Decor" />
              </ImageWrapper>
              <Box variant="centerCenter" columnGap={1.5}>
                <DogFootprint />
                <Typography>Take care of your furry friends</Typography>
              </Box>
            </Stack>
          </GlassmorphismCard>

          <GlassmorphismCard>
            <Stack spacing={1}>
              <Stack rowGap={1}>
                <ImageWrapper>
                  <Image src="/feature-2.jpg" alt="Feature Decor" />
                </ImageWrapper>
                <Box variant="centerCenter" columnGap={1.5}>
                  <DogFootprint />
                  <Typography>Explore the world</Typography>
                </Box>
              </Stack>
              <Stack rowGap={1}>
                <ImageWrapper>
                  <Image src="/feature-3.jpg" alt="Feature Decor" />
                </ImageWrapper>
                <Box variant="centerCenter" columnGap={1.5}>
                  <DogFootprint />
                  <Typography>Visit houses and make friends</Typography>
                </Box>
              </Stack>
            </Stack>
          </GlassmorphismCard>

          <GlassmorphismCard>
            <Stack spacing={1}>
              <ImageWrapper>
                <Image src="/feature-5.jpg" alt="Feature Decor" />
              </ImageWrapper>
              <Stack rowGap={1}>
                <ImageWrapper>
                  <Image src="/feature-4.jpg" alt="Feature Decor" />
                </ImageWrapper>
                <Box variant="centerCenter" columnGap={1.5}>
                  <DogFootprint />
                  <Typography>Answer quizzes to collect items for your home</Typography>
                </Box>
              </Stack>
            </Stack>
          </GlassmorphismCard>

          <AppWrapper>
            <Box>
              <Image src={"feature-logo.png"} alt="Logo" />
            </Box>

            <Stack spacing={2}>
              <a
                href="https://apps.apple.com/us/app/petgotchi/id6444146223"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={"howto_ios_icon.png"} alt="Logo" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.petgotchi"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={"howto_android_icon.png"} alt="Logo" />
              </a>
            </Stack>
          </AppWrapper>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

const ContentWrapper = styled(Box)(() => {
  return {
    position: "relative",
    top: "16%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
});

const AppWrapper = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    columnGap: 16,
    alignItems: "center",
    [theme.breakpoints.down(300)]: {
      display: "none",
    },
  };
});

export default FeatureSection;
