import React from 'react';
import { StyledErrorDiv } from './styled';

export const ErrorMessage = () => (
  <StyledErrorDiv>
    <i className='fa fa-exclamation-triangle fa-4x' aria-hidden='true' />
    <h1>An error occurred.</h1>

    <h3>Please don&apos;t blame yourself, it&apos;s probably not your fault.</h3>
    <h4>
      In almost all the cases it&apos;s bad internet. Please check your internet and try again.
    </h4>
    <h4>Sorry we don&apos;t have a dinosaur game like chrome.</h4>
  </StyledErrorDiv>
);
