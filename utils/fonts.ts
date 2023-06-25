import localFont from "@next/font/local";

const Palpito = localFont({
  src: "../public/Palpito.otf",
});

const ComicHelveticLight = localFont({
  src: "../public/ComicHelvetic-Fix.otf",
});

type OmitProperties = "fontSize" | "fontWeight" | "lineHeight" | "letterSpacing";

const createTypographyProperties = (
  props: {
    fontSize: number;
    fontWeight: string | number;
    lineHeight: string | number;
    letterSpacing?: string | number;
    color?: string;
  } & Omit<React.CSSProperties, OmitProperties>
) => {
  const { fontSize, fontWeight, letterSpacing, lineHeight, ...restProps } = props;

  return {
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    ...restProps,
  };
};

export { Palpito, ComicHelveticLight, createTypographyProperties };
