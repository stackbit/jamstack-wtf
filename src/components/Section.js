import React from 'react';
import { Box, Text, Container, Divider } from '@peduarte/wallop-system';

export const Section = ({ hideDivider, children }) => (
  <React.Fragment>
    <Container my={[5, 6]} mx={0}>
      {children}
      {!hideDivider && <Divider my={[5, 6]} />}
    </Container>
  </React.Fragment>
);

export const SectionTitle = props => (
  <Text
    as="h3"
    size="3"
    mb={['4', '5']}
    weight="bold"
    sx={{ textTransform: 'uppercase', letterSpacing: '1px' }}
    {...props}
  />
);

export const SubSection = props => <Box ml={['4', '5']} {...props} />;

export const SubSectionTitle = props => (
  <Text as="h4" size="4" mt="5" {...props} />
);

export const SubSectionText = props => (
  <Text as="p" size="4" sx={{ color: 'gray' }} {...props} />
);
