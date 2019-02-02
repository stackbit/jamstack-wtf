import React from 'react';
import styled from 'styled-components';
import { Box, Text } from 'rebass';
import { color } from '../styles/colors';

export function Chapter({ title, id, bg, color, children }) {
  return (
    <Box p={[4, 5, 6]} bg={bg} color={color}>
      <ChapterTitle id={id}>{title}</ChapterTitle>
      {children}
    </Box>
  );
}

const ChapterTitle = styled(Text)`
  &:after {
    content: '';
    display: block;
    width: 32px;
    height: 0;
    border-top: 2px solid ${color.grey};
    opacity: 0.5;
    margin: 15px 0;
  }
`;
ChapterTitle.defaultProps = {
  as: 'h2',
  fontSize: [3, 4],
};
