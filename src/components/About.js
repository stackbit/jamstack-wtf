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
      <Text as="h3" size="4" id="about">
        About
      </Text>
      <Section hideDivider>
        <Text as="p" size="5">
          This project was originally built by{' '}
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
            href="https://www.meetup.com/Jamstack-London/events/257961818/"
          >
            Jamstack meetup
          </Link>{' '}
          in London. It is maintained by{' '}
          <Link
            sx={{ color: 'white' }}
            color="black"
            href="https://www.stackbit.com/"
          >
            Stackbit
          </Link>
          .
        </Text>
        <Text as="p" mt="5" size="5">
          The goal of this project is to gather the concept of Jamstack in a
          straight-forward way to encourage other developers to adopt the
          workflow.
        </Text>
        <Text as="p" mt="5" size="5">
          Built with the help of{' '}
          <Link
            sx={{ color: 'white' }}
            color="black"
            href="https://www.gatsbyjs.com/"
          >
            Gatsby
          </Link>
          ,{' '}
          <Link
            sx={{ color: 'white' }}
            color="black"
            href="https://www.netlify.com/"
          >
            Netlify
          </Link>
          ,{' '}
          <Link
            sx={{ color: 'white' }}
            color="black"
            href="https://www.stackbit.com/"
          >
            Stackbit
          </Link>
          , and{' '}
          <Link
            sx={{ color: 'white' }}
            color="black"
            href="https://github.com/stackbit/jamstack-wtf"
          >
            Github
          </Link>
          .
        </Text>

        <Text as="p" mt="5" size="5">
          Jamstack.
        </Text>
      </Section>
    </Box>
  );
}
