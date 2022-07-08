import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Akhil | Student Researcher"
        titleTemplate="Akhil | Student Researcher"
        defaultTitle="Akhil | Student Researcher"
        description="Hey! I'm Akhil, a student researcher and developer!"
        openGraph={{
          url: "",
          title: "Akhil | Student Researcher",
          description:
            "Hey! I'm Akhil, a student researcher and developer!",
          images: [
            {
              url: "",
              width: 800,
              height: 420,
              alt: "Akhil | Student Researcher",
            },
          ],
        }}
        
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "student researcher, astronomy, astrophysics, akhil, akhil nair, web development, web developer, tech enthusiast, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/avatar.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
