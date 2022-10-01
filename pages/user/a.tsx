import { AppShell, Container, Group, Paper, Space } from "@mantine/core";
import Head from "next/head";
import { useEffect, useState } from "react";
import HeaderMegaMenu from "../../components/Header";
import styles from "../../styles/user/a.module.scss";



export default function A() {
  useEffect(() => {
    
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
      </Head>
      <AppShell
        padding="md"
        header={<HeaderMegaMenu />}
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
            <>
              <Paper withBorder shadow="md" pl={60} pr={60} pt={30} pb={30} mt={30} radius="md" >
              
              </Paper>
            </>
        </div>
      </AppShell>
    </div>
  );
}
