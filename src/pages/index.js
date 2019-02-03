import React from 'react';
import { Flex, Box, Text } from 'rebass';
import Layout from '../components/Layout';
import { TableOfContents } from '../components/TableOfContents';
import { color } from '../styles/colors';
import { GettingStarted } from '../components/GettingStarted';
import { WhatIsJamstack } from '../components/WhatIsJamstack';
import { Resources } from '../components/Resources';
import { About } from '../components/About';

export default function() {
  return (
    <Layout>
      <Box px={[4, 5, 6]} py={[4, 5]} bg={color.black} color="white">
        <Text as="h1" fontSize={[2, 3]}>
          JAMstack{' '}
          <Text as="span" color={color.grey} ml="1">
            Cheatsheet
          </Text>
        </Text>

        <Box my={[5, 6]} fontSize={[3, 5]} style={{ maxWidth: '720px' }}>
          <Text as="p">
            JAMstack is revolutionising the way we think about workflow by
            providing a simpler developer experience, performance, cost and
            scalability.
          </Text>
          <Text mt="5">
            This simple guide will help you understand why it exists and how to
            get started.
          </Text>
        </Box>
      </Box>

      <TableOfContents />
      <WhatIsJamstack />
      <GettingStarted />
      <Resources />
      <About />
    </Layout>
  );
}
