import React from 'react';
import { Box, Text } from 'rebass';

export function Chapter({ title, id, bg, color, children }) {
  return (
    <Box p={[4, 5]} bg={bg} color={color}>
      <Text as="h2" fontSize={[3, 4]} id={id}>
        {title}
      </Text>
      {children}
    </Box>
  );
}
