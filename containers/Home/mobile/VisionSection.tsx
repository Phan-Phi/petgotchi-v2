import React from "react";

import Wrapper from "../components/Wrapper";
import Background from "../components/Background";

const VisionSection = ({
  onLoad,
}: {
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
}) => {
  return (
    <Wrapper>
      <Background
        src={"/vision-bg-mobile.jpg"}
        alt="Vision Section Background"
        onLoad={onLoad}
      />
    </Wrapper>
  );
};

export default VisionSection;
