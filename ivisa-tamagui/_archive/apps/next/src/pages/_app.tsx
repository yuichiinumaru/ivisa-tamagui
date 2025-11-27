import { TamaguiProvider } from 'tamagui';
import config from '../../../packages/ui/src/tamagui.config';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ivisa Tamagui App</title>
        <meta name="description" content="Ivisa Tamagui App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TamaguiProvider config={config} defaultTheme="light">
        <Component {...pageProps} />
      </TamaguiProvider>
    </>
  );
}

export default MyApp;
