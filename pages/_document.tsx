import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript,
  Html
} from 'next/document';
import { ServerPortal } from '@jesstelford/react-portal-universal/server';


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
    return (
      <Html>
        <Head>
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
