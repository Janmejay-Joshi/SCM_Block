import {
  AppShell,
  Container,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Space,
} from "@mantine/core";
import Head from "next/head";
import { useEffect, useState } from "react";
import HeaderMegaMenu from "../../components/Header";
import { NavbarMinimal } from "../../components/Sidebar";
import { FeaturesCard } from "../../components/UserNftCard";
import styles from "../../styles/user/a.module.scss";
import { useAccount } from "@web3modal/react";

export default function A() {
  const { chainSupported, address, chainId, connector } = useAccount();
  console.log(address);

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
      </Head>
      <AppShell
        padding="md"
        header={<HeaderMegaMenu />}
        //navbar={<NavbarMinimal />}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <div className={styles.main_cont}>
          <Paper
            withBorder
            shadow="md"
            pl={60}
            pr={60}
            pt={30}
            pb={30}
            mt={20}
            radius="md"
          >
            
            <iframe
              src="https://gateway.ipfscdn.io/ipfs/QmPaVYdGue8zEXFKqrtVHpvzBvufM1DYzw5n1of3KVPG88/nft-drop.html?contract=0x4fEfe8Abf8CE628AaB982b6EB99FF68cC71eCB89&chainId=80001"
              width="600px"
              height="600px"
            ></iframe>
          </Paper>
        </div>
      </AppShell>
    </div>
  );
}
