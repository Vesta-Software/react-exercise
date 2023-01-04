import { AppShell, Navbar, Header, Image, NavLink } from "@mantine/core";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <AppShell
      padding="md"
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
      {/* Your application here */}
    </AppShell>
  );
}

export default App;
