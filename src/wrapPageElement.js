import React from 'react';
import { WallopProvider } from '@peduarte/wallop-system';

export const wrapPageElement = props => (
  <WallopProvider>{props.element}</WallopProvider>
);
