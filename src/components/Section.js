import React from 'react';
import styled from 'styled-components';
import { Box, Text } from 'rebass';
import { color } from '../styles/colors';

export const Section = ({ hideDivider, children }) => (
  <React.Fragment>
    <Box my={[5, 6]} fontSize={[3, 4]} style={{ maxWidth: '720px' }}>
      {children}
    </Box>
    {!hideDivider && <Divider />}
  </React.Fragment>
);

export const SectionTitle = styled(Text)``;
SectionTitle.defaultProps = {
  as: 'h3',
  fontSize: [2, 3],
};

export const SectionSubTitle = styled(Text)``;
SectionSubTitle.defaultProps = {
  as: 'h4',
  fontSize: [2, 3],
  mt: [5, 6],
  color: color.grey,
};

const Divider = styled(Box)`
  border: none;
  border-top: 3px solid #555;
  height: 0;
  max-width: 720px;
`;
Divider.defaultProps = {
  as: 'hr',
  my: [5, 6],
};
