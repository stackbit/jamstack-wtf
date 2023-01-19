import React from 'react';
import { Flex, Box, Text } from '@peduarte/wallop-system';

export function WorkflowDiagram() {
  return (
    <Flex
      mt={[5, 6]}
      mx="auto"
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '360px',
      }}
    >
      <Item sx={{ bg: 'turq' }}>Develop</Item>
      <Stem />
      <Circle>Version Control</Circle>
      <Stem />
      <Item sx={{ bg: 'orange' }}>Automated build</Item>
      <Stem />
      <Circle>Static assets</Circle>
      <Stem />
      <Circle>Atomic deploy</Circle>
      <Stem />
      <Circle>Pre-render &amp; invalidate cache</Circle>
      <Stem />
      <Item sx={{ bg: 'pink' }}>Update CDN</Item>
    </Flex>
  );
}

const Item = (props) => (
  <Box
    {...props}
    py="4"
    sx={{
      textAlign: 'center',
      flex: '1',
      color: 'black',
      width: '100%',
      borderRadius: '16px',
      ...props.sx,
    }}
  >
    <Text size="4">{props.children}</Text>
  </Box>
);

const Circle = (props) => (
  <Box
    {...props}
    sx={{
      display: 'flex',
      height: '150px',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      width: '150px',
      borderRadius: '100%',
      border: '3px solid white',
    }}
  >
    <Text size="3">{props.children}</Text>
  </Box>
);

const Stem = (props) => (
  <Box
    mx="auto"
    pt={['4', '5']}
    {...props}
    sx={{ width: '3px', bg: 'white' }}
  />
);
