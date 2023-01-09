import { Image, Card, Text, Grid } from "@mantine/core";

import properties from "./data.json";

const onClick = (name) => {
  console.log(`${name} was clicked!`);
};

function CardGrid() {
  return (
    <Grid
      justify="space-evenly"
      gutter={5}
      gutterXs="md"
      gutterMd="xl"
      gutterXl={50}
    >
      {properties.map((property) => {
        return (
          <Grid.Col id={property.name} key={property.name} md={6} lg={3}>
            <Card
              withBorder
              radius="md"
              shadow="xl"
              maw={250}
              onClick={() => onClick(property.name)}
              data-testid={property.name}
            >
              <Card.Section>
                <Image src={property.thumbUrl} width={250} height={150} />
              </Card.Section>
              <Card.Section>
                <Text size="lg" m="md" weight={600}>
                  {property.name}
                </Text>
                <Text size="md" m="md" weight={100} color="dimmed">
                  {property.unitType} • {property.address}
                </Text>
              </Card.Section>
            </Card>
          </Grid.Col>
        );
      })}
    </Grid>
  );
}

export default CardGrid;
