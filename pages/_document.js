import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className='bg-gray-100'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}