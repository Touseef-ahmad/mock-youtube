import React, { useEffect, useState } from 'react';
import { Header, VideoThumbnail, ErrorMessage } from '../../components';
import { StyledWrapper } from './styled';
import { fetchTopVideos } from '../../api';

export const HomePage = () => {
  const [topVideosList, setTopVideosList] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getTopVideosList = async () => {
      const topVideos = await fetchTopVideos();
      if (topVideos.error) {
        setError(true);
      } else {
        setTopVideosList(topVideos.data.items);
      }
    };
    getTopVideosList();
  }, []);

  if (error) {
    return <ErrorMessage />;
  }
  return (
    <div>
      <Header />
      <StyledWrapper>
        {topVideosList.map(({ snippet, id }) => (
          <VideoThumbnail
            flexDirection='column'
            width='20%'
            key={id.videoId}
            videoId={id.videoId}
            imageUrl={snippet.thumbnails.medium.url}
            title={snippet.title}
          />
        ))}
      </StyledWrapper>
    </div>
  );
};
