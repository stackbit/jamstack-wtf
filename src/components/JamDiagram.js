import React from 'react';
import styled from 'styled-components';
import { color } from '../styles/colors';
import { Flex, Card } from 'rebass';

export function JamDiagram() {
  return (
    <Flex
      my={[5, 6]}
      fontSize={[1, 3]}
      flexWrap="wrap"
      style={{ textAlign: 'center' }}
    >
      <Item bg={color.turq} borderRadius="16px 4px 4px 4px">
        Javascript
      </Item>
      <Item bg={color.orange} mx="6px" borderRadius="4px">
        APIs
      </Item>
      <Item bg={color.pink} borderRadius="4px 16px 4px 4px">
        Markup
      </Item>
      <Item
        flex="1 1 100%"
        mt="6px"
        bg="white"
        borderRadius="4px 4px 16px 16px"
      >
        JAM
      </Item>
    </Flex>
  );
}

const Item = styled(Card)``;
Item.defaultProps = {
  flex: 1,
  py: 4,
  color: color.black,
};
