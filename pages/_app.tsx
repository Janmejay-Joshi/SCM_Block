import { AppProps } from "next/app";
import Head from "next/head";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useState } from "react";
import type { ConfigOptions } from '@web3modal/react'
import { Web3ModalProvider } from '@web3modal/react'
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { chains, providers } from '@web3modal/ethereum'
  import { ethers } from "ethers";

const desiredChainId = ChainId.Mumbai;

const config: ConfigOptions = {
  projectId: 'f554e3fadda20b51bc0f5587bfafe948',
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
  appName: 'web3Modal',
  chains:[chains.polygonMumbai],
  }
}





export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThirdwebProvider 
        desiredChainId={desiredChainId}
        autoConnect
      >
        <Web3ModalProvider config={config}>
          <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{
                colorScheme
              }}
            >
              <Component {...pageProps} />
            </MantineProvider>
          </ColorSchemeProvider>
        </Web3ModalProvider>
      </ThirdwebProvider>
    </>
  );
}
