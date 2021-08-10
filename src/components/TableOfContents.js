import React from 'react';
import { Box, Text, Link } from '@peduarte/wallop-system';

export function TableOfContents() {
  return (
    <Box
      m={[4, 5]}
      mt={[-4, -5]}
      p={[4, 5]}
      sx={{ bg: 'pink', color: 'white' }}
    >
      <Text as="h3" size="4">
        Table of contents
      </Text>
      <Box mt={[4, 5]}>
        <Box as="ol" sx={{ listStyle: 'none' }}>
          <li>
            <Text size="5">
              <Link variant="ghost" href="#what-is-jamstack">
                What is Jamstack?
              </Link>
            </Text>
            <Box as="ol" ml={[4, 5]} sx={{ listStyle: 'none' }}>
              <li>
                <Text size="5">
                  <Link variant="ghost" href="#meaning">
                    Meaning
                  </Link>
                </Text>
              </li>
              <li>
                <Text size="5">
                  <Link variant="ghost" href="#benefits">
                    Benefits
                  </Link>
                </Text>
              </li>
              <li>
                <Text size="5">
                  <Link variant="ghost" href="#best-practices">
                    Best practices
                  </Link>
                </Text>
              </li>
              <li>
                <Text size="5">
                  <Link variant="ghost" href="#workflow">
                    Workflow
                  </Link>
                </Text>
              </li>
              <li>
                <Text size="5">
                  <Link variant="ghost" href="#timeline">
                    Timeline
                  </Link>
                </Text>
              </li>
            </Box>
          </li>
          <li>
            <Text size="5">
              <Link variant="ghost" href="#getting-started">
                Getting started
              </Link>
            </Text>
            <Box as="ol" ml={[4, 5]} sx={{ listStyle: 'none' }}>
              <li>
                <Text size="5">
                  <Link variant="ghost" href="#development">
                    Development
                  </Link>
                </Text>
              </li>
              <li>
                <Text size="5">
                  <Link variant="ghost" href="#deployment">
                    Deployment
                  </Link>
                </Text>
              </li>
              <li>
                <Text size="5">
                  <Link variant="ghost" href="#dynamic-parts">
                    Dynamic parts
                  </Link>
                </Text>
              </li>
              <li>
                <Text size="5">
                  <Link variant="ghost" href="#cms">
                    CMS
                  </Link>
                </Text>
              </li>
            </Box>
          </li>
          <li>
            <Text size="5">
              <Link variant="ghost" href="#resources">
                Resources
              </Link>
            </Text>
          </li>
          <li>
            <Text size="5">
              <Link variant="ghost" href="#about">
                About
              </Link>
            </Text>
          </li>
        </Box>
      </Box>
    </Box>
  );
}
