import React, { useState, useEffect } from 'react';
import { Header, VideoThumbnail, ErrorMessage } from '../../components';
import {
  StyledWrapper,
  StyledSuggestionsContainer,
  StyledIframe,
  StyledVideoWrapper,
} from './styled';
import { fetchRelatedVideos } from '../../api';
import { YOUTUBE_EMBED_URL } from '../../utils';
import { propTypes } from './prop-types';

export const VideoDetailPage = ({ match: { params } }) => {
  const [relatedVideosList, setRelatedVideosList] = useState([]);
  const [error, setError] = useState(false);
  const { videoId, title } = params;

  const getRelatedVideosList = async () => {
    const relatedVideos = await fetchRelatedVideos(videoId);
    if (relatedVideos.error) {
      setError(true);
    } else {
      setRelatedVideosList(relatedVideos.data.items);
    }
  };
  useEffect(() => {
    getRelatedVideosList();
  }, []);

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div>
      <Header />
      <StyledWrapper>
        <div>
          <StyledVideoWrapper>
            <StyledIframe
              title='videPlayer'
              src={`${YOUTUBE_EMBED_URL}/${videoId}`}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </StyledVideoWrapper>
          <h3>{title}</h3>
        </div>
        <StyledSuggestionsContainer>
          {relatedVideosList.map(({ snippet, id }) => (
            <VideoThumbnail
              flexDirection='row'
              width='100%'
              key={id.videoId}
              videoId={id.videoId}
              imageUrl={snippet.thumbnails.medium.url}
              title={snippet.title}
            />
          ))}
        </StyledSuggestionsContainer>
      </StyledWrapper>
    </div>
  );
};

VideoDetailPage.propTypes = propTypes;
