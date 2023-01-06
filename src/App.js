import {
  createStyles,
  AppShell,
  Navbar,
  Header,
  Image,
  NavLink,
  SimpleGrid,
} from "@mantine/core";

import logo from "./logo.png";
import properties from "./data.json";
import PropertyCard from "./PropertyCard";

const useStyles = createStyles(() => ({
  body: {
    backgroundColor: "WhiteSmoke",
  },
}));

function App() {
  const { classes } = useStyles();
  const propertyCards = properties.map(property => <PropertyCard key={property.name} {...property} />)

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
      <SimpleGrid
        cols={3}
        spacing="xl"
        mx="xl"
        data-testid="card-container"
        maw={1440}
        breakpoints={[
          { maxWidth: 1200, cols: 2 },
          { maxWidth: 900, cols: 1 }
        ]}>
        { propertyCards }
      </SimpleGrid>
    </AppShell>
  );
}

export default App;
