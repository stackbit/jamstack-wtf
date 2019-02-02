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

export const SectionTitle = styled(Text)`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
`;
SectionTitle.defaultProps = {
  as: 'h3',
  fontSize: 2,
  mb: [4, 5],
};

export const SubSection = styled(Box)``;
SubSection.defaultProps = {
  ml: [4, 5],
};

export const SubSectionTitle = styled(Text)``;
SubSectionTitle.defaultProps = {
  as: 'h4',
  fontSize: [2, 3],
  mt: [5, 6],
};

export const SubSectionText = styled(Text)``;
SubSectionText.defaultProps = {
  as: 'p',
  fontSize: [2, 3],
  color: color.grey,
};

const Divider = styled(Box)`
  border: none;
  border-top: 2px solid ${color.grey};
  height: 0;
  max-width: 720px;
`;
Divider.defaultProps = {
  as: 'hr',
  my: [5, 6],
};
