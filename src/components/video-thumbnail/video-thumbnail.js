import React from 'react';
import { Link } from 'react-router-dom';
import { propTypes } from './prop-types';
import {
  StyledThumbnailContainer,
  StyledImage,
  StyledImageContainer,
  StyledPlayIconContainer,
  StyledTitle,
} from './styled';

export const VideoThumbnail = ({ title, imageUrl, flexDirection, width, videoId }) => (
  <StyledThumbnailContainer width={width} flexDirection={flexDirection}>
    <StyledImageContainer>
      <StyledImage src={imageUrl} alt='some' />
      <Link to={`/watch/${videoId}`}>
        <StyledPlayIconContainer>
          <i className='fa fa-play fa-3x' />
        </StyledPlayIconContainer>
      </Link>
    </StyledImageContainer>
    <StyledTitle>{title}</StyledTitle>
  </StyledThumbnailContainer>
);

VideoThumbnail.propTypes = propTypes;
