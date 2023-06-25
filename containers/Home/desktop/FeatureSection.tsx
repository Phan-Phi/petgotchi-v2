import React from "react";
import { Box } from "@/components";
import { Stack, Typography, styled } from "@mui/material";

import Image from "../components/Image";
import Wrapper from "../components/Wrapper";
import Background from "../components/Background";
import ImageWrapper from "../components/ImageWrapper";
import GlassmorphismCard from "../components/GlassmorphismCard";
import DogFootprint from "../components/DogFootprint";

const FeatureSection = ({
  onLoad,
}: {
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
}) => {
  return (
    <Wrapper className="feature-section">
      <Background onLoad={onLoad} src={"/feature-bg-desktop.jpg"} alt="How To" />

      <ContentWrapper>
        <StyledGrid className="asdasdad">
          <Box gridColumn="1" gridRow="1">
            <GlassmorphismCard>
              <Box
                display="grid"
                gridTemplateColumns={"40% 60%"}
                overflow="hidden"
                justifyContent={"space-between"}
                rowGap={2}
              >
                <ImageWrapper>
                  <Image
                    src="/feature-5.jpg"
                    alt="Feature Image"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </ImageWrapper>
                <ImageWrapper marginLeft={2.5}>
                  <Image
                    src="/feature-4.jpg"
                    alt="Feature Image"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </ImageWrapper>
                <Box gridColumn={"span 2"}>
                  <Box variant="centerCenter" columnGap={1.5}>
                    <DogFootprint />
                    <Typography textAlign="center">
                      Answer quizzes to collect items for your home
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </GlassmorphismCard>
          </Box>

          <Box gridColumn="1" gridRow="2">
            <Box
              display="grid"
              gridTemplateColumns={"30% 65%"}
              justifyContent={"space-between"}
            >
              <Stack justifyContent="space-between" spacing={1}>
                <Image src={"feature-logo.png"} alt="Logo" />

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

              <GlassmorphismCard>
                <Stack spacing={2}>
                  <ImageWrapper>
                    <Image
                      src="/feature-1.jpg"
                      alt="Feature Image"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </ImageWrapper>
                  <Box variant="centerCenter" columnGap={1.5}>
                    <DogFootprint />
                    <Typography textAlign="center">
                      Take care of your furry friends
                    </Typography>
                  </Box>
                </Stack>
              </GlassmorphismCard>
            </Box>
          </Box>

          <Box gridColumn="2" gridRow="span 2">
            <GlassmorphismCard height="100%">
              <Stack spacing={3} height="100%" justifyContent="space-between">
                <Stack spacing={2}>
                  <ImageWrapper>
                    <Image
                      src="/feature-2.jpg"
                      alt="Feature Image"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </ImageWrapper>
                  <Box variant="centerCenter" columnGap={1.5}>
                    <DogFootprint />
                    <Typography textAlign="center">Explore the world</Typography>
                  </Box>
                </Stack>
                <Stack spacing={2}>
                  <ImageWrapper>
                    <Image
                      src="/feature-3.jpg"
                      alt="Feature Image"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </ImageWrapper>
                  <Box variant="centerCenter" columnGap={1.5}>
                    <DogFootprint />
                    <Typography textAlign="center">
                      Visit houses and make friends
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </GlassmorphismCard>
          </Box>
        </StyledGrid>
      </ContentWrapper>
    </Wrapper>
  );
};

const ContentWrapper = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    left: "30%",
    top: "14%",
    width: "66.18%",
    height: "77.22%",

    [theme.breakpoints.between("md", "lg")]: {
      width: "63%",
      left: "33%",
    },
  };
});

const StyledGrid = styled(Box)(({ theme }) => {
  return {
    display: "grid",
    gridTemplateColumns: "50% 40%",
    gap: "2rem",

    [theme.breakpoints.between("md", "lg")]: {
      gap: "clamp(0px,1.48vh,16px)",
    },
  };
});

export default FeatureSection;
