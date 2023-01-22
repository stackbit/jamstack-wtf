import React from 'react';
import { Container, Box, Flex, Text, Link } from '@peduarte/wallop-system';
import Layout from '../components/Layout';
import { TableOfContents } from '../components/TableOfContents';
import { GettingStarted } from '../components/GettingStarted';
import { WhatIsJamstack } from '../components/WhatIsJamstack';
import { Resources } from '../components/Resources';
import { About } from '../components/About';

export default function () {
  return (
    <Layout>
      <Box px={[4, 5, 6]} py={[2, 3]} sx={{ bg: 'black', color: 'white' }}>
        <Flex
          my={[5, 3]}
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text as="h1" size="4" mr="6" mb="4">
            Jamstack{' '}
            <Text as="span" ml="1" sx={{ color: 'gray' }}>
              WTF
            </Text>
          </Text>
          <Text as="p" size="3" mb="3">
            <Text as="span" mr="4" mb="3" sx={{ display: 'inline-block' }}>
              Create a new Jamstack site in 60 seconds{' '}
            </Text>
            <Link
              href="https://jamstack.new"
              title="Create Jamstack site"
              p="3"
              mb="3"
              sx={{
                textDecoration: 'none',
                bg: 'pink',
                color: 'black',
                display: 'inline-flex',
                boxShadow: 'none',
                '&:hover': { bg: 'white', color: 'black' },
              }}
            >
              jamstack.new
            </Link>
          </Text>
        </Flex>
        <a href="https://www.stackbit.com/?ref=wtf&utm_source=jamstack-wtf&utm_medium=referral&utm_campaign=jamstack-wtf">
          <img
            width="95%"
            style={{ maxWidth: '700px' }}
            src="/sb-small-banner.svg"
          />
        </a>
        <Container my={[3, 5]} mx="0">
          <Text as="p" size="6" as="p">
            Jamstack has revolutionized the way we think about building for the
            web by providing a simpler developer experience, better performance,
            lower cost and greater scalability.
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
      <Box px={[4, 5, 6]} py={[3, 4]} sx={{ textAlign: 'center' }}>
        <Text as="h3" size="4">
          &#9994; Join us in supporting the{' '}
          <Link
            href="https://support.eji.org/give/153413"
            title="Support the Equal Justice Initiative"
          >
            Equal Justice Initiative.
          </Link>
        </Text>
      </Box>
    </Layout>
  );
}

const Item = ({ children, sx, ...props }) => (
  <Box py="4" {...props} sx={{ flex: 1, color: 'black', ...sx }}>
    <Text size="4">{children}</Text>
  </Box>
);
