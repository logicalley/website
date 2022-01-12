import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript,
  Html,
} from 'next/document';
import { ServerPortal } from '@jesstelford/react-portal-universal/server';
import getConfig from 'next/config';


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
    // const referrer = 'strict-origin';
    // const cspContent = `default-src 'self' *.dzcdn.net api.anniemusic.app googletagmanager.com; style-src 'strict-dynamic' 'nonce-w329sdada'; script-src 'strict-dynamic'; object-src 'none'; font-src 'self'; img-src 'self' res.cloudinary.com *.scdn.co *.dzcdn.net; frame-src airtable.com; base-uri 'self'; frame-ancestors airtable.com; report-uri http://localhost:5000/api/v1/complaint/csp`;

    return (
      <Html>
        <Head nonce={publicRuntimeConfig.nonce}></Head>
        <body>
          <Main />
          <NextScript nonce={publicRuntimeConfig.nonce} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
