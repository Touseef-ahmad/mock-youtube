import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledBrandName,
  StyledBrandNameSuperscript,
  StyledButton,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledLinkWrapper,
  StyledLogoContainer,
} from './styled';

export const Header = () => {
  const [query, setQuery] = useState('');
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <StyledHeader>
      <StyledLinkWrapper>
        <Link to='/'>
          <StyledLogoContainer>
            <i className='fa fa-youtube-play fa-4x' />
            <StyledBrandName>
              VideoTube <StyledBrandNameSuperscript>PK</StyledBrandNameSuperscript>
            </StyledBrandName>
          </StyledLogoContainer>
        </Link>
      </StyledLinkWrapper>
      <StyledForm>
        <StyledInput value={query} onChange={handleInputChange} placeholder='search' type='text' />
        <Link to={`/results/${query}`}>
          <StyledButton>
            <i className='fa fa-search' />
          </StyledButton>
        </Link>
      </StyledForm>
    </StyledHeader>
  );
};
