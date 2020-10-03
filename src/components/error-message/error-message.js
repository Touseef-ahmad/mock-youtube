import React from 'react';
import { StyledErrorPageContainer } from './styled';

export const ErrorMessage = () => (
  <StyledErrorPageContainer>
    <i className='fa fa-exclamation-triangle fa-4x' aria-hidden='true' />
    <h1>An error occurred.</h1>

    <span>Please don&apos;t blame yourself, it&apos;s probably not your fault.</span>
    <span>
      In almost all the cases it&apos;s bad internet. Please check your internet and try again.
    </span>
  </StyledErrorPageContainer>
);
