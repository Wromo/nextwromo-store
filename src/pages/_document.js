import Document, { Html, Head, Main, NextScript } from 'next/document';

const APP_NAME =
  'NextWromo - Next Wromo Studio Marketplace e-Commerce';
const APP_DESCRIPTION =
  'This is Next Wromo Studio Marketplace e-Commerce';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          <meta
            property="og:title"
            content="NextWromo - Next Wromo Studio Marketplace e-Commerce"
          />
          <meta property="og:type" content="eCommerce Website" />
          <meta
            property="og:url"
            content="https://wromo.de/"
          />
          <meta
            property="og:image"
            content="https://wromo.de/.product-pe-wromo-080122-RQDS3Xxsd/gif-end-foto/prev.app/prev_wromox_app.PNG"
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
