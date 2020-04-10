import React from 'react';
import { Box, Text, Divider } from '@peduarte/wallop-system';

export function Chapter({ title, id, children, ...props }) {
  return (
    <Box p={['4', '5', '6']} {...props}>
      <Text as="h2" size="5" id={id}>
        {title}
      </Text>
      <Divider size="1" my={3} mx="0" />
      {children}
    </Box>
  );
}
