import React, { useEffect, useState } from 'react';
import { Header, VideoThumbnail, ErrorMessage } from '../../components';
import { StyledWrapper } from './styled';
import { fetchSearchResults } from '../../api';

export const SearchResultsPage = props => {
  const [searchResultsList, setSearchResultsList] = useState([]);
  const [error, setError] = useState(false);
  const { query } = props.match.params;
  useEffect(() => {
    const getSearchResultsList = async () => {
      const searchResults = await fetchSearchResults(query);
      if (searchResults.error) {
        setError(true);
      } else {
        setSearchResultsList(searchResults.data.items);
      }
    };
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
