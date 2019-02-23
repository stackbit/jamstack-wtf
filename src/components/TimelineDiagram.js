import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Card } from 'rebass';
import { color } from '../styles/colors';

export function TimelineDiagram() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      mx="auto"
      my={[5, 6]}
      fontSize={[1, 3]}
      flexWrap="wrap"
      style={{ maxWidth: '500px', textAlign: 'center' }}
    >
      <TimelineItem bg={color.turq} title="2015">
        Static sites are becoming popular due to the popularity of certain SSG
        such as Jekyll.
      </TimelineItem>
      <Stem />
      <TimelineItem bg={color.orange} title="2016">
        A small group of developers believe that Static sites don't have to be
        static and the term "JAMstack" comes to life.
      </TimelineItem>
      <Stem />
      <TimelineItem bg={color.pink} title="2017">
        The modern web revolution starts prioritising the importance of
        performance, scalability and developer experience. The term JAMstack
        starts to be adopted by a wider group of developers and the first
        enterprise JAMstack projects are announced.
      </TimelineItem>
      <Stem />
      <TimelineItem bg={color.blue} title="2018">
        Tools like Netlify, Gatsby and Contentful have helped promote the term
        and the community is rapidly growing. This was also the year of the
        first JAMstack Conference.
      </TimelineItem>
    </Flex>
  );
}

function TimelineItem({ bg, title, children }) {
  return (
    <Box>
      <Item bg={bg} mb="6px" borderRadius="16px 16px 4px 4px">
        {title}
      </Item>
      <Item bg="white" px={4} borderRadius="4px 4px 16px 16px">
        <p>{children}</p>
      </Item>
    </Box>
  );
}

const Item = styled(Card)``;
Item.defaultProps = {
  flex: 1,
  py: 4,
  color: color.black,
};

const Stem = styled(Box)`
  width: 3px;
`;
Stem.defaultProps = {
  pt: [4, 5],
  bg: 'white',
  mx: 'auto',
};
