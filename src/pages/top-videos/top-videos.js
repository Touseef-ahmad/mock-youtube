import React from 'react';
import { Header, VideoThumbnail, ErrorMessage } from '../../components';
import { StyledWrapper } from './styled';
import { fetchTopVideos } from '../../api';

class TopVideos extends React.Component {
  state = {
    topVideos: { items: [], error: false },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const topVideos = await fetchTopVideos();
    if (topVideos.error) {
      this.setState({ error: true });
    } else {
      this.setState({ topVideos: topVideos.data });
    }
  };

  render() {
    const { topVideos, error } = this.state;
    if (error) {
      return <ErrorMessage />;
    }
    return (
      <div>
        <Header />
        <StyledWrapper>
          {topVideos.items.map(({ snippet, id }) => (
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
  }
}

export { TopVideos };
