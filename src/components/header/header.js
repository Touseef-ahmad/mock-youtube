import React from 'react';
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

class Header extends React.Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { query } = this.state;

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
          <StyledInput
            value={query}
            onChange={this.handleChange}
            placeholder='search'
            type='text'
          />
          <Link to={`/results/${query}`}>
            <StyledButton>
              <i className='fa fa-search' />
            </StyledButton>
          </Link>
        </StyledForm>
      </StyledHeader>
    );
  }
}

export { Header };
