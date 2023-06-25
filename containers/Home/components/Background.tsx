import React from "react";
import { useMedia } from "@/hooks";

const Background = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const { isMdDown } = useMedia();

  const { alt, style, ...restProps } = props;

  return (
    <img
      style={{
        objectFit: "cover",
        height: isMdDown ? "100%" : "100vh",
        pointerEvents: "none",
        userSelect: "none",
        width: isMdDown ? "100%" : undefined,
        ...style,
      }}
      alt={alt || ""}
      {...restProps}
    />
  );
};

export default Background;
