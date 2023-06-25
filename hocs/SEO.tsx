import { NextSeo, NextSeoProps } from "next-seo";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
  locale?: string;
  defaultNextSeo?: NextSeoProps;
};

const SEO = (props: SEOProps) => {
  const title = "Petgotchi | Your Beloved Pet Friends in the Virtual World";
  const description =
    "Petgotchi is an augmented reality (AR) mobile game on a mission to bring the most beloved animal friends to you in the virtual world.";

  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title,
        description: description,
        site_name: "Petgotchi",
        images: [
          {
            url: "/open_graph.jpg",
            alt: title,
            type: "image/jpeg",
          },
        ],
      }}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          href: "/favicon.ico",
        },
      ]}
    />
  );
};

export default SEO;
