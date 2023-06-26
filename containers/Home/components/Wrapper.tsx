import { Box } from "@/components";

import { styled } from "@mui/material";

const Wrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    display: "flex",
    height: "100vh",

    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
  };
});

export default Wrapper;
