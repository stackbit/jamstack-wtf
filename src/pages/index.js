import React from 'react';
import { Container, Box, Text, Link } from '@peduarte/wallop-system';
import Layout from '../components/Layout';
import { TableOfContents } from '../components/TableOfContents';
import { GettingStarted } from '../components/GettingStarted';
import { WhatIsJamstack } from '../components/WhatIsJamstack';
import { Resources } from '../components/Resources';
import { About } from '../components/About';

export default function() {
  return (
    <Layout>
      <Box px={[4, 5, 6]} py={[3, 4]}>
        <Text as="h1" size="4">
          Black Lives Matter.{' '}
          <Link
            href="https://support.eji.org/give/153413/#!/donation/checkout"
            title="Support the Equal Justice Initiative"
          >
            Support the Equal Justice Initiative.
          </Link>
        </Text>
      </Box>
      <Box px={[4, 5, 6]} py={[4, 5]} sx={{ bg: 'black', color: 'white' }}>
        <Text as="h1" size="4">
          JAMstack{' '}
          <Text as="span" ml="1" sx={{ color: 'gray' }}>
            WTF
          </Text>
        </Text>

        <Container my={[5, 6]} mx="0">
          <Text as="p" size="6" as="p">
            JAMstack is revolutionising the way we think about workflow by
            providing a simpler developer experience, better performance, lower
            cost and greater scalability.
          </Text>
          <Text as="p" size="6" mt={5}>
            This simple guide will help you understand why it exists and how to
            get started.
          </Text>
        </Container>
      </Box>

      <TableOfContents />
      <WhatIsJamstack />
      <GettingStarted />
      <Resources />
      <About />
    </Layout>
  );
}
