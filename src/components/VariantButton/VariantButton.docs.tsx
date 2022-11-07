import React from 'react';
import { Document, Example } from '@component-controls/core';
import { VariantButton, VariantButtonProps } from './VariantButton';

export default {
  title: 'Button',
  component: VariantButton,
} as Document;

export const overview: Example<VariantButtonProps> = props => (
  <VariantButton {...props} />
);

overview.controls = {
  text: 'Primary button',
};
