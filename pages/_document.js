import { Html, Head, Main, NextScript } from 'next/document'
import { ClerkProvider } from '@clerk/nextjs'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}