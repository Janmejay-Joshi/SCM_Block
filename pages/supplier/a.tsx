import { AppShell, Container, Grid, Group, Paper, SimpleGrid, Space } from "@mantine/core";
import Head from "next/head";
import { useEffect, useState } from "react";
import HeaderMegaMenu from "../../components/Header";
import { NavbarMinimal } from "../../components/Sidebar";
import { FeaturesCard } from "../../components/UserNftCard";
import styles from "../../styles/user/a.module.scss";

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
            radius="md"
          >
            <SimpleGrid cols={3}
            breakpoints={[
              { maxWidth: 980, cols: 3, spacing: 'md' },
              { maxWidth: 755, cols: 2, spacing: 'sm' },
              { maxWidth: 600, cols: 1, spacing: 'sm' },
            ]}
            >
              {
               [1,2,3,4].map((data, index)=>{
                return <div key={index}><FeaturesCard/></div>
               }) 
              }
            </SimpleGrid>
          </Paper>
        </div>
      </AppShell>
    </div>
  );
}
