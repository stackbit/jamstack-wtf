import React from 'react';
import { Flex, Box, Text } from '@peduarte/wallop-system';

export function JamDiagram() {
  return (
    <Flex my={[5, 6]} sx={{ flexWrap: 'wrap', textAlign: 'center' }}>
      <Item sx={{ bg: 'turq', borderRadius: '16px 4px 4px 4px' }}>
        JavaScript
      </Item>
      <Item mx="6px" sx={{ bg: 'orange', borderRadius: '4px' }}>
        APIs
      </Item>
      <Item sx={{ bg: 'pink', borderRadius: '4px 16px 4px 4px' }}>Markup</Item>
      <Item
        mt="6px"
        sx={{
          flex: '1 1 100%',
          bg: 'white',
          borderRadius: '4px 4px 16px 16px',
        }}
      >
        JAM
      </Item>
    </Flex>
  );
}

const Item = ({ children, sx, ...props }) => (
  <Box py="4" {...props} sx={{ flex: 1, color: 'black', ...sx }}>
    <Text size="4">{children}</Text>
  </Box>
);
