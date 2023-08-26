import {
  Title,
  Text,
  Container,
  Overlay,
  createStyles,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(45),
    paddingBottom: rem(45),
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.fn.smallerThan("xs")]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.black,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][8],
  },

  description: {
    color: theme.colors.black,
    textAlign: "center",
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("xs")]: {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    height: rem(42),
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

export function Form() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.1} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Assignment Task by{" "}
          <Text component="span" inherit className={classes.highlight}>
            Hariom Gupta
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            The name and photo associated with your Google Account will be
            recorded when you upload files and submit this form. Your email
            address is not part of your response.
            <br></br>
            <br></br>
            <Text color="red">* Indicates required question</Text>
          </Text>
        </Container>
      </div>
    </div>
  );
}
