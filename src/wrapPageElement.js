import React from 'react';
import { DesignSystemProvider } from '@peduarte/wallop-system';

export const wrapPageElement = props => (
  <DesignSystemProvider>{props.element}</DesignSystemProvider>
);
