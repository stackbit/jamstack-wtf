import React from 'react';
import styled from 'styled-components';
import { Box, Text } from 'rebass';
import { color } from '../styles/colors';

export function TableOfContents() {
  return (
    <Box m={[4, 5]} mt={[-4, -5]} p={[4, 5]} bg={color.pink} color="white">
      <Text as="h3" fontSize={[2, 3]}>
        Table of contents
      </Text>
      <Box mt={[4, 5]} fontSize={[3, 4]}>
        <List>
          <li>
            <a href="#what-is-jamstack">What is JAMstack?</a>
            <Box as="ul" ml={[4, 5]}>
              <li>
                <a href="#meaning">Meaning</a>
              </li>
              <li>
                <a href="#benefits">Benefits</a>
              </li>
              <li>
                <a href="#best-practices">Best practices</a>
              </li>
              <li>
                <a href="#workflow">Workflow</a>
              </li>
              <li>
                <a href="#timeline">Timeline</a>
              </li>
            </Box>
          </li>
          <li>
            <a href="#getting-started">Getting started</a>
            <Box as="ul" ml={[4, 5]}>
              <li>
                <a href="#development">Development</a>
              </li>
              <li>
                <a href="#deployment">Deployment</a>
              </li>
              <li>
                <a href="#dynamic-parts">Dynamic parts</a>
              </li>
              <li>
                <a href="#cms">CMS</a>
              </li>
            </Box>
          </li>
          <li>
            <a href="#resources">Resources</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </List>
      </Box>
    </Box>
  );
}

const List = styled.ul`
  &,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;

    &:hover {
      color: black;
    }
  }
`;
