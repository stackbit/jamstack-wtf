import React from 'react';
import { Flex, Box, Text } from '@peduarte/wallop-system';

export function TimelineDiagram() {
  return (
    <Flex
      mx="auto"
      my={['5', '6']}
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '500px',
        textAlign: 'center',
      }}
    >
      <TimelineItem bg="turq" title="2015">
        Static sites are becoming popular due to the popularity of certain SSG
        such as Jekyll.
      </TimelineItem>
      <Stem />
      <TimelineItem bg="orange" title="2016">
        A small group of developers believe that Static sites don't have to be
        static and the term "JAMstack" comes to life.
      </TimelineItem>
      <Stem />
      <TimelineItem bg="pink" title="2017">
        The modern web revolution starts prioritising the importance of
        performance, scalability and developer experience. The term JAMstack
        starts to be adopted by a wider group of developers and the first
        enterprise JAMstack projects are announced.
      </TimelineItem>
      <Stem />
      <TimelineItem bg="blue" title="2018">
        Tools like Netlify, Gatsby and Contentful have helped promote the term
        and the community is rapidly growing. This was also the year of the
        first JAMstack Conference.
      </TimelineItem>
    </Flex>
  );
}

function TimelineItem({ title, bg, children }) {
  return (
    <Box>
      <Item sx={{ bg, borderRadius: '16px 16px 4px 4px' }} mb="6px">
        <Text as="h4" size="4">
          {title}
        </Text>
      </Item>
      <Item sx={{ bg: 'white', borderRadius: '4px 4px 16px 16px' }} px={4}>
        <Text size="4">{children}</Text>
      </Item>
    </Box>
  );
}

const Item = props => (
  <Box py="4" {...props} sx={{ flex: 1, color: 'black', ...props.sx }} />
);

const Stem = props => (
  <Box
    mx="auto"
    pt={['4', '5']}
    {...props}
    sx={{ width: '3px', bg: 'white' }}
  />
);
