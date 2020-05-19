import React from 'react';
import { Box, Text, Link } from '@peduarte/wallop-system';
import { Section } from './Section';

export function About() {
  return (
    <Box
      m={[4, 5]}
      mt={[-4, -5]}
      p={[4, 5]}
      sx={{
        bg: 'pink',
        color: 'white',
      }}
    >
      <Text as="h3" size="4">
        About
      </Text>
      <Section hideDivider>
        <Text as="p" size="5">
          This project was put together by{' '}
          <Link
            sx={{ color: 'white' }}
            color="black"
            href="https://twitter.com/peduarte"
          >
            @peduarte
          </Link>{' '}
          and presented at the{' '}
          <Link
            sx={{ color: 'white' }}
            color="black"
            href="https://www.meetup.com/JAMstack-London/events/257961818/"
          >
            JAMstack meetup
          </Link>{' '}
          in London. The decks are available{' '}
          <Link
            sx={{ color: 'white' }}
            color="black"
            href="https://speakerdeck.com/peduarte/jamstack-cheatsheet"
          >
            here
          </Link>
          .
        </Text>
        <Text as="p" mt="5" size="5">
          The goal of this project is to gather the concept of JAMstack in a
          straight-forward way to encourage other developers to adopt the
          workflow.
        </Text>
        <Text as="p" mt="5" size="5">
          Built with{' '}
          <Link
            sx={{ color: 'white' }}
            color="black"
            href="https://ped.ro/blog/wallop-system-built-with-modulz"
          >
            Wallop System
          </Link>
          ,{' '}
          <Link
            sx={{ color: 'white' }}
            color="black"
            href="https://www.gatsbyjs.org/"
          >
            Gatsby
          </Link>
          , hosted on{' '}
          <Link
            sx={{ color: 'white' }}
            color="black"
            href="https://netlify.com"
          >
            Netlify
          </Link>{' '}
          and open sourced on{' '}
          <Link
            sx={{ color: 'white' }}
            color="black"
            href="https://github.com/peduarte/jamstack-wtf"
          >
            Github
          </Link>
          .
        </Text>

        <Text as="p" mt="5" size="5">
          JAMstack.
        </Text>
      </Section>
    </Box>
  );
}
