import React from 'react';
import 'styled-components/macro';
import { Link } from 'gatsby';
import { Flex, Card, Text, Heading } from 'rebass';
import Layout from '../components/Layout';
import { green, pink, blue, red } from '../styles/colors';

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
        `}
      >
        <Card
          flex="1 1 320px"
          my={[2]}
          mx={[2]}
          py={[5]}
          px={[2]}
          border={`2px solid`}
          borderRadius="3px"
          color={green}
          fontSize={[3, 4]}
        >
          <Link to="/what-is-jamstack">What is JAMstack?</Link>
        </Card>
        <Card
          flex="1 1 320px"
          my={[2]}
          mx={[2]}
          py={[5]}
          px={[2]}
          border={`2px solid`}
          borderRadius="3px"
          color={pink}
          fontSize={[3, 4]}
        >
          <Link to="/getting-started">
            <Text fontSize={[3, 4]}>Getting started</Text>
          </Link>
        </Card>
        <Card
          flex="1 1 320px"
          my={[2]}
          mx={[2]}
          py={[5]}
          px={[2]}
          border={`2px solid`}
          borderRadius="3px"
          color={blue}
          fontSize={[3, 4]}
        >
          <Link to="/resources">
            <Text fontSize={[3, 4]}>Resources</Text>
          </Link>
        </Card>
        <Card
          flex="1 1 320px"
          my={[2]}
          mx={[2]}
          py={[5]}
          px={[2]}
          border={`2px solid`}
          borderRadius="3px"
          color={red}
          fontSize={[3, 4]}
        >
          <Link to="/examples">
            <Text fontSize={[3, 4]}>Examples</Text>
          </Link>
        </Card>
      </Flex>
    </Layout>
  );
}
