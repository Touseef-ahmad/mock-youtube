import React, { useEffect, useState } from 'react';
import { Header, VideoThumbnail, ErrorMessage } from '../../components';
import { propTypes } from './prop-types';
import { StyledWrapper } from './styled';
import { fetchSearchResults } from '../../api';

export const SearchResultsPage = ({ match: { params } }) => {
  const [searchResultsList, setSearchResultsList] = useState([]);
  const [error, setError] = useState(false);
  const { query } = params;

  const getSearchResultsList = async () => {
    const response = await fetchSearchResults(query);
    if (response.error) {
      setError(true);
    } else {
      setSearchResultsList(response.data.items);
    }
  };
  useEffect(() => {
    getSearchResultsList();
  }, []);

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div>
      <Header />
      <StyledWrapper>
        {searchResultsList.map(({ snippet, id }) => (
          <VideoThumbnail
            flexDirection='row'
            width='80%'
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

SearchResultsPage.propTypes = propTypes;
