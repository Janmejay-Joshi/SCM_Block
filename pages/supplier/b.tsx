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

export default function Signup() {
  //Firebase

  const form = useForm({
    initialValues: {
      a: "",
      b: "",
      c: "",
      d: "",
      e: "",
      f: "",
    },

    validate: {},
  });

  return (
    <>
      <Head>
        <title>Add Components</title>
      </Head>
      <AppShell
        padding="md"
        header={<HeaderMegaMenu />}
        navbar={<NavbarMinimal />}
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
              label="A"
              placeholder="A"
              {...form.getInputProps("a")}
              icon={<IconComponents size={14} />}
              required
            />
            <TextInput
              label="b"
              placeholder="b"
              {...form.getInputProps("b")}
              icon={<IconComponents size={14} />}
              mt="md"
              required
            />
            <TextInput
              label="C"
              placeholder="c"
              {...form.getInputProps("c")}
              icon={<IconComponents size={14} />}
              mt="md"
              required
            />
            <TextInput
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
            />

            <Button fullWidth mt="xl" type="submit">
              Add Components
            </Button>
          </form>
        </Paper>
        </Container>
      </AppShell>
    </>
  );
}
