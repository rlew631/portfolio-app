import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
        <title>Ryan Lewis</title>
        <link rel="shortcut icon" href="%PUBLIC_URL%/icon.png" />
        <meta property="og:image" content="%PUBLIC_URL%/Preview.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
