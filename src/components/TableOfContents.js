import React from 'react';
import { Box, Text } from 'rebass';
import { color } from '../styles/colors';

export function TableOfContents() {
  return (
    <Box m={[4, 5]} mt={[-4, -5]} p={[4, 5]} bg={color.pink} color="white">
      <Text as="h3" fontSize={[2, 3]}>
        Table of contents
      </Text>
      <Box my={[5, 6]} fontSize={[3, 5]}>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <a href="#what-is-jamstack">What is JAMstack?</a>
            <Box as="ul" ml={[4, 5]}>
              <li>
                <a href="#meaning">Meaning</a>
              </li>
              <li>
                <a href="#best-practices">Best practices</a>
              </li>
              <li>
                <a href="#timeline">Timeline</a>
              </li>
              <li>
                <a href="#workflow">Workflow</a>
              </li>
              <li>
                <a href="#">Benefits</a>
              </li>
            </Box>
          </li>
          <li>
            <a href="#">Getting started</a>
            <Box as="ul" ml={[4, 5]}>
              <li>
                <a href="#">Development</a>
              </li>
              <li>
                <a href="#">Deployment</a>
              </li>
              <li>
                <a href="#">Dynamic parts</a>
              </li>
              <li>
                <a href="#">CMS</a>
              </li>
            </Box>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Examples</a>
          </li>
        </ul>
      </Box>
    </Box>
  );
}
