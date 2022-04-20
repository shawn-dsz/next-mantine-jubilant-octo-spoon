import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'dark',
          // Override any other properties from default theme
          // fontFamily: 'Open Sans, sans serif',
          spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}