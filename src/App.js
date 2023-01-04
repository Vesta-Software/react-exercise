import {
  createStyles,
  AppShell,
  Navbar,
  Header,
  Image,
  NavLink,
} from "@mantine/core";

import logo from "./logo.png";
import properties from "./data.json";

const onClick = (name) => {
  console.log(`${name} was clicked!`);
};

const useStyles = createStyles(() => ({
  body: {
    backgroundColor: "WhiteSmoke",
  },
}));

function App() {
  const { classes } = useStyles();

  return (
    <AppShell
      padding="md"
      className={classes.body}
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          <NavLink
            label="Properties"
            color={"violet"}
            variant="filled"
            r
            active
          />
        </Navbar>
      }
      header={
        <Header height={50} p="xs">
          <Image width={100} height={26} src={logo} />
        </Header>
      }
    >
      {/* Your cards go here */}
    </AppShell>
  );
}

export default App;
