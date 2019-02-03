import React from 'react';
import { Text } from 'rebass';
import { Chapter } from './Chapter';
import { color } from '../styles/colors';
import { Section, SubSectionTitle, SubSection } from './Section';
import { Ul, Li } from './SimpleList';

export function About() {
  return (
    <Chapter title="About" id="about">
      <Section hideDivider>
        <p>
          This project was put together by{' '}
          <a href="https://twitter.com/peduarte">@peduarte</a> and presented at
          the{' '}
          <a href="https://www.meetup.com/JAMstack-London/events/257961818/">
            JAMstack conf
          </a>{' '}
          in London .
        </p>
        <Text mt="5">
          The goal of this cheatsheet is to gather the concept of JAMstack in a
          straight-forward guide to encourage other developers to adopt the
          workflow.
        </Text>

        <p />
      </Section>
    </Chapter>
  );
}
