import React from "react";

const Image = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const { alt, style, ...restProps } = props;

  return (
    <img
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        pointerEvents: "none",
        userSelect: "none",
        ...style,
      }}
      alt={alt || ""}
      {...restProps}
    />
  );
};

export default Image;
