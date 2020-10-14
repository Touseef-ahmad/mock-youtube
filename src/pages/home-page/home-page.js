import React, { useEffect, useState } from 'react';
import { Header, VideoThumbnail, ErrorMessage } from '../../components';
import { propTypes } from './prop-types';
import { StyledWrapper } from './styled';
import { fetchTopVideos } from '../../api';

export const HomePage = () => {
  const [topVideosList, setTopVideosList] = useState([]);
  const [error, setError] = useState(false);

  const getTopVideosList = async () => {
    const response = await fetchTopVideos();
    if (response.error) {
      setError(true);
    } else {
      setTopVideosList(response.data.items);
    }
  };
  useEffect(() => {
    getTopVideosList();
  }, []);

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div>
      <Header />
      <StyledWrapper>
        {topVideosList.map(({ snippet, etag, id }) => (
          <VideoThumbnail
            key={etag}
            flexDirection='column'
            width='20%'
            videoId={id.videoId}
            imageUrl={snippet.thumbnails.medium.url}
            title={snippet.title}
          />
        ))}
      </StyledWrapper>
    </div>
  );
};

HomePage.propTypes = propTypes;
