import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript,
  Html,
} from 'next/document';
import { ServerPortal } from '@jesstelford/react-portal-universal/server';
import getConfig from 'next/config';

import { GA_TRACKING_ID } from '../utils/googleAnalytics';
import { Fragment } from 'react';


const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const portals = new ServerPortal();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          portals.collectPortals(<App {...props} />),
      });

    const { html, ...props } = await Document.getInitialProps(ctx);

    const htmlWithPortals = portals.appendUniversalPortals(html);

    return {
      html: htmlWithPortals,
      ...props,
    };
  }

  render() {
    const analyticsUrl: string = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    const { NONCE, ENV } = publicRuntimeConfig;
    const isDev: boolean = ENV === 'development';
    console.log({ NONCE, ENV })
    // const referrer = 'strict-origin';
    // const cspContent = `default-src 'self' *.dzcdn.net api.anniemusic.app googletagmanager.com; style-src 'strict-dynamic' 'nonce-w329sdada'; script-src 'strict-dynamic'; object-src 'none'; font-src 'self'; img-src 'self' res.cloudinary.com *.scdn.co *.dzcdn.net; frame-src airtable.com; base-uri 'self'; frame-ancestors airtable.com; report-uri http://localhost:5000/api/v1/complaint/csp`;

    return (
      <Html>
        <Head nonce={NONCE}></Head>
        <body>
          <Main />
          <NextScript nonce={NONCE} />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {isDev ? null : (
            <Fragment>
              <script async src={analyticsUrl} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
            `,
                }}
              />
            </Fragment>
          )}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
