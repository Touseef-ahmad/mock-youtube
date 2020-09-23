import React, { Component } from 'react';
import { Header, VideoThumbnail } from '../../components';
import { StyledWrapper, StyledSuggestionsDiv, StyledIframe, StyledVideoWrapper } from './styled';
import { fetchRelatedVideos } from '../../api';

class VideoPlayerPage extends Component {
  state = {
    results: { items: [] },
  };

  async componentDidMount() {
    const { videoId } = this.props.match.params;
    const results = await fetchRelatedVideos(videoId);
    console.log(results);
    this.setState({ results: await results.data });
  }

  render() {
    const { videoId } = this.props.match.params;
    const { results } = this.state;
    return (
      <div>
        <Header />
        <StyledWrapper>
          <div>
            <StyledVideoWrapper>
              <StyledIframe
                title='videPlayer'
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </StyledVideoWrapper>
            <h3>
              Thor vs Hela - Throne Room Fight Scene - Thor Lost His Eye - Thor Ragnarok (2017)
              Movie CLIP HD
            </h3>
          </div>
          <StyledSuggestionsDiv>
            {results.items.map(({ snippet, id }) => (
              <VideoThumbnail
                flexDirection='row'
                width='100%'
                videoId={id.videoId}
                imageUrl={snippet.thumbnails.medium.url}
                title={snippet.title}
              />
            ))}
          </StyledSuggestionsDiv>
        </StyledWrapper>
      </div>
    );
  }
}

export { VideoPlayerPage };
