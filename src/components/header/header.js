import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledHeader,
  StyledInput,
  StyledButton,
  StyledFrom,
  StyledLogoContainer,
  StyledBrandName,
  StyledBrandNameSup,
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
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <StyledLogoContainer>
            <i className='fa fa-youtube-play fa-4x' />
            <StyledBrandName>
              VideoTube <StyledBrandNameSup>PK</StyledBrandNameSup>
            </StyledBrandName>
          </StyledLogoContainer>
        </Link>
        <StyledFrom>
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
        </StyledFrom>
      </StyledHeader>
    );
  }
}

export { Header };
