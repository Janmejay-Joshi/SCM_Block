import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  NumberInput,
  FileInput,
  AppShell,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconAt,
  IconComponents,
  IconLock,
  IconPhone,
  IconUpload,
  IconUser,
  IconWriting,
} from "@tabler/icons";
import Head from "next/head";
import HeaderMegaMenu from "../../components/Header";
import { NavbarMinimal } from "../../components/Sidebar";
  import { useNFTDrop, useWalletConnect } from '@thirdweb-dev/react'

export default function Signup() {
  const contract = useNFTDrop("0x4fEfe8Abf8CE628AaB982b6EB99FF68cC71eCB89")
  const wallet = useWalletConnect();
  const form = useForm({
    initialValues: {
      name: "",
      units: "",
      desc: "",
      // d: "",
      // e: "",
      // f: "",
    },

    validate: {},
  });

const onSubmitNFT =async () => {
  const metadatas = [{
  name: "Cool NFT",
  description: "This is a cool NFT",
  units: 0
}, {
  name: "Cool NFT",
  description: "This is a cool NFT",
  units: 0
}];

  if(contract){
    const results = await contract.createBatch(metadatas); // uploads and creates the NFTs on chain
  }
}


  return (
    <>
      <Head>
        <title>Add Components</title>
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
      <Container size={420} my={40}>
            
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          <u>Add Components</u>
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
         
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={form.onSubmit(() => form.validate())}>
            <TextInput
              label="Name"
              placeholder=""
              {...form.getInputProps("name")}
              icon={<IconComponents size={14} />}
              required
            />
            <TextInput
              label="Units"
              placeholder=""
              {...form.getInputProps("units")}
              icon={<IconComponents size={14} />}
              mt="md"
              required
            />
            <TextInput
              label="Description"
              placeholder=""
              {...form.getInputProps("desc")}
              icon={<IconComponents size={14} />}
              mt="md"
              required
            />
            {/* <TextInput
              label="D"
              placeholder="d"
              {...form.getInputProps("d")}
              icon={<IconComponents size={14} />}
              mt="md"
              required
            />
            <TextInput
              label="E"
              placeholder="e"
              {...form.getInputProps("e")}
              icon={<IconComponents size={14} />}
              mt="md"
              required
            />
            <TextInput
              label="F"
              placeholder="f"
              {...form.getInputProps("f")}
              icon={<IconComponents size={14} />}
              mt="md"
              required
            /> */}

            <Button fullWidth mt="xl" type="submit" onClick={onSubmitNFT}>
              Add Components
            </Button>
          </form>
        </Paper>
        </Container>
      </AppShell>
    </>
  );
}
