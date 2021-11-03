import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@900&family=Open+Sans&display=swap"
          />
          <meta name="robots" content="index, follow" />
          <link
            rel="android-chrome-icon"
            sizes="512x512"
            href="https://phounton.sirv.com/Images/ac-dev-portfolio/icons/android-chrome-512x512.png"
          />
          <link
            rel="android-chrome-icon"
            sizes="192x192"
            href="https://phounton.sirv.com/Images/ac-dev-portfolio/icons/android-chrome-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://phounton.sirv.com/Images/ac-dev-portfolio/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://phounton.sirv.com/Images/ac-dev-portfolio/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://phounton.sirv.com/Images/ac-dev-portfolio/icons/favicon-16x16.png"
          />
          <link
            rel="manifest"
            href="https://phounton.sirv.com/Images/ac-dev-portfolio/icons/site.webmanifest"
          />
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-Y5JK4HW69N"
          ></script>

          <Script>
            dangerouslySetInnerHTML=
            {{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date()); gtag('config', 'G-Y5JK4HW69N');`,
            }}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
