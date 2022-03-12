import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon/favicon.ico" />
          <meta name="description" content="search for specific courses !" />
          <meta property="og:title" content="teachup" />
          <meta
            property="og:title"
            content="https://images.ctfassets.net/02imfqqzx7ws/2qxWfHW6FbMf523n9dtc36/a9dd9c455c2e9e4ff6e1797f9e877f37/logo.svg"
          />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
