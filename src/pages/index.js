import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Card, Text } from 'rebass';
import Layout from '../components/Layout';
import { TableOfContents } from '../components/TableOfContents';
import { color } from '../styles/colors';
import { GettingStarted } from '../components/GettingStarted';
import { WhatIsJamstack } from '../components/WhatIsJamstack';

export default function() {
  return (
    <Layout>
      <Box p={[4, 5]} bg={color.black} color="white">
        <Flex flexWrap="wrap">
          <Text as="h1" fontSize={[2, 3]} mr="2" flex="0 0 auto">
            JAMstack
          </Text>
          <Text as="h2" fontSize={[2, 3]} color={color.grey} flex="0 0 auto">
            Cheatsheet
          </Text>
        </Flex>
        <Box my={[5, 6]} style={{ maxWidth: '720px' }} fontSize={[3, 5]}>
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
    </Layout>
  );
}
