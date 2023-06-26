import React from "react";
import { useMedia } from "@/hooks";

const Background = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const { isMdDown } = useMedia();

  const { alt, style, ...restProps } = props;

  return (
    <img
      className="image"
      style={{
        objectFit: "cover",
        height: isMdDown ? "100%" : "100vh",
        pointerEvents: "none",
        userSelect: "none",
        width: isMdDown ? "100%" : undefined,
        backgroundSize: "cover",
        // backgroundPositionX: "",
        // paddingBottom: "100px",
        ...style,
      }}
      alt={alt || ""}
      {...restProps}
    />
  );
};

export default Background;
