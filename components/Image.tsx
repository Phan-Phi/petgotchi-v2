import { forwardRef } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

import { Box } from "@/components";
import { styled } from "@mui/material";

type OmitKey = "alt";

const defaultBlurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

interface ImageProps extends Omit<NextImageProps, OmitKey> {
  alt?: string;
}

const Image = forwardRef<any, ImageProps>(function Image(props: ImageProps, ref) {
  const { alt, fill = true, width, height, ...restProps } = props;

  if (fill) {
    return (
      <Box position="relative" width={width} height={height} ref={ref}>
        <StyledImage
          fill={fill}
          blurDataURL={defaultBlurDataURL}
          alt={alt || ""}
          {...restProps}
        />
      </Box>
    );
  }

  return (
    <StyledImage
      ref={ref}
      fill={fill}
      width={width}
      height={height}
      blurDataURL={defaultBlurDataURL}
      alt={alt || ""}
      {...restProps}
    />
  );
});

const StyledImage = styled(NextImage)(() => {
  return {
    objectFit: "contain",
  };
});

export default Image;
