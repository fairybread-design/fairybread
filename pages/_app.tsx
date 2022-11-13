import type { AppProps } from 'next/app';

import GlobalStyle from '../src/styles/next';
import Head from 'next/head';
import '../src/styles/global.css';

import { MainPile, Pile } from '../src/components/layer';

// Next.js specific global styles
import GlobalNextStyle from '../src/styles/global';
import ModalLayerShifter from '../src/components/modal/src/components/shifter';
import Script from 'next/script';
import Page from '../src/website/page';
import NotificationProvider from '../src/components/notification';
import ErrorBoundary from '../src/website/error-boundary';

const title = 'Figura · Finance calculators';
const description =
  'A suite of free tools for Australians to get a clearer, more accurate view of their home loans and finances.';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta key="description" name="description" content={description} />

        <meta key="og:title" property="og:title" content={title} />
        <meta
          key="og:description"
          name="og:description"
          content={description}
        />
        {/* TODO: Uses repayments calculator image for now */}
        <meta
          key="og:image"
          property="og:image"
          content="/images/og-meta/repayments-calculator.png"
        />

        <link rel="icon" href="/favicon.ico?v=2" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=2"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=2"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=2"
          color="#4200fe"
        />
        <meta name="msapplication-TileColor" content="#4200fe" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="theme-color"
          content="#4200fe"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#1f7dff"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      {/* TODO: This is the MyFonts webfont license for TT Hoves. I can't add a HTML comment in React without rendering an element... */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
<!--
  /**
    * @license
    * MyFonts Webfont Build ID 715775
    *
    * The fonts listed in this notice are subject to the End User License
    * Agreement(s) entered into by the website owner. All other parties are
    * explicitly restricted from using the Licensed Webfonts(s).
    *
    * You may obtain a valid license from one of MyFonts official sites.
    * http://www.fonts.com
    * http://www.myfonts.com
    * http://www.linotype.com
    *
    */
-->
`,
        }}
      />
      {process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' &&
        process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
              strategy="afterInteractive"
            />
            <Script
              strategy="afterInteractive"
              id="google-analytics-gtag"
              dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `,
              }}
            />
          </>
        )}
      <GlobalStyle />
      <GlobalNextStyle />
      <MainPile>
        {({ pile, index }) => (
          <NotificationProvider>
            <div style={{ zIndex: index, position: 'relative' }}>
              <ModalLayerShifter pile={pile}>
                <Pile>
                  <Page>
                    <ErrorBoundary>
                      <Component {...pageProps} />
                    </ErrorBoundary>
                  </Page>
                </Pile>
              </ModalLayerShifter>
            </div>
          </NotificationProvider>
        )}
      </MainPile>
    </>
  );
}

export default App;
