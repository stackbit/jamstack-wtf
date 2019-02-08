import React from 'react';
import styled from 'styled-components';
import { Box, Text } from 'rebass';
import { color } from '../styles/colors';
import { Section } from './Section';

export function About() {
  return (
    <Box
      m={[4, 5]}
      mt={[-4, -5]}
      p={[4, 5]}
      bg={color.pink}
      color="white"
      fontSize={[3, 5]}
    >
      <Text as="h3" fontSize={[2, 3]}>
        About
      </Text>
      <Section hideDivider>
        <p>
          This project was put together by{' '}
          <A href="https://twitter.com/peduarte">@peduarte</A> and presented at
          the{' '}
          <A href="https://www.meetup.com/JAMstack-London/events/257961818/">
            JAMstack meetup
          </A>{' '}
          <A href="https://speakerdeck.com/peduarte/jamstack-cheatsheet">
            (decks here)
          </A>{' '}
          in London.
        </p>
        <Text as="p" mt="5">
          The goal of this guide is to gather the concept of JAMstack in a
          straight-forward guide to encourage other developers to adopt the
          workflow.
        </Text>
        <Text as="p" mt="5">
          Built with <A href="https://www.gatsbyjs.org/">Gatsby</A>, hosted on{' '}
          <A href="https://netlify.com">Netlify</A> and open sourced on{' '}
          <A href="https://github.com/peduarte/jamstack-wtf">Github</A>.
        </Text>

        <Text as="p" mt="5">
          JAMstack.
        </Text>
      </Section>
    </Box>
  );
}

const A = styled.a`
  &:hover {
    color: ${color.black};
  }
`;
