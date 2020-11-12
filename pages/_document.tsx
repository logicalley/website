import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript,
  Html
} from 'next/document';
import { ServerPortal } from '@jesstelford/react-portal-universal/server';

import { GA_TRACKING_ID } from '../utils/googleAnalytics';
import { Fragment } from 'react';


class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const portals = new ServerPortal()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          portals.collectPortals(<App {...props} />),
      })

    const { html, ...props } = await Document.getInitialProps(ctx)

    const htmlWithPortals = portals.appendUniversalPortals(html)

    return {
      html: htmlWithPortals,
      ...props,
    }
  }



  render() {
    const analyticsUrl: string = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    const isDev: boolean = process.env.NODE_ENV === 'development';

    return (
      <Html>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
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
            `
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
