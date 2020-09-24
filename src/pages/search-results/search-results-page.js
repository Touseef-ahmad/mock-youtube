import React, { Component } from 'react';
import { Header, VideoThumbnail, ErrorMessage } from '../../components';
import { StyledResultsDiv } from './styled';
import { fetchSearchResults } from '../../api';

class SearchResultsPage extends Component {
  state = {
    results: { items: [], error: false },
  };

  componentDidMount() {
    this.fetchResults();
  }

  fetchResults = async () => {
    const { query } = this.props.match.params;
    const results = await fetchSearchResults(query);
    if (results.error) {
      this.setState({ error: true });
    } else {
      this.setState({ results: await results.data });
    }
  };

  render() {
    const { results, error } = this.state;
    if (error) {
      return <ErrorMessage />;
    }
    return (
      <div>
        <Header />
        <StyledResultsDiv>
          {results.items.map(({ snippet, id }) => (
            <VideoThumbnail
              flexDirection='row'
              width='80%'
              key={id.videoId}
              videoId={id.videoId}
              imageUrl={snippet.thumbnails.medium.url}
              title={snippet.title}
            />
          ))}
        </StyledResultsDiv>
      </div>
    );
  }
}

export { SearchResultsPage };
