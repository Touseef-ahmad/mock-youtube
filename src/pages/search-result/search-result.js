import React, { PureComponent } from 'react';
import { Header, VideoThumbnail } from '../../components';
import { StyledResultsDiv } from './styled';
import { fetchSearchResults } from '../../api';

class SearchResultPage extends PureComponent {
  state = {
    results: { items: [] },
  };

  async componentDidMount() {
    const { query } = this.props.match.params;
    const results = await fetchSearchResults(query);
    this.setState({ results: await results.data });
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <Header />
        <StyledResultsDiv>
          {results.items.map(({ snippet, id }) => (
            <VideoThumbnail
              flexDirection='row'
              width='80%'
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

export { SearchResultPage };
