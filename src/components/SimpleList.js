import React from 'react';
import { Box, Text } from '@peduarte/wallop-system';

export const Ul = props => (
  <Box
    as="ul"
    mt={('3', '4')}
    {...props}
    sx={{
      listStyle: 'none',
      ...props.sx,
    }}
  />
);

export const Li = props => (
  <li>
    <Text
      as="p"
      size="4"
      sx={{
        '&:not(:hover)': {
          color: 'gray',
        },
        // '&:hover': { color: 'black' },
        '& a': {
          display: 'block',
          lineHeight: 'inherit',
          color: 'inherit',
          borderBottom: '1px solid',
          '&:hover': { color: 'inherit' },
        },
      }}
    >
      {props.children}
    </Text>
  </li>
);
