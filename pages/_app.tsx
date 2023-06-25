import type { AppProps } from "next/app";
import { CacheProvider, type EmotionCache } from "@emotion/react";

import { ThemeProvider } from "@/contexts";
import { ErrorBoundary, SEO } from "@/hocs";
import { createEmotionCache } from "@/utils";

import "@/styles/style.css";
import Head from "next/head";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>
        <ErrorBoundary>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1"
            />
          </Head>
          <SEO />
          <Component {...pageProps} />
        </ErrorBoundary>
      </ThemeProvider>
    </CacheProvider>
  );
}
