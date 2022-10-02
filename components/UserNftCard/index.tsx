import { Card, Image, Text, Group, Badge, createStyles, Center, Button, Stack } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));

const mockdata = [
  { label: 'Product1',nousers:20, icon: IconUsers },
  { label: 'Product2',nousers:40, icon: IconUsers },
  { label: 'Product3',nousers:50, icon: IconUsers },
  { label: 'Electric',nousers:40, icon: IconUsers },
];

export function FeaturesCard() {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <div key={feature.label}>
      <Group>
      <feature.icon size={18} className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
      <Text size="xs">{feature.nousers}</Text>
      </Group>
    </div>
  ));

  return (
    <Card withBorder radius="md" className={classes.card} mt='md'>
      <Card.Section className={classes.imageSection}>
        <Image src="https://i.imgur.com/ZL52Q2D.png" alt="Tesla Model S" />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text weight={500}>Product</Text>
          
        </div>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text size="sm" color="dimmed" className={classes.label}>
          Basic configuration
        </Text>

        <Stack spacing={8} mb={-8}>
          {features}
        </Stack>
      </Card.Section>

      
    </Card>
  );
}