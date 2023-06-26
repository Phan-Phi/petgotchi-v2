import { Stack, Typography, styled } from "@mui/material";

import Image from "./Image";
import { Palpito } from "@/utils";

interface CardItemProps {
  imgSrc: string;
  name: string;
  title: string;
}

const TeamMemberCard = (props: CardItemProps) => {
  const { name, imgSrc, title } = props;
  return (
    <Stack spacing={1} alignItems="center">
      <Image src={imgSrc} alt={title} style={{ pointerEvents: "none", maxWidth: 350 }} />
      <StyledName variant="h2" fontFamily={Palpito.style.fontFamily}>
        {name}
      </StyledName>
      <StyledTitle color="primary.main">{title}</StyledTitle>
    </Stack>
  );
};

const StyledName = styled(Typography)(({ theme }) => {
  return {
    background: "linear-gradient(180deg, #FFB37D 16.98%, #FFF5C3 76.87%)",
    backgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent",
    WebkitTextStroke: "2px #BF570C",
    textAlign: "center",
  };
});

const StyledTitle = styled(Typography)(({ theme }) => {
  return {
    color: "primary.main",
    textAlign: "center",
    marginTop: "0 !important",
    fontSize: "clamp(1rem, 2.40vh,26px) !important",
    lineHeight: "clamp(1rem, 2.96vh,32px) !important",
    // [theme.breakpoints.down("md")]: {
    //   fontSize: "clamp(1rem, 1.85vh, 20px)",
    //   lineHeight: "clamp(1rem, 2.22vh, 24px)",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "clamp(1rem, 1.48vh, 16px)",
    //   lineHeight: "clamp(1rem, 2.22vh, 20px)",
    // },
  };
});

export default TeamMemberCard;
