import React, { Component } from 'react';
import { Header, VideoThumbnail, ErrorMessage } from '../../components';
import { StyledWrapper, StyledSuggestionsDiv, StyledIframe, StyledVideoWrapper } from './styled';
import { fetchRelatedVideos } from '../../api';
import { YOUTUBE_EMBED_URL } from '../../utils';

class VideoPlayerPage extends Component {
  state = {
    relatedVideos: { items: [], error: false },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { videoId } = this.props.match.params;
    const relatedVideos = await fetchRelatedVideos(videoId);
    if (relatedVideos.error) {
      this.setState({ error: true });
    } else {
      this.setState({ relatedVideos: await relatedVideos.data });
    }
  };

  render() {
    const { videoId, title } = this.props.match.params;
    const { relatedVideos, error } = this.state;
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
          <StyledSuggestionsDiv>
            {relatedVideos.items.map(({ snippet, id }) => (
              <VideoThumbnail
                flexDirection='row'
                width='100%'
                key={id.videoId}
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
