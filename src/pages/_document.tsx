import Document, { Html, Head, Main, NextScript } from "next/document";

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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
