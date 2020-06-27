import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body style={{ margin: '0px', padding: '0px' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
