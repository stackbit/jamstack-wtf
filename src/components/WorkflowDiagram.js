import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Card } from 'rebass';
import { color } from '../styles/colors';

export function WorkflowDiagram() {
  return (
    <Flex
      mt={[5, 6]}
      mx="auto"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      fontSize={[1, 3]}
      style={{ maxWidth: '360px' }}
    >
      <Item bg={color.turq}>Develop</Item>
      <Stem />
      <Circle>Version Control</Circle>
      <Stem />
      <Item bg={color.orange}>Automated build</Item>
      <Stem />
      <Circle>Static assets</Circle>
      <Stem />
      <Circle>Atomic deploy</Circle>
      <Stem />
      <Circle>Pre-render &amp; invalidate cache</Circle>
      <Stem />
      <Item bg={color.pink}>Update CDN</Item>
    </Flex>
  );
}

const Item = styled(Card)`
  text-align: center;
`;
Item.defaultProps = {
  flex: 1,
  py: 4,
  color: color.black,
  width: '100%',
  borderRadius: '16px',
};

const Circle = styled(Card)`
  display: flex;
  height: 150px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
Circle.defaultProps = {
  width: '150px',
  borderRadius: '100%',
  border: '3px solid white',
  fontSize: 2,
};

const Stem = styled(Box)`
  width: 3px;
`;
Stem.defaultProps = {
  pt: [4, 5],
  bg: 'white',
};
