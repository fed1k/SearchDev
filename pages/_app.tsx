import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query'
import Head from 'next/head'
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={queryClient}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Put your description here." />
        <title>SearchDev</title>
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
}

export default MyApp
