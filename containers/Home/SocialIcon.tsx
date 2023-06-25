import React, { useMemo } from "react";
import { Divider, Stack, styled, SvgIconProps, Typography } from "@mui/material";

import {
  Box,
  Link,
  TiktokIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "@/components";
import { useMedia } from "@/hooks";

const socialList = [
  {
    link: "https://www.instagram.com/petgotchi.official/",
    Icon: InstagramIcon,
  },
  {
    link: "https://www.tiktok.com/@petgotchiofficial123?_t=8bClLW4LEEU&_r=1",
    Icon: TiktokIcon,
  },
  {
    link: "https://twitter.com/petgotchi",
    Icon: TwitterIcon,
  },
  {
    link: "https://www.linkedin.com/company/petgotchi/",
    Icon: LinkedinIcon,
  },
] as const;

const SocialIcon = () => {
  const { isMdDown } = useMedia();

  const JoinCommunity = useMemo(() => {
    if (!isMdDown) return null;

    return <Typography marginBottom={2}>Join the community</Typography>;
  }, [isMdDown]);

  return (
    <Stack justifyContent="center" alignItems={"center"}>
      {JoinCommunity}
      <SocialIconWrapper
        className="social-wrapper"
        divider={<Divider orientation="vertical" flexItem color="#431988" />}
      >
        {socialList.map((el, idx) => {
          return <SocialItem key={idx} {...el} />;
        })}
      </SocialIconWrapper>

      <StyledTypography>Copyright © 2023 Petgotchi. All rights reserved</StyledTypography>
    </Stack>
  );
};

const SocialItem = (props: {
  link: string;
  Icon: (props: SvgIconProps<"svg", {}>) => JSX.Element;
}) => {
  const { Icon, link } = props;
  const { isMdDown, isXlDown } = useMedia();

  const size = useMemo(() => {
    if (isMdDown) return 24;

    if (isXlDown) return 24;

    return 28;
  }, [isMdDown, isXlDown]);

  return (
    <Link href={link} target="_blank">
      <WrapperIcon>
        <Icon
          className="social-icon"
          sx={{
            width: size,
            height: size,
            fill: "#B69FD8",
          }}
        />
      </WrapperIcon>
    </Link>
  );
};

const SocialIconWrapper = styled(Stack)(() => {
  return {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 16,
    borderRadius: 40,
    backdropFilter: "blur(9.5px)",
    border: "2px solid #FFF",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    overflow: "hidden",
  };
});

const WrapperIcon = styled(Box)(({ theme }) => {
  return {
    paddingLeft: 36,
    paddingRight: 36,
    display: "flex",
    [theme.breakpoints.down("md")]: {
      paddingLeft: 12,
      paddingRight: 12,
    },
    [theme.breakpoints.down("xl")]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
    ["&:hover .social-icon"]: {
      fill: "#431988",
    },
  };
});

const StyledTypography = styled(Typography)(({ theme }) => {
  return {
    color: "#A99EBB",
    paddingTop: 20,
    paddingBottom: 8,
    fontSize: "13px !important",
    lineHeight: "16px !important",
    // [theme.breakpoints.up("xl")]: {
    //   fontSize: 18,
    // },
    // [theme.breakpoints.down("xl")]: {
    //   fontSize: 16,
    // },
    [theme.breakpoints.down("md")]: {
      paddingBottom: 32,
    },
  };
});

export default SocialIcon;
