import {
    AppShell,
    Button,
    Center,
    Container,
    Grid,
    Group,
    Paper,
    SimpleGrid,
    Space,
    Stack,
  } from "@mantine/core";
  import Head from "next/head";
  import { useEffect, useState } from "react";
import AcceptCard from "../../components/AcceptCard";
  import Cards from "../../components/Card1";
  import HeaderMegaMenu from "../../components/Header";
  import { NavbarMinimal } from "../../components/Sidebar";
  import { FeaturesCard } from "../../components/UserNftCard";
  import styles from "../../styles/user/b.module.scss";
  
  export default function A() {
    useEffect(() => {}, []);
    return (
      <div className={styles.container}>
        <Head>
          <title>Dashboard</title>
        </Head>
        <AppShell
          padding="md"
          header={<HeaderMegaMenu />}
        //   navbar={<NavbarMinimal />}
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
              pl={100}
              pr={100}
              pt={30}
              pb={30}
              mt={20}
              radius="md"
            >
              <AcceptCard/>
            </Paper>
          </div>
        </AppShell>
      </div>
    );
  }
  