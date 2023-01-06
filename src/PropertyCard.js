import { Card, Image, Text } from '@mantine/core';

export default function PropertyCard({ name, unitType, thumbUrl, address }) {
    return (
      <Card shadow="sm" p="lg" radius="md" miw={250} maw={450} withBorder>
        <Card.Section>
          <Image
            src={thumbUrl}
            height={160}
            alt={name}
          />
        </Card.Section>
  
        <Text fz="lg" weight={700} mt="md" mb="xs">{name}</Text>
  
        <Text size="sm" color="dimmed">
          {unitType} • {address}
        </Text>
      </Card>
    );
  }
