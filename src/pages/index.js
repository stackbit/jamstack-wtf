import React from 'react';
import 'styled-components/macro';
import { Link } from 'gatsby';
import { Flex, Card, Text, Heading } from 'rebass';
import Layout from '../components/Layout';

export default function() {
  return (
    <Layout>
      <Flex alignItems="center" flexDirection="column" py={[3, 4]}>
        <Heading as="h1" fontSize={[6, 7, 8]}>
          JAMstack cheatsheet
        </Heading>
        <Text fontSize={[2, 3, 4]}>
          A straight-to-the-point guide to help you get on the JAMstack.
        </Text>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        css={`
          text-align: center;
          position: relative;
          z-index: 1;
        `}
      >
        <Card
          flex="1"
          m={[5]}
          p={[5]}
          bg="white"
          boxShadow="2px 4px 16px rgba(0, 0, 0, 0.02)"
          borderRadius="3px"
        >
          <Link to="/getting-started">
            <Text fontSize={[4]}>Getting started</Text>
          </Link>
        </Card>
        <Card
          flex="1"
          m={[5]}
          p={[5]}
          bg="white"
          boxShadow="2px 4px 16px rgba(0, 0, 0, 0.02)"
          borderRadius="3px"
        >
          <Link to="/what-is-jamstack">
            <Text fontSize={[4]}>What is JAMstack?</Text>
          </Link>
        </Card>
      </Flex>
      <p>
        <Link to="/resources">Resources</Link>
      </p>
      <p>
        <Link to="/examples">Examples</Link>
      </p>
    </Layout>
  );
}
