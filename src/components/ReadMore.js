import React from 'react';
import { Link, Text } from '@peduarte/wallop-system';

export const ReadMore = ({ children, ...props }) => (
  <Text size="4" sx={{ color: 'gray' }}>
    <Link
      color="pink"
      my={['2', '3']}
      py="1"
      sx={{ display: 'inline-block' }}
      {...props}
    >
      {children}
    </Link>
  </Text>
);
